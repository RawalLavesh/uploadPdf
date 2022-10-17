import React, {
  BaseSyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  MasterWrapper,
  SubWrapper,
  ReviewLocate,
  FilterContainer,
  ButtonWrapper,
  FlexItem,
  DownloadWrapper,
  DetailsContainer,
  DateWrapper,
  DownloadContainer,
  DownloadButtonWrapper,
  SearchButtonWrapper,
  SearchTerm,
  FormContainer,
} from './styles'
import Label from '../../components/label/Label'
import Button from '../../components/button/Button'
import { Icon } from '../../components/icon/Icon'
import reviewLocateContext, {
  ReviewLocateContextProvider,
} from '../../store/ReviewLocateContext'
import { ReviewLocateTable } from './ReviewLocateTable'
import ExportCSV from '../../utils/ExportCSV'
import { Navigate, useLocation } from 'react-router-dom'
import SelectDropdown from '../../components/selectDropdown/SelectDropdown'
import {
  ReviewLocateRequestModel,
  ReviewRequest,
} from '../../shared/models/IReviewLocate'
import { AxiosError } from 'axios'
import {
  LottieWrapper,
  SpinnerWrapper,
  ToastWrapper,
} from '../submitLocate/styles'
import { Toast } from '../../components/toast/Toast'
import { Textbox } from '../../components/textbox/Textbox'
import { AuthContext } from '../../store/LoginAuthContext'
import { Icons } from '../../shared/GlobalStyle'
import CustomCalendar from '../../components/customCalendar/CustomCalendar'
import {
  WDHorizontalDivider,
  WDLabelHeadingWhite,
  WDLabelHeadingWhiteBold,
  WDLabelPrimary,
} from '../../components/ui/WDLabel'
import {
  WDCard,
  WDCardBlue,
  WDCardBlueBottom,
  WDCardBlueTop,
  WDCardContentRound,
  WDCardHeader,
} from '../../components/ui/WDCard'
import { WDCalendar, WDSelect, WDTextbox } from '../../components/ui/WDTextbox'
import {
  WDButton,
  WDButtonDisabled,
  WDButtonGroup,
  WDButtonOutLine,
  WDButtonTransparent,
} from '../../components/ui/WDButton'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'

export const Review = () => {
  type LocationState = {
    status: boolean
    text: string
    fromSubmit: boolean
  }

  const location = useLocation()
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return month.concat('-').concat(day).concat('-').concat(year)
  }
  const formatToISODate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return year.concat('-').concat(month).concat('-').concat(day)
  }
  const formatTime = (date: Date) => {
    return (
      date.toLocaleString('en-US').split(' ')[1] +
      ' ' +
      date.toLocaleString('en-US').split(' ')[2] +
      ' ' +
      'UTC'
    )
  }
  const [filters, setFilters] = useState<ReviewLocateRequestModel>({
    fromDate: '',
    toDate: '',
    statuses: [0],
    userName: 'Select',
    filterByUser: 'Select',
    cusipOrSymbol: '',
  })
  const [currentFilterOption, setCurrentFilterOption] = useState({
    index: 1,
    value: '0',
    label: 'All',
  })
  const [tableDataOption, setTableDataOption] = useState<{
    pageIndex: number
    pageSize: number
  }>({
    pageIndex: 1,
    pageSize: 50,
  })
  const form = useRef<HTMLFormElement>(null)
  const csvLinkRef = useRef<HTMLDivElement>(null)
  const reviewLocateRequestData = useContext(reviewLocateContext)
  const userStore = useContext(AuthContext)
  const [reviewRequestData, setReviewData] = useState(
    reviewLocateRequestData.reviewLocateRequests
  )
  const [reviewFilteredDataCount, setReviewFilteredDataCount] = useState(
    reviewRequestData.totalRecordCount
  )
  const [downloadReviewData, setDownloadReviewData] = useState<ReviewRequest[]>(
    []
  )
  const [modal, setModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isAPILoading, setIsAPILoading] = useState(false)
  const [isChange, setIsChange] = useState(true)
  const [apiReviewStatus, setAPIReviewStatus] = useState<{
    status: boolean | null
    text: string
    fromSubmit: boolean
  }>({
    status: (location.state as LocationState)?.status,
    text: (location.state as LocationState)?.text,
    fromSubmit: (location.state as LocationState)?.fromSubmit,
  })
  const [updateReviewStatus, setUpdateReviewStatus] = useState<{
    status: boolean | null
    text: string
  }>({
    status: null,
    text: '',
  })
  const statusList = [
    { label: 'Filter by Status', value: '0' },
    { label: 'Pending ', value: '1' },
    { label: 'Approved', value: '2' },
    { label: 'Partial', value: '3' },
    { label: 'Rejected', value: '4' },
  ]
  const usersList = [{ label: 'Filter by User', value: 'Select' }]
  userStore.relatedUsers.forEach((user) => {
    usersList.push({
      label: user.userName,
      value: user.userName,
    })
  })

  const getFromDate = (date: Date) => {
    const updatedValue: ReviewLocateRequestModel = {
      ...filters,
      fromDate: formatToISODate(date),
    }
    setFilters(updatedValue)
    setIsChange(false)
  }

  const getToDate = (date: Date) => {
    const updatedValue: ReviewLocateRequestModel = {
      ...filters,
      toDate: formatToISODate(date),
    }
    setFilters(updatedValue)
    setIsChange(false)
  }

  const mappedStatus = (statusId: string) => {
    const status = statusId.trim()
    switch (status) {
      case 'A':
        return 'Approved'
      case 'P':
        return 'Pending'
      case 'T':
        return 'Partial'
      case 'R':
        return 'Rejected'
    }
  }

  const checkIfFilterChange = (updatedFilter: ReviewLocateRequestModel) => {
    return filters !== updatedFilter
  }

  const enableStatusFilter = (value: string) => {
    const updatedFilter = {
      ...filters,
      statuses: [parseInt(value)],
    }
    setFilters(updatedFilter)
    checkIfFilterChange(updatedFilter) ? setIsChange(false) : setIsChange(true)
  }

  const enableUserFilter = (value: string) => {
    const updatedFilter = { ...filters, userName: value }
    setFilters(updatedFilter)
    checkIfFilterChange(updatedFilter) ? setIsChange(false) : setIsChange(true)
  }

  const openModal = (
    pageIndex = tableDataOption.pageIndex,
    pageSize = tableDataOption.pageSize,
    filterByStatus?: string
  ) => {
    setTableDataOption({
      pageIndex,
      pageSize,
    })
    setModal(true)
    setIsLoading(true)
    const formElement = form.current?.elements as HTMLFormControlsCollection
    const status = filterByStatus ? filterByStatus : currentFilterOption.value
    const user = (formElement.namedItem('user') as HTMLInputElement).value
    const cusip = (formElement.namedItem('cusipOrSymbol') as HTMLInputElement)
      .value
    const filteredPayload: ReviewLocateRequestModel = {
      fromDate: filters.fromDate
        ? filters.fromDate
        : formatToISODate(new Date()),
      toDate: filters.toDate ? filters.toDate : formatToISODate(new Date()),
      statuses: parseInt(status) !== 0 ? [parseInt(status)] : [],
      userName: user === 'Select' ? '' : user,
      cusipOrSymbol: cusip,
      pageIndex,
      pageSize,
    }
    reviewLocateRequestData
      .sendReviewLocateRequests(filteredPayload)
      .then((res) => {
        setIsLoading(false)
        if (res.data) {
          const responseData = res.data.requests.map((data) => {
            return {
              ...data,
              updatedDate: data.updatedDate
                ? formatTime(new Date(data.updatedDate))
                : formatTime(new Date(data.locateRequestTime)),
              locateRequestTime: data.locateRequestTime
                ? formatDate(new Date(data.locateRequestTime))
                : '',
              status: mappedStatus(data.statusId),
            }
          })
          setReviewData({ ...res.data, requests: responseData })
          switch (currentFilterOption.value) {
            case '1':
              setReviewFilteredDataCount(res.data.pendingRecordCount)
              break
            case '2':
              setReviewFilteredDataCount(res.data.approvedRecordCount)
              break
            case '3':
              setReviewFilteredDataCount(res.data.partialRecordCount)
              break
            case '4':
              setReviewFilteredDataCount(res.data.rejectedRecordCount)
              break
            default:
              setReviewFilteredDataCount(res.data.totalRecordCount)
          }
        }
      })
      .catch((error: AxiosError) => {
        setIsLoading(false)
        setAPIReviewStatus({
          status: false,
          text: error.response ? error.response.statusText : error.message,
          fromSubmit: true,
        })
      })
  }

  const submitForm = (event: SubmitEvent) => {
    event.preventDefault()
    openModal()
  }

  const getUpdateStatus = (
    status: boolean,
    error: AxiosError | null | undefined
  ) => {
    if (status) {
      setUpdateReviewStatus({
        status: true,
        text: `Allocation quantity updated successfully`,
      })
      openModal()
    } else {
      setUpdateReviewStatus({
        status: false,
        text: error ? error?.message : 'Error',
      })
    }
  }

  const downloadFile = (event?: BaseSyntheticEvent) => {
    const htmlElement = event?.target as HTMLElement
    if (htmlElement.nodeName === 'BUTTON') {
      setIsAPILoading(true)
      const formElement = form.current?.elements as HTMLFormControlsCollection
      const status = (formElement.namedItem('status') as HTMLInputElement).value
      const user = (formElement.namedItem('user') as HTMLInputElement).value
      const cusip = (formElement.namedItem('cusipOrSymbol') as HTMLInputElement)
        .value
      const filteredPayload: ReviewLocateRequestModel = {
        fromDate: filters.fromDate
          ? filters.fromDate
          : formatToISODate(new Date()),
        toDate: filters.toDate ? filters.toDate : formatToISODate(new Date()),
        statuses: parseInt(status) !== 0 ? [parseInt(status)] : [],
        userName: user === 'Select' ? '' : user,
        cusipOrSymbol: cusip,
        pageIndex: 1,
        pageSize: reviewRequestData.totalRecordCount,
      }
      reviewLocateRequestData
        .sendReviewLocateRequests(filteredPayload)
        .then((res) => {
          setIsAPILoading(false)
          if (res.data) {
            const responseData = res.data.requests.map((data) => {
              return {
                ...data,
                updatedDate: data.updatedDate
                  ? formatTime(new Date(data.updatedDate))
                  : formatTime(new Date(data.locateRequestTime)),
                locateRequestTime: data.locateRequestTime
                  ? formatDate(new Date(data.locateRequestTime))
                  : '',
                status: mappedStatus(data.statusId),
              }
            })
            setDownloadReviewData([...responseData])
          }
        })
        .catch((error: AxiosError) => {
          setIsAPILoading(false)
          setAPIReviewStatus({
            status: false,
            text: error.response ? error.response.statusText : error.message,
            fromSubmit: true,
          })
        })
    }
  }

  const resetValues = () => {
    form.current?.reset()
    const updatedValue: ReviewLocateRequestModel = {
      fromDate: '',
      toDate: '',
      statuses: [0],
      userName: 'Select',
      filterByUser: 'Select',
      cusipOrSymbol: '',
    }
    setTableDataOption({
      pageIndex: 1,
      pageSize: 50,
    })
    const formElement = form.current?.elements as HTMLFormControlsCollection
    const statusElement = formElement.namedItem('status') as HTMLInputElement
    const userElement = formElement.namedItem('user') as HTMLInputElement
    const cusipElement = formElement.namedItem(
      'cusipOrSymbol'
    ) as HTMLInputElement
    statusElement.value = '0'
    userElement.value = 'Select'
    cusipElement.value = ''
    setFilters(updatedValue)
    setIsChange(true)
  }

  useEffect(() => {
    if (downloadReviewData.length) {
      const htmlAnchorElement = csvLinkRef.current?.children[0].children[0]
        .children[0] as HTMLAnchorElement
      htmlAnchorElement.click()
    }
  }, [downloadReviewData])

  useEffect(() => {
    openModal()
  }, [])

  useEffect(() => {
    openModal(undefined, undefined, currentFilterOption.value)
  }, [currentFilterOption])

  return (
    <ReviewLocateContextProvider>
      <MasterWrapper>
        <SubWrapper>
          <ReviewLocate>
            <WDCard>
              <WDCardHeader>
                <WDLabelHeadingWhite>
                  <Label>{'Review your requests'}</Label>
                </WDLabelHeadingWhite>
                <WDLabelHeadingWhiteBold>
                  <Label>{`Total: ${reviewRequestData.totalRecordCount}`}</Label>
                </WDLabelHeadingWhiteBold>
              </WDCardHeader>
              <WDCardContentRound>
                <WDCardBlue>
                  <WDCardBlueTop>
                    <FormContainer ref={form} onSubmit={submitForm}>
                      <FilterContainer>
                        <DateWrapper>
                          <WDCalendar>
                            <CustomCalendar
                              name="fromDate"
                              placeholder="From Date"
                              onChange={getFromDate}
                              resetValue={filters.fromDate}
                              maxDate={new Date()}
                            />
                          </WDCalendar>
                        </DateWrapper>
                        <DateWrapper>
                          <WDCalendar>
                            <CustomCalendar
                              name="toDate"
                              placeholder="To Date"
                              onChange={getToDate}
                              resetValue={filters.toDate}
                              maxDate={new Date()}
                              minDate={new Date(filters.fromDate)}
                            />
                          </WDCalendar>
                        </DateWrapper>
                        <DateWrapper>
                          <WDSelect>
                            <SelectDropdown
                              options={statusList}
                              value={
                                statusList.filter(
                                  (list) =>
                                    list.value === filters.statuses?.toString()
                                )[0]
                              }
                              name="status"
                              indicatorSeparator={false}
                              width={'10.3rem'}
                              height={'2rem'}
                              borderRadius={'0.25rem'}
                              onChange={(value: string) => {
                                value && enableStatusFilter(value)
                              }}
                            />
                          </WDSelect>
                        </DateWrapper>
                        <DateWrapper>
                          <WDSelect>
                            <SelectDropdown
                              options={usersList}
                              value={
                                usersList.filter(
                                  (list) =>
                                    list.value === filters.userName?.toString()
                                )[0]
                              }
                              name="user"
                              indicatorSeparator={false}
                              width={'9.5rem'}
                              height={'2rem'}
                              borderRadius={'0.25rem'}
                              onChange={(value: string) => {
                                value && enableUserFilter(value)
                              }}
                            />
                          </WDSelect>
                        </DateWrapper>
                        <DateWrapper>
                          <SearchTerm>
                            <WDTextbox>
                              <Textbox
                                placeholder={'CUSIP/Symbol'}
                                type={'text'}
                                name="cusipOrSymbol"
                                onChange={(value) =>
                                  checkIfFilterChange({
                                    ...filters,
                                    cusipOrSymbol: value,
                                  })
                                    ? setIsChange(false)
                                    : setIsChange(true)
                                }
                              />
                            </WDTextbox>
                            <SearchButtonWrapper>
                              <WDButtonTransparent>
                                <Button
                                  type={'submit'}
                                  prefixedIcon={<Icon icon={Icons.Search} />}
                                ></Button>
                              </WDButtonTransparent>
                            </SearchButtonWrapper>
                          </SearchTerm>
                        </DateWrapper>
                        <ButtonWrapper>
                          {isChange ? (
                            <WDButtonDisabled>
                              <Button type={'button'} disabled={true}>
                                {'Apply filters'}
                              </Button>
                            </WDButtonDisabled>
                          ) : (
                            <WDButton>
                              <Button
                                type={'button'}
                                disabled={false}
                                onClick={() =>
                                  openModal(
                                    1,
                                    50,
                                    filters.statuses &&
                                      filters.statuses[0].toString()
                                  )
                                }
                              >
                                {'Apply filters'}
                              </Button>
                            </WDButton>
                          )}
                        </ButtonWrapper>
                        <ButtonWrapper>
                          {!isChange ? (
                            <WDButtonOutLine>
                              <Button
                                disabled={false}
                                type={'button'}
                                onClick={resetValues}
                              >
                                {'Reset'}
                              </Button>
                            </WDButtonOutLine>
                          ) : (
                            <WDButtonDisabled>
                              <Button
                                disabled={true}
                                type={'button'}
                                onClick={resetValues}
                              >
                                {'Reset'}
                              </Button>
                            </WDButtonDisabled>
                          )}
                        </ButtonWrapper>
                      </FilterContainer>
                    </FormContainer>
                    {reviewRequestData.totalRecordCount > 0 && (
                      <DownloadContainer>
                        <DownloadButtonWrapper>
                          <FlexItem>
                            <DownloadWrapper>
                              <ExportCSV
                                csvData={downloadReviewData}
                                fileName={
                                  'Review Requests Report ' +
                                  formatDate(new Date()) +
                                  '.csv'
                                }
                                onClickCallBackFn={downloadFile}
                                reference={csvLinkRef}
                              >
                                <Icon icon={Icons.DownloadIcon} />
                                <WDLabelPrimary>
                                  <Label>{'Download'}</Label>
                                </WDLabelPrimary>
                              </ExportCSV>
                            </DownloadWrapper>
                          </FlexItem>
                        </DownloadButtonWrapper>
                      </DownloadContainer>
                    )}
                  </WDCardBlueTop>
                  {reviewRequestData.totalRecordCount >= 0 && (
                    <WDHorizontalDivider />
                  )}
                  {reviewRequestData.totalRecordCount >= 0 && (
                    <WDCardBlueBottom>
                      <WDButtonGroup activeButton={currentFilterOption.index}>
                        <Button
                          type="button"
                          onClick={() =>
                            setCurrentFilterOption({
                              index: 1,
                              value: '0',
                              label: 'All',
                            })
                          }
                        >{`All ${reviewRequestData.totalRecordCount}`}</Button>
                        <Button
                          type="button"
                          onClick={() =>
                            setCurrentFilterOption({
                              index: 2,
                              value: '2',
                              label: 'Approved',
                            })
                          }
                        >{`Approved ${reviewRequestData.approvedRecordCount}`}</Button>
                        <Button
                          type="button"
                          onClick={() =>
                            setCurrentFilterOption({
                              index: 3,
                              value: '3',
                              label: 'Partial',
                            })
                          }
                        >{`Partial ${reviewRequestData.partialRecordCount}`}</Button>
                        <Button
                          type="button"
                          onClick={() =>
                            setCurrentFilterOption({
                              index: 4,
                              value: '4',
                              label: 'Rejected',
                            })
                          }
                        >{`Rejected ${reviewRequestData.rejectedRecordCount}`}</Button>
                        <Button
                          type="button"
                          onClick={() =>
                            setCurrentFilterOption({
                              index: 5,
                              value: '1',
                              label: 'Pending',
                            })
                          }
                        >{`Pending ${reviewRequestData.pendingRecordCount}`}</Button>
                      </WDButtonGroup>
                    </WDCardBlueBottom>
                  )}
                </WDCardBlue>
                {modal && (
                  <DetailsContainer>
                    <ReviewLocateTable
                      rowData={reviewRequestData.requests}
                      totalRecords={reviewFilteredDataCount}
                      isLoading={isLoading}
                      pageIndex={tableDataOption.pageIndex}
                      pageSize={tableDataOption.pageSize}
                      updateTableCallbackFn={openModal}
                      updateStatus={getUpdateStatus}
                    />
                  </DetailsContainer>
                )}
              </WDCardContentRound>
            </WDCard>
          </ReviewLocate>
        </SubWrapper>
        {apiReviewStatus.fromSubmit && apiReviewStatus.status !== null && (
          <ToastWrapper>
            {' '}
            <Toast
              text={apiReviewStatus.text}
              type={apiReviewStatus.status ? 'success' : 'danger'}
              openStatusCallback={(status: boolean) =>
                setAPIReviewStatus({
                  status: status ? status : null,
                  text: '',
                  fromSubmit: false,
                })
              }
            />{' '}
          </ToastWrapper>
        )}
        {updateReviewStatus.status !== null && (
          <ToastWrapper>
            <Toast
              text={updateReviewStatus.text}
              type={updateReviewStatus.status ? 'success' : 'danger'}
              openStatusCallback={(status: boolean) =>
                setUpdateReviewStatus({
                  status: status ? status : null,
                  text: '',
                })
              }
            />{' '}
          </ToastWrapper>
        )}
        {isAPILoading && (
          <SpinnerWrapper>
            <LottieWrapper>
              <Lottie animationData={Loader} loop={true} />
            </LottieWrapper>
          </SpinnerWrapper>
        )}
      </MasterWrapper>
    </ReviewLocateContextProvider>
  )
}

const ReviewPage = () => {
  const { isLoggedIn } = React.useContext(AuthContext)

  if (isLoggedIn) {
    return <Review />
  } else {
    return <Navigate to={{ pathname: '/login' }} />
  }
}

export default ReviewPage
