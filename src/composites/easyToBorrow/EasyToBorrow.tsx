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
  FilterContainer,
  ButtonWrapper,
  DetailsContainer,
  SearchTerm,
} from './styles'
import { Navigate } from 'react-router-dom'
import Label from '../../components/label/Label'
import Button from '../../components/button/Button'
import { Icon } from '../../components/icon/Icon'
import { Textbox } from '../../components/textbox/Textbox'
import easyToBorrowContext, {
  EasyToBorrowContextProvider,
} from '../../store/EasyToBorrowContext'
import { EasyToBorrowTable } from './EasyToBorrowTable'
import ExportCSV from '../../utils/ExportCSV'
import {
  DateWrapper,
  DownloadButtonWrapper,
  DownloadContainer,
  DownloadWrapper,
  FlexItem,
  FormContainer,
  ReviewLocate,
  ReviewTopContainer,
  SearchButtonWrapper,
} from '../reviewLocate/styles'
import SelectDropdown from '../../components/selectDropdown/SelectDropdown'
import {
  BorrowSecurityModel,
  EasyToBorrowRequestModel,
} from '../../shared/models/IEasyToBorrow'
import { AxiosError } from 'axios'
import {
  LottieWrapper,
  SpinnerWrapper,
  ToastWrapper,
} from '../submitLocate/styles'
import { Toast } from '../../components/toast/Toast'
import Image from '../../components/image/Image'
import { DefaultProps } from '../../components/selectDropdown/ISelectDropdown'
import { AuthContext } from '../../store/LoginAuthContext'
import { Icons } from '../../shared/GlobalStyle'
import CustomCalendar from '../../components/customCalendar/CustomCalendar'
import {
  WDLabelHeadingWhite,
  WDLabelHeadingWhiteBold,
  WDLabelPrimary,
} from '../../components/ui/WDLabel'
import {
  WDCard,
  WDCardContentRound,
  WDCardHeader,
} from '../../components/ui/WDCard'
import { WDCalendar, WDSelect, WDTextbox } from '../../components/ui/WDTextbox'
import {
  WDButton,
  WDButtonDisabled,
  WDButtonOutLine,
  WDButtonTransparent,
} from '../../components/ui/WDButton'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'

export const EasyToBorrow = () => {
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
  const [filters, setFilters] = useState<EasyToBorrowRequestModel>({
    fromDate: '',
    toDate: '',
    status: 'All',
    cusipOrSymbol: '',
  })
  const form = useRef<HTMLFormElement>(null)
  const csvLinkRef = useRef<HTMLDivElement>(null)
  const easyToBorrowData = useContext(easyToBorrowContext)
  const [etbRequestData, setEtbRequestData] = useState(
    easyToBorrowData.easyToBorrowRequests
  )
  const [downloadETBData, setDownloadETBData] = useState<BorrowSecurityModel[]>(
    []
  )
  const [modal, setModal] = useState(false)
  const [isChange, setIsChange] = useState(true)
  const [isLoading, setLoading] = useState(true)
  const [isAPILoading, setIsAPILoading] = useState(false)
  const [apiETBStatus, setAPIETBStatus] = useState<{
    status: boolean | null
    text: string
  }>({
    status: null,
    text: '',
  })
  const [tableDataOption, setTableDataOption] = useState<{
    pageIndex: number
    pageSize: number
  }>({
    pageIndex: 1,
    pageSize: 50,
  })
  const statusList = [
    { label: 'Filter by Status', value: 'All' },
    {
      label: 'Easy to Borrow',
      value: 'Easy to Borrow',
    },
    {
      label: 'Locate Required ',
      value: 'Locate Required',
    },
    {
      label: 'Pre-borrow Required',
      value: 'Pre-borrow Required',
    },
  ]
  const total = etbRequestData.totalRecordCount.toLocaleString('en-US')

  const getFromDate = (date: Date) => {
    const updatedValue: EasyToBorrowRequestModel = {
      ...filters,
      fromDate: formatToISODate(date),
    }
    setFilters(updatedValue)
    setIsChange(false)
  }

  const getToDate = (date: Date) => {
    const updatedValue: EasyToBorrowRequestModel = {
      ...filters,
      toDate: formatToISODate(date),
    }
    setFilters(updatedValue)
    setIsChange(false)
  }

  const checkIfFilterChange = (updatedFilter: EasyToBorrowRequestModel) => {
    return filters !== updatedFilter
  }

  const enableStatusFilter = (value: string) => {
    const updatedFilter = {
      ...filters,
      status: value,
    }
    setFilters(updatedFilter)
    checkIfFilterChange(updatedFilter) ? setIsChange(false) : setIsChange(true)
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
    setLoading(true)
    const formElement = form.current?.elements as HTMLFormControlsCollection
    const status = (formElement.namedItem('status') as HTMLInputElement).value
    const cusip = (formElement.namedItem('cusipOrSymbol') as HTMLInputElement)
      .value
    const updatedValue: EasyToBorrowRequestModel = {
      fromDate: filters.fromDate
        ? filters.fromDate
        : formatToISODate(new Date()),
      toDate: filters.toDate ? filters.toDate : formatToISODate(new Date()),
      cusipOrSymbol: cusip,
      status: status === 'All' ? '' : status,
      pageIndex,
      pageSize,
    }
    easyToBorrowData
      .sendEasyToBorrowRequests(updatedValue)
      .then((res) => {
        if (res.data) {
          const responseData = res.data.borrowSecurities.map((data) => {
            return {
              ...data,
              tradeDate: data.tradeDate
                ? formatDate(new Date(data.tradeDate))
                : '',
            }
          })
          setEtbRequestData({ ...res.data, borrowSecurities: responseData })
          setLoading(false)
        }
      })
      .catch((error: AxiosError) => {
        setAPIETBStatus({
          status: false,
          text: error.response ? error.response.statusText : error.message,
        })
        setLoading(false)
      })
  }

  const downloadFile = (event?: BaseSyntheticEvent) => {
    const htmlElement = event?.target as HTMLElement
    if (htmlElement.nodeName === 'BUTTON') {
      setIsAPILoading(true)
      const formElement = form.current?.elements as HTMLFormControlsCollection
      const status = (formElement.namedItem('status') as HTMLInputElement).value
      const cusip = (formElement.namedItem('cusipOrSymbol') as HTMLInputElement)
        .value
      const updatedValue: EasyToBorrowRequestModel = {
        fromDate: filters.fromDate
          ? filters.fromDate
          : formatToISODate(new Date()),
        toDate: filters.toDate ? filters.toDate : formatToISODate(new Date()),
        cusipOrSymbol: cusip,
        status: status === 'All' ? '' : status,
        pageIndex: 1,
        pageSize: etbRequestData.totalRecordCount,
      }
      easyToBorrowData
        .sendEasyToBorrowRequests(updatedValue)
        .then((res) => {
          if (res.data) {
            const responseData = res.data.borrowSecurities.map((data) => {
              return {
                ...data,
                tradeDate: data.tradeDate
                  ? formatDate(new Date(data.tradeDate))
                  : '',
              }
            })
            setDownloadETBData([...responseData])
            setIsAPILoading(false)
          }
        })
        .catch((error: AxiosError) => {
          setAPIETBStatus({
            status: false,
            text: error.response ? error.response.statusText : error.message,
          })
          setIsAPILoading(false)
        })
    }
  }

  const submitForm = (event: SubmitEvent) => {
    event.preventDefault()
    openModal()
  }

  const apiSuccessCallBack = (
    status: boolean,
    error: AxiosError | null | undefined
  ) => {
    if (status) {
      setAPIETBStatus({
        status: true,
        text: `Borrow Status updated successfully`,
      })
      openModal()
    } else {
      setAPIETBStatus({
        status: false,
        text: error ? error?.message : 'Error',
      })
    }
  }

  const resetValues = () => {
    form.current?.reset()
    const updatedValue: EasyToBorrowRequestModel = {
      fromDate: '',
      toDate: '',
      status: 'All',
      cusipOrSymbol: '',
    }
    const formElement = form.current?.elements as HTMLFormControlsCollection
    const statusElement = formElement.namedItem('status') as HTMLInputElement
    statusElement.value = 'All'
    setTableDataOption({
      pageIndex: 1,
      pageSize: 50,
    })
    setFilters(updatedValue)
    setIsChange(true)
  }

  const getCurrentStatus = (): DefaultProps => {
    return statusList.filter((list) => list.value === filters.status)[0]
  }

  useEffect(() => {
    if (downloadETBData.length) {
      const htmlAnchorElement = csvLinkRef.current?.children[0].children[0]
        .children[0] as HTMLAnchorElement
      htmlAnchorElement.click()
    }
  }, [downloadETBData])

  useEffect(() => {
    openModal()
  }, [])

  return (
    <EasyToBorrowContextProvider>
      <MasterWrapper>
        <SubWrapper>
          <ReviewLocate>
            <WDCard>
              <WDCardHeader>
                <WDLabelHeadingWhite>
                  <Label>{'Easy to borrow list'}</Label>
                </WDLabelHeadingWhite>
                <WDLabelHeadingWhiteBold>
                  <Label>{`Total: ${total}`} </Label>
                </WDLabelHeadingWhiteBold>
              </WDCardHeader>{' '}
              <WDCardContentRound>
                <ReviewTopContainer>
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
                            value={getCurrentStatus()}
                            name="status"
                            indicatorSeparator={false}
                            width={'13rem'}
                            height={'2rem'}
                            borderRadius={'0.25rem'}
                            onChange={(value: string) => {
                              value && enableStatusFilter(value)
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
                                type={'button'}
                                onClick={() => openModal(1, 50)}
                              >
                                {Icons.Search && (
                                  <Image
                                    image={Icons.Search}
                                    alt={'Icon'}
                                    width={'19.88px'}
                                    height={'19.95px'}
                                  />
                                )}
                              </Button>
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
                              onClick={() => openModal(1, 50)}
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
                  {etbRequestData.totalRecordCount > 0 && (
                    <DownloadContainer>
                      <DownloadButtonWrapper>
                        <FlexItem>
                          <DownloadWrapper>
                            <ExportCSV
                              csvData={downloadETBData}
                              fileName={
                                'Easy To Borrow Report ' +
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
                </ReviewTopContainer>
                {modal && (
                  <DetailsContainer>
                    <EasyToBorrowTable
                      rowData={etbRequestData.borrowSecurities}
                      isLoading={isLoading}
                      totalRecords={etbRequestData.totalRecordCount}
                      pageIndex={tableDataOption.pageIndex}
                      pageSize={tableDataOption.pageSize}
                      updateTableCallbackFn={openModal}
                      apiSuccessCallBack={apiSuccessCallBack}
                    />
                  </DetailsContainer>
                )}
              </WDCardContentRound>
            </WDCard>
          </ReviewLocate>
        </SubWrapper>
        {apiETBStatus.status !== null && (
          <ToastWrapper>
            <Toast
              text={apiETBStatus.text}
              type={apiETBStatus.status ? 'success' : 'danger'}
              openStatusCallback={(status: boolean) =>
                setAPIETBStatus({
                  status: status ? status : null,
                  text: '',
                })
              }
            />
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
    </EasyToBorrowContextProvider>
  )
}

const Reports = () => {
  const { isLoggedIn } = React.useContext(AuthContext)

  if (isLoggedIn) {
    return <EasyToBorrow />
  } else {
    return (
      <Navigate
        to={{ pathname: '/login' }}
        state={{ redirectUrl: '/reports' }}
      />
    )
  }
}

export default Reports
