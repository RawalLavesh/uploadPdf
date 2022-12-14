import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  MasterWrapper,
  MainWrapper,
  Wrapper2,
  SubWrapper,
  PreviewLocate,
  PButton,
  ButtonWrapper,
  LabelS,
  DividerWrapper,
  NoteWrapper,
  PreviewLocatesWrapper,
  ToastWrapper,
  SpinnerWrapper,
  LottieWrapper,
} from './styles'
import Label from '../../components/label/Label'
import Button from '../../components/button/Button'
import { IndividualRequest } from '../individualRequest/IndividualRequest'
import { BulkRequest } from '../bulkRequest/BulkRequest'
import PreviewLocates from '../previewLocateRequest/PreviewLocateRequest'
import SubmitLocateContext, {
  SubmitLocateContextProvider,
} from '../../store/SubmitLocateContext'
import { SubmitLocateValidationResponse,StockLocateResponse,SubmitLocateValidationPayload  } from '../../shared/models/ISubmitLocate'
import { Toast } from '../../components/toast/Toast'
import { AxiosError } from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/LoginAuthContext'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'
import {
  WDHorizontalDivider,
  WDLabelGray,
  WDLabelGrayBold,
  WDLabelHeadingWhite,
  WDLabelHeadingWhiteBold,
} from '../../components/ui/WDLabel'
import {
  WDCard,
  WDCardContent,
  WDCardFooter,
  WDCardHeader,
} from '../../components/ui/WDCard'
import {
  WDButtonAccentLarge,
  WDButtonLarge,
} from '../../components/ui/WDButton'

export const Submit = () => {
  const submitLocateRequestData = useContext(SubmitLocateContext)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [previewButtonClicked, setPreviewButtonClicked] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isStockLocateDataSubmitted, setIsStockLocateDataSubmitted] =
    useState(false)
  const [apiPreviewStatus, setAPIPreviewStatus] = useState<{
    status: boolean | null
    text: string
  }>({
    status: null,
    text: '',
  })
  const [apiSubmitStatus, setAPISubmitStatus] = useState<{
    status: boolean | null
    text: string
  }>({
    status: null,
    text: '',
  })
  const [isBulkRequestUploaded, setIsBulkRequestUploaded] = useState(false)
  const [locateRequestData, setData] = useState<SubmitLocateValidationResponse>(
    submitLocateRequestData.submitLocateRequest.submitRequestResponse
  )
  const [filteredData, setFilteredData] = useState<StockLocateResponse[]>([])
  const previewLocateRef = useRef<HTMLDivElement>(null)

  const scrollToPreviewSection = () => {
    previewLocateRef.current &&
      previewLocateRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
  }

  useEffect(() => {
    if (locateRequestData.stockLocates.length) {
      setIsLoading(false)
      setFilteredData([...locateRequestData.stockLocates])
      filteredData.length && scrollToPreviewSection()
    }
    if (isStockLocateDataSubmitted) {
      navigate(`/reviewlocate`, {
        state: {
          status: true,
          text: 'Your valid locates have been added to the Review your requests section.',
          fromSubmit: true,
        },
      })
    }
  }, [locateRequestData])

  useEffect(() => {
    filteredData.length && scrollToPreviewSection()
  }, [filteredData])

  const handleFormValues = (
    stockLocateData: SubmitLocateValidationPayload[]
  ) => {
    submitLocateRequestData.setBulkRequest(stockLocateData)
    setIsLoading(true)
    submitLocateRequestData
      .sendSubmitLocateValidateRequest(stockLocateData)
      .then((res) => {
        if (res.data) {
          submitLocateRequestData.submitLocateRequest.submitRequestResponse =
            res.data
          setAPIPreviewStatus({
            status: true,
            text: 'Your requests have been added to the Preview Locates section.',
          })
          setIsLoading(false)
          setData({
            ...submitLocateRequestData.submitLocateRequest
              .submitRequestResponse,
          })
        }
      })
      .catch((error: AxiosError) => {
        setAPIPreviewStatus({
          status: false,
          text: error.response ? error.response.statusText : error.message,
        })
        setIsLoading(false)
      })
  }

  const validateData = (dataSet: SubmitLocateValidationPayload[]) => {
    if (dataSet.length > 0) {
      const invalidDataSet = dataSet
        .map((data: SubmitLocateValidationPayload, index: number) => {
          if (!data.accountNumber || !data.cusip || !data.quantity) {
            return index + 1
          }
        })
        .filter((data) => data)
        .map((data) => data && data + 1)
      if (invalidDataSet.length > 0) {
        setAPIPreviewStatus({
          status: false,
          text:
            'The csv file is missing some fields at line no(s) ' +
            invalidDataSet.join(','),
        })
        return false
      } else {
        return true
      }
    } else {
      setAPIPreviewStatus({
        status: false,
        text: 'The csv file is empty.',
      })
      return false
    }
  }

  const handlePreview = () => {
    if (isBulkRequestUploaded) {
      const isValidData = validateData(
        submitLocateRequestData.submitLocateRequest.bulkRequest
      )
      if (isValidData) {
        handleFormValues(
          submitLocateRequestData.submitLocateRequest.bulkRequest
        )
      }
    } else {
      previewButtonClicked.push(previewButtonClicked.length + 1)
      setPreviewButtonClicked([...previewButtonClicked])
    }
  }

  const deleteAllTableData = () => {
    submitLocateRequestData.deleteAllRequest()
    setData({
      ...submitLocateRequestData.submitLocateRequest.submitRequestResponse,
    })
    setFilteredData([
      ...submitLocateRequestData.submitLocateRequest.submitRequestResponse
        .stockLocates,
    ])
  }

  const deleteRequest = (indexes: number[]) => {
    const locateIndexes: number[] = []
    const deletedRows = filteredData.filter((value, index) => {
      if (indexes.includes(index)) {
        return value
      }
    })
    locateRequestData.stockLocates.forEach((value, index) => {
      if (deletedRows.includes(value)) {
        if (!locateIndexes.includes(index)) {
          locateIndexes.push(index)
          deletedRows.splice(deletedRows.indexOf(value), 1)
        }
      }
    })
    submitLocateRequestData.deleteRequest(locateIndexes)
    setData({
      ...submitLocateRequestData.submitLocateRequest.submitRequestResponse,
    })
    setFilteredData([
      ...submitLocateRequestData.submitLocateRequest.submitRequestResponse
        .stockLocates,
    ])
  }

  const handleFilter = (filterStatus: string) => {
    let filterData: StockLocateResponse[] = []
    if (locateRequestData) {
      if (filterStatus === 'All') {
        filterData = locateRequestData.stockLocates
      } else if (filterStatus === 'Valid') {
        filterData = locateRequestData.stockLocates.filter(
          (response) => response.isLocateValid === true
        )
      } else if (filterStatus === 'Invalid') {
        filterData = locateRequestData.stockLocates.filter(
          (response) => response.isLocateValid === false
        )
      } else {
        setFilteredData([])
      }
      setFilteredData([...filterData])
    } else {
      setFilteredData([])
    }
  }

  const handleSubmit = () => {
    if (locateRequestData.validLocates > 0) {
      setIsLoading(true)
      submitLocateRequestData
        .sendSubmitLocateRequest(user.userName)
        .then((res) => {
          if (res.data) {
            setIsLoading(false)
            setAPISubmitStatus({
              status: true,
              text: 'Your valid locates have been added to the Review your requests section.',
            })
            setIsStockLocateDataSubmitted(true)
            deleteAllTableData()
          }
        })
        .catch((error: AxiosError) => {
          setIsLoading(false)
          setAPISubmitStatus({
            status: false,
            text: error.response ? error.response.statusText : error.message,
          })
        })
    } else {
      setAPISubmitStatus({
        status: false,
        text: 'There are no valid items available to Submit',
      })
    }
  }

  const setBulkRequestUpload = (status: boolean) => {
    setIsBulkRequestUploaded(status)
  }

  useEffect(() => {
    deleteAllTableData()
  }, [])

  return (
    <SubmitLocateContextProvider>
      <MasterWrapper>
        <MainWrapper>
          <WDCard>
            <WDCardHeader>
              <WDLabelHeadingWhite>
                <Label>{'Locate Request'}</Label>
              </WDLabelHeadingWhite>
            </WDCardHeader>
            <WDCardContent>
              <Wrapper2>
                <BulkRequest uploadCallBackFn={setBulkRequestUpload} />
                <IndividualRequest
                  disabled={isBulkRequestUploaded}
                  previewClicked={previewButtonClicked.length}
                  formCallBackFn={handleFormValues}
                />
              </Wrapper2>
            </WDCardContent>
            <WDHorizontalDivider />
            <WDCardFooter>
              <WDButtonLarge>
                <Button onClick={handlePreview} type={'button'}>
                  {'Preview'}
                </Button>
              </WDButtonLarge>
            </WDCardFooter>
          </WDCard>
        </MainWrapper>
        {locateRequestData.totalLocates > 0 && (
          <SubWrapper ref={previewLocateRef}>
            <PreviewLocate>
              <LabelS>
                <WDLabelHeadingWhite>
                  <Label>{'Preview Locates'}</Label>
                </WDLabelHeadingWhite>
                <WDLabelHeadingWhiteBold>
                  <Label>{`Total: ${locateRequestData.totalLocates.toLocaleString(
                    'en-US'
                  )}`}</Label>
                </WDLabelHeadingWhiteBold>
              </LabelS>
              <PreviewLocatesWrapper>
                <PreviewLocates
                  rowData={filteredData}
                  totalLength={locateRequestData.totalLocates}
                  validLength={locateRequestData.validLocates}
                  invalidLength={locateRequestData.invalidLocates}
                  deleteCallbackFn={deleteRequest}
                  filterCallbackFn={handleFilter}
                />
              </PreviewLocatesWrapper>
              <DividerWrapper>
                <WDHorizontalDivider />
              </DividerWrapper>
              <PButton>
                <NoteWrapper>
                  <WDLabelGray>
                    <Label>{`Note: Only`}</Label>
                  </WDLabelGray>
                  &nbsp;
                  <WDLabelGrayBold>
                    <Label>{`valid`}</Label>
                  </WDLabelGrayBold>
                  &nbsp;
                  <WDLabelGray>
                    <Label>{`items will be submitted`}</Label>
                  </WDLabelGray>
                </NoteWrapper>
                <ButtonWrapper>
                  <WDButtonAccentLarge>
                    <Button onClick={deleteAllTableData} type={'button'}>
                      {'Clear'}
                    </Button>
                  </WDButtonAccentLarge>
                  <WDButtonLarge>
                    <Button onClick={handleSubmit} type={'button'}>
                      {'Submit'}
                    </Button>
                  </WDButtonLarge>
                </ButtonWrapper>
              </PButton>
            </PreviewLocate>
          </SubWrapper>
        )}
        {isLoading && (
          <SpinnerWrapper>
            <LottieWrapper>
              <Lottie animationData={Loader} loop={true} />
            </LottieWrapper>
          </SpinnerWrapper>
        )}
        {apiPreviewStatus.status !== null && (
          <ToastWrapper>
            <Toast
              text={apiPreviewStatus.text}
              type={apiPreviewStatus.status ? 'success' : 'danger'}
              openStatusCallback={(status: boolean) =>
                setAPIPreviewStatus({
                  status: status ? status : null,
                  text: '',
                })
              }
            />
          </ToastWrapper>
        )}
        {apiSubmitStatus.status !== null && (
          <ToastWrapper>
            <Toast
              text={apiSubmitStatus.text}
              type={apiSubmitStatus.status ? 'success' : 'danger'}
              openStatusCallback={(status: boolean) =>
                setAPISubmitStatus({
                  status: status ? status : null,
                  text: '',
                })
              }
            />
          </ToastWrapper>
        )}
      </MasterWrapper>
    </SubmitLocateContextProvider>
  )
}

const PageContent = () => {
  const { isLoggedIn } = React.useContext(AuthContext)

  if (isLoggedIn) {
    return <Submit />
  } else {
    return <Navigate to={{ pathname: '/login' }} />
  }
}

export default PageContent
