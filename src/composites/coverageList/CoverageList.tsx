import React, { BaseSyntheticEvent, useEffect, useRef, useState } from 'react'
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
import { Navigate } from 'react-router-dom'
import {
  CoverageListRequestModel,
  ReviewTable,
} from '../../shared/models/ICoverageList'
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
import moment from 'moment'
import { Toast } from '../../components/toast/Toast'

export const CoverageList = () => {
  const [staticData, setStaticData] = useState([
    {
      documentId: '1',
      uploadedBy: 'john',
      uploadedDate: '01/10/2022',
      documentName: 'coverage_list.pdf',
      documentType: 0,
    },
    {
      documentId: '2',
      uploadedBy: 'messi',
      uploadedDate: '02/10/2022',
      documentName: 'coverage_list.pdf',
      documentType: 0,
    },
    {
      documentId: '3',
      uploadedBy: 'aryan',
      uploadedDate: '07/10/2022',
      documentName: 'coverage_list.pdf',
      documentType: 0,
    },
    {
      documentId: '4',
      uploadedBy: 'john',
      uploadedDate: '05/10/2022',
      documentName: 'coverage_list.pdf',
      documentType: 0,
    },
    {
      documentId: '5',
      uploadedBy: 'ruby',
      uploadedDate: '03/10/2022',
      documentName: 'coverage_list.pdf',
      documentType: 0,
    },
    {
      documentId: '6',
      uploadedBy: 'morgan',
      uploadedDate: '09/10/2022',
      documentName: 'coverage_list.pdf',
      documentType: 0,
    },
    {
      documentId: '7',
      uploadedBy: 'ruby',
      uploadedDate: '03/10/2022',
      documentName: 'coverage_list.pdf',
      documentType: 0,
    },
    {
      documentId: '8',
      uploadedBy: 'morgan',
      uploadedDate: '09/10/2022',
      documentName: 'coverage_list.pdf',
      documentType: 0,
    },
  ])
  const formatDate = (date: any) => {
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

  const [downloadReviewData, setDownloadReviewData] = useState<ReviewTable[]>(
    []
  )

  useEffect(() => {
    if (downloadReviewData.length) {
      const htmlAnchorElement = csvLinkRef.current?.children[0].children[0]
        .children[0] as HTMLAnchorElement
      htmlAnchorElement.click()
    }
  }, [downloadReviewData])

  const [tmpStaticData, setTmpStaticData] = useState(staticData)

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [isAPILoading, setIsAPILoading] = useState(false)
  const [isChange, setIsChange] = useState(true)

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
    setIsLoading(true)
    const unixStartDate = moment(filters.fromDate).unix() * 1000
    const unixEndDate = moment(filters.toDate).unix() * 1000
    const filterArr: {
      documentId: string
      uploadedBy: string
      uploadedDate: string
      documentName: string
      documentType: number
    }[] = []
    staticData.map((item) => {
      const formateDate = moment(item.uploadedDate.toString()).format(
        'YYYY-DD-MM'
      )
      const iDate = moment(formateDate).unix() * 1000
      if (iDate >= unixStartDate && iDate <= unixEndDate) {
        filterArr.push(item)
      }
    })
    setStaticData(filterArr)
  }

  const submitForm = (event: SubmitEvent) => {
    event.preventDefault()
    openModal()
  }

  const exportFileHistory = (event?: BaseSyntheticEvent) => {
    const htmlElement = event?.target as HTMLElement
    if (htmlElement.nodeName === 'BUTTON') {
      setDownloadReviewData([...staticData])
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
    setStaticData(tmpStaticData)
    setErrorMessage(false)
  }
  const downloadFile = (val: number) => {
    console.log('downloadFile=>', val)
  }
  return (
    <MasterWrapper>
      <SubWrapper>
        <ReviewLocate>
          <WDCard>
            <WDCardHeader>
              <WDLabelHeadingWhite>
                <Label>{'Coverage List File History'}</Label>
              </WDLabelHeadingWhite>
              <WDLabelHeadingWhiteBold>
                <Label>{`Total: ${staticData.length}`}</Label>
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
                      <DateWrapper onClick={() => setErrorMessage(true)}>
                        <WDCalendar>
                          <CustomCalendar
                            disable={!filters.fromDate ? true : false}
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
                        {filters.fromDate && filters.toDate && !isChange ? (
                          <WDButton>
                            <Button
                              type={'button'}
                              disabled={false}
                              onClick={() => openModal(1, 50)}
                            >
                              {'Apply'}
                            </Button>
                          </WDButton>
                        ) : (
                          <WDButtonDisabled>
                            <Button type={'button'} disabled={true}>
                              {'Apply'}
                            </Button>
                          </WDButtonDisabled>
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
                  {staticData.length > 0 && (
                    <DownloadContainer>
                      <DownloadButtonWrapper>
                        <FlexItem>
                          <DownloadWrapper>
                            <ExportCSV
                              csvData={staticData}
                              fileName={
                                'UploadFileHistory_' +
                                formatDate(new Date()) +
                                '.csv'
                              }
                              onClickCallBackFn={exportFileHistory}
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
                  )}
                </WDCardBlueTop>
              </WDCardBlue>
              <DetailsContainer>
                <CoverageListTable
                  rowData={staticData}
                  downloadFile={downloadFile}
                  isLoading={false}
                  pageIndex={1}
                  pageSize={50}
                />
              </DetailsContainer>
            </WDCardContentRound>
          </WDCard>
        </ReviewLocate>
      </SubWrapper>
      {isAPILoading && (
        <SpinnerWrapper>
          <LottieWrapper>
            <Lottie animationData={Loader} loop={true} />
          </LottieWrapper>
        </SpinnerWrapper>
      )}
      {!filters.fromDate && errorMessage && (
        <ToastWrapper>
          <Toast
            text={'Invalid Date! End Date should not prior to Start date'}
            type={'danger'}
            openStatusCallback={(status: boolean) => setErrorMessage(status)}
          />
        </ToastWrapper>
      )}
    </MasterWrapper>
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
