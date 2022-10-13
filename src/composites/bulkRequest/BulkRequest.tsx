import {
  BaseSyntheticEvent,
  DragEvent,
  useContext,
  useRef,
  useState,
} from 'react'
import './styles'
import * as XLSX from 'xlsx'
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
import { BulkRequestProps } from '../bulkRequest/IBulkRequest'
import Button from '../../components/button/Button'
import { AnchorTag } from '../../components/anchorTag/AnchorTag'
import SubmitLocateContext from '../../store/SubmitLocateContext'
import Label from '../../components/label/Label'
import { Icons } from '../../shared/GlobalStyle'
import { COLORS } from '../../theme/Colors'
import { WDButton, WDButtonAccent } from '../../components/ui/WDButton'
import { WDLabel, WDLabelBrandBold } from '../../components/ui/WDLabel'
import { SubmitLocateValidationPayload } from '../../shared/models/ISubmitLocate'
const EXTENSIONS = ['csv']

export const BulkRequest = ({ uploadCallBackFn }: BulkRequestProps) => {
  const locateRequestData = useContext(SubmitLocateContext)
  const rows: SubmitLocateValidationPayload[] = []
  const [isFileUploaded, setIsFileUploaded] = useState(false)
  const [fileName, setFileName] = useState('')
  const [isCSV,setIsCSV] = useState(true)
  const [error, setError] = useState('')
  const fileUpload = useRef<HTMLInputElement>(null)

  const getExtension = (file: File) => {
    const parts = file.name.split('.')
    const extension = parts[parts.length - 1]
    setIsCSV(EXTENSIONS.includes(extension))
    return EXTENSIONS.includes(extension)
  }

  const convertToJson = (headers: XLSX.WorkSheet, data: XLSX.WorkSheet[]) => {
    data.forEach((row: XLSX.WorkSheet) => {
      const rowData: SubmitLocateValidationPayload = {
        cusip: '',
        accountNumber: '',
        quantity: null,
        repCode: '',
      }
      row.forEach((element: string, index: number) => {
        switch (headers[index].title) {
          case 'Account Number':
            rowData.accountNumber = element.toString()
            break
          case 'CUSIP/Symbol':
            rowData.cusip = element.toString()
            break
          case 'Quantity':
            rowData.quantity = isNaN(parseInt(element))
              ? null
              : parseInt(element)
            break
          case 'RepCode':
            rowData.repCode = element.toString()
            break
        }
      })
      rows.push(rowData)
    })
    locateRequestData.setBulkRequest(rows)
  }

  const handleDrop = (uploadedFile: File) => {
    setFileName(uploadedFile.name)
    if (getExtension(uploadedFile)) {
      setIsFileUploaded(true)
      uploadCallBackFn(true)
      const reader = new FileReader()
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event?.target?.result
        const workBook = XLSX.read(result, { type: 'binary' })
        const workSheetName = workBook.SheetNames[0]
        const workSheet = workBook.Sheets[workSheetName]
        const fileData = XLSX.utils.sheet_to_json<XLSX.WorkSheet>(workSheet, {
          header: 1,
        })
        let headers: XLSX.WorkSheet = fileData[0]
        headers = headers.map((header: XLSX.WorkSheet) => ({
          title: header,
          field: header,
        }))
        fileData.splice(0, 1)
        convertToJson(headers, fileData)
      }
      reader.readAsBinaryString(uploadedFile)
    } else {
      setIsFileUploaded(false)
      setError('*Only .csv extension files are allowed')
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

  return (
    <Wrapper>
      <File>
        <WDLabelBrandBold>
          <Label>{'File upload'}</Label>
        </WDLabelBrandBold>
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
            accept="text/csv"
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
                <Label>{'Drag your .csv  here to start uploading or'}</Label>
              </WDLabel>
              <WDButton>
                <Button onClick={browseFile} type={'button'}>
                  {'Browse files'}
                </Button>
              </WDButton>
            </RowWrapper>
          )}
        </UploadWrapper>
        <SampleFile>
          <InlineErrorWrapper>
            {isCSV ? null : error}
          </InlineErrorWrapper>
          <IconWrapper>
            <AnchorTag
              icon={Icons.Document}
              title={'Download a CSV example'}
              href={'./Sample.csv'}
              color={COLORS.Border.Primary60}
              disabled={true}
              fontSize={'14px'}
              fontWeight={600}
              textDecoration={'none'}
            />
          </IconWrapper>
        </SampleFile>
      </File>
    </Wrapper>
  )
}
