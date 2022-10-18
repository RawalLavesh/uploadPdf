import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  MasterWrapper,
  MainWrapper,
  Wrapper2,
  Wrapper3,
  WDCard,
  WDCardContent,
  ButtonWrapper,
  HeaderWrapper,
} from './styles'
import Label from '../../components/label/Label'
import Button from '../../components/button/Button'
import { DocUpload } from '../docUpload/DocUpload'
import UploadDocStore, {
  UploadDocStoreProvider,
} from '../../store/UploadDocContext'
import {
  SubmitLocateValidationResponse,
  StockLocateResponse,
  SubmitLocateValidationPayload,
} from '../../shared/models/ISubmitLocate'
import {
  UploadedFileValidationResponse,
  UploadedFileResponse,
  UploadFileValidationPayload,
} from '../../shared/models/IUploadDoc'
import { Toast } from '../../components/toast/Toast'
import { AxiosError } from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/LoginAuthContext'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'

import LatestUpload from '../latestUpload/LatestUpload'
import DocNavigation from '../docNavigation/DocNavigation'
import { getDocListRequest } from '../../apiConfig/uploadDocConfig'

export const UploadDoc = () => {
  const documentTypes = [
    {
      id: 1,
      documentType: 'CoverageList',
    },
    {
      id: 2,
      documentType: 'ValTable',
    },
    {
      id: 3,
      documentType: 'EquityResearchDirectory',
    },
    {
      id: 4,
      documentType: 'MarketMakerList',
    },
    {
      id: 5,
      documentType: 'UpcomingEvents',
    },
  ]
  const disabledButton = true
  const uploadDocRequestData = useContext(UploadDocStore)
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
  const [isDocUploadUploaded, setIsDocUploadUploaded] = useState(false)
  const [docType, setDocType] = useState(1)
  const [locateRequestData, setData] = useState<SubmitLocateValidationResponse>(
    uploadDocRequestData.submitLocateRequest.submitRequestResponse
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

  const handleDocTypeChange = (docType: number) => {
    setDocType(docType)
    getDocListRequest(docType).then((res) => {
      console.log('what is the data coming back from the api', res)
    })
  }

  const setDocUploadUpload = (status: boolean) => {
    setIsDocUploadUploaded(status)
  }

  const setDocumentType = (docType: number) => {
    handleDocTypeChange(docType)
  }

  return (
    <UploadDocStoreProvider>
      <MasterWrapper>
        <HeaderWrapper>
          <Label fontSize="42px" fontWeight={700} color="#1E3A8A">
            Equity Research File Library
          </Label>
        </HeaderWrapper>
        <DocNavigation uploadCallBackFn={setDocumentType} />
        <MainWrapper>
          <WDCard>
            <WDCardContent>
              <Wrapper2>
                <DocUpload uploadCallBackFn={setDocUploadUpload} />
              </Wrapper2>
              <Wrapper3>
                <LatestUpload
                  fileName="test"
                  uploadedDate="10/14/2022"
                  uploadedBy="test"
                />
              </Wrapper3>
            </WDCardContent>
            <ButtonWrapper>
              <Button
                type={'button'}
                padding="10px 40px"
                bgColor={disabledButton ? '#E2E8F0' : '#2563EB'}
                borderRadius="4px"
                color={disabledButton ? '#A7AFBC' : '#ffffff'}
                borderColor="transparent"
                disabled={disabledButton}
              >
                Upload
              </Button>
            </ButtonWrapper>
          </WDCard>
        </MainWrapper>
      </MasterWrapper>
    </UploadDocStoreProvider>
  )
}

const UploadPage = () => {
  const { isLoggedIn } = React.useContext(AuthContext)

  if (isLoggedIn) {
    return <UploadDoc />
  } else {
    return <Navigate to={{ pathname: '/login' }} />
  }
}

export default UploadPage
