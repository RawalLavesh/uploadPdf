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
  ToastWrapper,
} from './styles'
import Label from '../../components/label/Label'
import Button from '../../components/button/Button'
import { DocUpload } from '../docUpload/DocUpload'
import UploadDocStore, {
  UploadDocStoreProvider,
} from '../../store/UploadDocContext'

import { UploadedFileValidationResponse, UploadedFileResponse, UploadFileValidationPayload, UploadedFile  } from '../../shared/models/IUploadDoc'
import { Toast } from '../../components/toast/Toast'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/LoginAuthContext'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'

import LatestUpload from '../latestUpload/LatestUpload'
import DocNavigation from '../docNavigation/DocNavigation'
import { getDocListRequest, uploadDocRequest } from '../../apiConfig/uploadDocConfig';



export const UploadDoc = (props:any) => {
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
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const [isDocUploadUploaded, setIsDocUploadUploaded] = useState(false)
  const [docType, setDocType] = useState(1)
  const [binaryData,setBinaryData] = useState<any>("")
  const [formDetails,setFormDetails] = useState<any>("")
  const [uploadStatus,setUploadStatus] = useState<boolean>(false)

  const today = new Date()
  const nullDoc: UploadedFile = {
    documentId: 0,
    documentName: '',
    uploadedBy: '',
    uploadedDate: today.toString()
  }
  const [latestDocFile, setLastDocFile] = useState(nullDoc)

  useEffect(() => {
    getDocListRequest(docType)
    .then((res) => {
      if (res.data.length > 0) {
        setLastDocFile(res.data[0])
      } else {
        setLastDocFile(nullDoc)
      }
    })
  }, [])

  const handleDocTypeChange = (docType: number) => {
    setDocType(docType)
    getDocListRequest(docType)
    .then((res) => {
      if (res.data.length > 0) {
        setLastDocFile(res.data[0])
      } else {
        setLastDocFile(nullDoc)
      }
    })
  }

  const setDocUploadUpload = (status: boolean) => {
    setIsDocUploadUploaded(status)
  }

  const setDocumentType = (docType: number) => {
    handleDocTypeChange(docType)
    props.getSelectedIndex(docType)
  }

  const setDataToPost = async()=>{
    try {
      const uploadFile: UploadFileValidationPayload = {
        uploadedBy: formDetails?.name,
        uploadedDate: new Date(),
        documentType:docType,
        formFiles: binaryData
      }
      const { data, status } = await uploadDocRequest(uploadFile);
      if (status === 200) {
        console.log(data)
        setIsDocUploadUploaded(false)
        setUploadStatus(true)
        props.getSelectedIndex(docType)
      }
    } catch (e) {
      setUploadStatus(false)
      console.log("error",e)
    }
  }

  const callBackUploadFile = (binaryFile:any,fileName:any)=>{
    setBinaryData(binaryFile?.get("FormFiles"));
    setFormDetails(fileName)
  }

  return (
    <UploadDocStoreProvider>
      <MasterWrapper>
      <HeaderWrapper>
        <Label fontSize='42px' fontWeight={700} color='#1E3A8A'>Equity Research File Library</Label>
      </HeaderWrapper>
      <DocNavigation uploadCallBackFn={setDocumentType} />
        <MainWrapper>
          <WDCard>
            <WDCardContent>
              <Wrapper2>
                <DocUpload uploadSuccess={uploadStatus} returnFileData={callBackUploadFile} uploadCallBackFn={setDocUploadUpload} />
              </Wrapper2>
              <Wrapper3>
                <LatestUpload latestFile={latestDocFile} />
              </Wrapper3>
            </WDCardContent>
            <ButtonWrapper>
              <Button
                type={'button'}
                padding="10px 40px"
                bgColor={!isDocUploadUploaded ? '#E2E8F0' : '#2563EB'}
                borderRadius="4px"
                color={!isDocUploadUploaded ? '#A7AFBC' : '#ffffff'}
                borderColor="transparent"
                disabled={(isDocUploadUploaded)?false:true}
                onClick={()=>{setDataToPost()}}
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
