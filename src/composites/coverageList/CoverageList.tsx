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
  FormContainer,
  LottieWrapper,
  SpinnerWrapper,
  ToastWrapper,
} from './styles'
import Label from '../../components/label/Label'
import Button from '../../components/button/Button'
import { CoverageListTable } from './CoverageListTable'
import ExportCSV from '../../utils/ExportCSV'
import { Navigate, useLocation } from 'react-router-dom'
import {
  CoverageListRequestModel,
  ReviewRequest,
} from '../../shared/models/ICoverageList'
import { AxiosError } from 'axios'
import { Toast } from '../../components/toast/Toast'
import CustomCalendar from '../../components/customCalendar/CustomCalendar'
import {
  WDLabelHeadingWhite,
  WDLabelHeadingWhiteBold,
  WDLabelPrimary,
} from '../../components/ui/WDLabel'
import {
  WDCard,
  WDCardBlue,
  WDCardBlueTop,
  WDCardContentRound,
  WDCardHeader,
} from '../../components/ui/WDCard'
import { WDCalendar } from '../../components/ui/WDTextbox'
import {
  WDButton,
  WDButtonDisabled,
  WDButtonOutLine,
} from '../../components/ui/WDButton'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'
import SvgFileExport from '../../components/svg/SvgFileExport'
import { COLORS } from '../../theme/Colors'
import { AuthContext } from '../../store/LoginAuthContext'
import coverageListContext, {
  CoverageListContextProvider,
} from '../../store/CoverageListContext'

export const CoverageList = () => {
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
  const [filters, setFilters] = useState<CoverageListRequestModel>({
    fromDate: '',
    toDate: '',
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
  const reviewLocateRequestData = useContext(coverageListContext)
  const [reviewRequestData, setReviewData] = useState(
    reviewLocateRequestData.coverageListRequests
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

  const getFromDate = (date: Date) => {
    const updatedValue: CoverageListRequestModel = {
      ...filters,
      fromDate: formatToISODate(date),
    }
    setFilters(updatedValue)
    setIsChange(false)
  }

  const getToDate = (date: Date) => {
    const updatedValue: CoverageListRequestModel = {
      ...filters,
      toDate: formatToISODate(date),
    }
    setFilters(updatedValue)
    setIsChange(false)
  }

  const openModal = (
    pageIndex = tableDataOption.pageIndex,
    pageSize = tableDataOption.pageSize
  ) => {
    setTableDataOption({
      pageIndex,
      pageSize,
    })
    setModal(true)
    setIsLoading(true)

    const filteredPayload: CoverageListRequestModel = {
      fromDate: filters.fromDate
        ? filters.fromDate
        : formatToISODate(new Date()),
      toDate: filters.toDate ? filters.toDate : formatToISODate(new Date()),
      pageIndex,
      pageSize,
    }
    reviewLocateRequestData
      .sendCoverageListRequests(filteredPayload)
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
            }
          })
          setReviewData({ ...res.data, requests: responseData })
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

  const downloadFile = (event?: BaseSyntheticEvent) => {
    const htmlElement = event?.target as HTMLElement
    if (htmlElement.nodeName === 'BUTTON') {
      setIsAPILoading(true)

      const filteredPayload: CoverageListRequestModel = {
        fromDate: filters.fromDate
          ? filters.fromDate
          : formatToISODate(new Date()),
        toDate: filters.toDate ? filters.toDate : formatToISODate(new Date()),
        pageIndex: 1,
        pageSize: reviewRequestData.totalRecordCount,
      }
      reviewLocateRequestData
        .sendCoverageListRequests(filteredPayload)
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
    const updatedValue: CoverageListRequestModel = {
      fromDate: '',
      toDate: '',
    }
    setTableDataOption({
      pageIndex: 1,
      pageSize: 50,
    })
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
  const data = [
    {
      id: '1',
      name: 'john',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '2',
      name: 'messy',
      date: '01/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '3',
      name: 'warner',
      date: '15/10/2022 11:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '4',
      name: 'smith',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '5',
      name: 'john',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '6',
      name: 'messy',
      date: '01/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '7',
      name: 'warner',
      date: '15/10/2022 11:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '8',
      name: 'smith',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '9',
      name: 'warner',
      date: '15/10/2022 11:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '10',
      name: 'smith',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '11',
      name: 'john',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '12',
      name: 'messy',
      date: '01/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '13',
      name: 'warner',
      date: '15/10/2022 11:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '14',
      name: 'smith',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '15',
      name: 'john',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '16',
      name: 'messy',
      date: '01/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '17',
      name: 'warner',
      date: '15/10/2022 11:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '18',
      name: 'smith',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '19',
      name: 'warner',
      date: '15/10/2022 11:34',
      fileName: 'coverage_list.pdf',
    },
    {
      id: '20',
      name: 'smith',
      date: '05/10/2022 13:34',
      fileName: 'coverage_list.pdf',
    },
  ]
  return (
    <CoverageListContextProvider>
      <MasterWrapper>
        <SubWrapper>
          <ReviewLocate>
            <WDCard>
              <WDCardHeader>
                <WDLabelHeadingWhite>
                  <Label>{'Coverage List File History'}</Label>
                </WDLabelHeadingWhite>
                <WDLabelHeadingWhiteBold>
                  {/* <Label>{`Total: ${reviewRequestData.totalRecordCount}`}</Label> */}
                  <Label>{`Total: 10`}</Label>
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
                        <ButtonWrapper>
                          {isChange ? (
                            <WDButtonDisabled>
                              <Button type={'button'} disabled={true}>
                                {'Apply'}
                              </Button>
                            </WDButtonDisabled>
                          ) : (
                            <WDButton>
                              <Button
                                type={'button'}
                                disabled={false}
                                onClick={() => openModal(1, 50)}
                              >
                                {'Apply'}
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
                    {/* {reviewRequestData.totalRecordCount > 0 && ( */}
                    <DownloadContainer>
                      <DownloadButtonWrapper>
                        <FlexItem>
                          <DownloadWrapper>
                            <ExportCSV
                              csvData={downloadReviewData}
                              fileName={
                                'Export File History' +
                                formatDate(new Date()) +
                                '.csv'
                              }
                              onClickCallBackFn={downloadFile}
                              reference={csvLinkRef}
                            >
                              <SvgFileExport fillColor={COLORS.UI.Primary60} />
                              <WDLabelPrimary>
                                <Label>{'Export File History'}</Label>
                              </WDLabelPrimary>
                            </ExportCSV>
                          </DownloadWrapper>
                        </FlexItem>
                      </DownloadButtonWrapper>
                    </DownloadContainer>
                    {/* )} */}
                  </WDCardBlueTop>
                </WDCardBlue>
                {/* {modal && ( */}
                <DetailsContainer>
                  {/* <CoverageListTable
                    rowData={reviewRequestData.requests}
                    totalRecords={reviewFilteredDataCount}
                    isLoading={isLoading}
                    pageIndex={tableDataOption.pageIndex}
                    pageSize={tableDataOption.pageSize}
                    // updateTableCallbackFn={openModal}
                  /> */}
                  <CoverageListTable
                    rowData={data}
                    totalRecords={10}
                    isLoading={false}
                    pageIndex={1}
                    pageSize={50}
                    // updateTableCallbackFn={openModal}
                  />
                </DetailsContainer>
                {/* )} */}
              </WDCardContentRound>
            </WDCard>
          </ReviewLocate>
        </SubWrapper>
        {apiReviewStatus.fromSubmit && apiReviewStatus.status !== null && (
          <ToastWrapper>
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
            />
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
    </CoverageListContextProvider>
  )
}

const ReviewPage = () => {
  const { isLoggedIn } = React.useContext(AuthContext)

  if (isLoggedIn) {
    return <CoverageList />
  } else {
    return <Navigate to={{ pathname: '/login' }} />
  }
}

export default ReviewPage
