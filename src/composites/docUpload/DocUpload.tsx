import {
    BaseSyntheticEvent,
    DragEvent,
    useContext,
    useEffect,
    useRef,
    useState,
  } from 'react'
  import './styles'
  import {
    Wrapper,
    File,
    SampleFile,
    UploadWrapper,
    RowWrapper,
    IconWrapper,
    InlineErrorWrapper,
    DeleteRowWrapper,
    ButtonRowWrapper,
    FileUploadInPut,
  } from './styles'
  import { DocUploadProps } from '../docUpload/iDocUpload'
  import Button from '../../components/button/Button'
  import { AnchorTag } from '../../components/anchorTag/AnchorTag'
  import SubmitLocateContext from '../../store/SubmitLocateContext'
  import Label from '../../components/label/Label'
  import { Icons } from '../../shared/GlobalStyle'
  import { COLORS } from '../../theme/Colors'
  import { WDButton, WDButtonAccent } from '../../components/ui/WDButton'
  import { WDLabel, WDLabelBrandBold } from '../../components/ui/WDLabel'
  import { SubmitLocateValidationPayload } from '../../shared/models/ISubmitLocate'
import { ToastWrapper } from '../submitLocate/styles'
import { Toast } from '../../components/toast/Toast'
  const EXTENSIONS = ['pdf']
  
  export const DocUpload = ({ uploadCallBackFn,returnFileData, uploadSuccess }: DocUploadProps) => {
    const locateRequestData = useContext(SubmitLocateContext)
    const rows: SubmitLocateValidationPayload[] = []
    const [isFileUploaded, setIsFileUploaded] = useState(false)
    const [fileName, setFileName] = useState('')
    const [isPDF,setIsPDF] = useState(true)
    const [error, setError] = useState('')
    const fileUpload = useRef<HTMLInputElement>(null)
  
    const getExtension = (file: File) => {
      const parts = file.name.split('.')
      const extension = parts[parts.length - 1]
      setIsPDF(EXTENSIONS.includes(extension))
      return EXTENSIONS.includes(extension)
    }
  

  
    const handleDrop = (uploadedFile: File) => {
      const currentFile = uploadedFile;
      setFileName(uploadedFile.name)
      if (getExtension(uploadedFile)) {
        setIsFileUploaded(true)
        uploadCallBackFn(true)
        const formCreate = new FormData();
        formCreate.append('FormFiles',currentFile);
        console.log("valuess",formCreate)
        returnFileData(formCreate,currentFile)
        // const reader = new FileReader()
        // reader.onloadend = function(event: ProgressEvent<FileReader>) {
        //   console.log('Encoded Base 64 File String:', reader.result);
        //   if(reader && reader.result){
        //     returnFileData(reader.result,currentFile)
        //   }
        //   let data=event?.target?.result;
        //   if(data){
        //     data = data.toString().split(',')[1];
        //     const binaryBlob = window.atob(data);
        //     console.log('Encoded Binary File String:', binaryBlob);
        //   }
        // }
        // reader.readAsDataURL(uploadedFile);
      } else {
        setIsFileUploaded(false)
        setError('*Only .pdf extension files are allowed')
      }
    }
  
    const preventDefaults = (event: BaseSyntheticEvent) => {
      event.preventDefault()
      event.stopPropagation()
    }
  
    const handleDropFile = (event: DragEvent) => {
      event.preventDefault()
      event.stopPropagation()
      const files = event.dataTransfer.files
      handleDrop(files[0])
    }
  
    const handleFiles = (event: BaseSyntheticEvent) => {
      handleDrop(event.target.files[0])
    }
  
    const browseFile = () => {
      fileUpload.current?.click()
    }
  
    const removeUploadedFile = () => {
      const uploadElement = document.getElementById(
        'fileElement'
      ) as HTMLInputElement
      uploadElement.value = ''
      rows.splice(0, rows.length)
      locateRequestData.setBulkRequest([])
      setIsFileUploaded(false)
      uploadCallBackFn(false)
    }

    useEffect(()=>{
      if(uploadSuccess){
        removeUploadedFile();
      }
    },[uploadSuccess])
  
    return (
      <Wrapper>
        {error && <ToastWrapper>
          <Toast
            text={error}
            type={'danger'}
            openStatusCallback={() => {setError('')}}
          />
        </ToastWrapper>}
        <File>
          <UploadWrapper
            id="drop-area"
            onDragEnter={preventDefaults}
            onDragOver={preventDefaults}
            onDragLeave={preventDefaults}
            onDrop={handleDropFile}
            className={isFileUploaded ? 'file-uploaded' : ''}
          >
            <FileUploadInPut
              type="file"
              id="fileElement"
              ref={fileUpload}
              multiple
              accept=".pdf"
              hidden
              onChange={handleFiles}
            ></FileUploadInPut>
            {isFileUploaded ? (
              <DeleteRowWrapper>
                <WDLabel>
                  <Label>{fileName}</Label>
                </WDLabel>
                <ButtonRowWrapper>
                  <WDButtonAccent>
                    <Button onClick={removeUploadedFile} type={'button'}>
                      {'Delete'}
                    </Button>
                  </WDButtonAccent>
                  <WDButton>
                    <Button onClick={browseFile} type={'button'}>
                      {'Browse files'}
                    </Button>
                  </WDButton>
                </ButtonRowWrapper>
              </DeleteRowWrapper>
            ) : (
              <RowWrapper>
                <WDLabel>
                  <Label>{'Drag your .pdf  here to start uploading or'}</Label>
                </WDLabel>
                <WDButton>
                  <Button onClick={browseFile} type={'button'}>
                    {'Browse files'}
                  </Button>
                </WDButton>
              </RowWrapper>
            )}
          </UploadWrapper>
        </File>
      </Wrapper>
    )
  }
  