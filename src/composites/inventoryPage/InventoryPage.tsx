import {
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
  DownloadContainer,
  FlexItem,
  DownloadWrapper,
  ButtonContainer,
} from './styles'
import Label from '../../components/label/Label'
import Button from '../../components/button/Button'
import DownloadIcon from '../../assets/icons/size16/DownloadIcon.svg'
import { Textbox } from '../../components/textbox/Textbox'
import {
  DateWrapper,
  DownloadButtonWrapper,
  FormContainer,
  ReviewLocate,
  ReviewTopContainer,
  SearchButtonWrapper,
  SearchTerm,
} from '../reviewLocate/styles'
import { InventoryRequestModel, InventoryResponseModel } from '../../shared/models/IInventoryPage'
import { Icon } from '../../components/icon/Icon'
import ExportCSV from '../../utils/ExportCSV'
import { AddInventory } from '../addInventory/addInventory'
import { InventoryTable } from './InventoryPageTable'
import inventoryContext from '../../store/InventoryContext'
import { AxiosError } from 'axios'
import { AuthContext } from '../../store/LoginAuthContext'
import { Navigate } from 'react-router-dom'
import {
  LottieWrapper,
  SpinnerWrapper,
  ToastWrapper,
} from '../submitLocate/styles'
import { Toast } from '../../components/toast/Toast'
import CustomCalendar from '../../components/customCalendar/CustomCalendar'
import { Icons } from '../../shared/GlobalStyle'
import Image from '../../components/image/Image'
import { WDCalendar, WDTextbox } from '../../components/ui/WDTextbox'
import {
  WDLabelHeadingWhite,
  WDLabelHeadingWhiteBold,
  WDLabelPrimary,
} from '../../components/ui/WDLabel'
import {
  WDButton,
  WDButtonDisabled,
  WDButtonLarge,
  WDButtonOutLine,
  WDButtonTransparent,
} from '../../components/ui/WDButton'
import {
  WDCard,
  WDCardContentRound,
  WDCardHeader,
} from '../../components/ui/WDCard'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'

export const Inventory = () => {
  const [filters, setFilters] = useState<InventoryRequestModel>({
    fromDate: '',
    toDate: '',
    cusip: '',
    startIndex: 1,
    maximumRows: 50,
  })
  const inventory = useContext(inventoryContext)
  const csvLinkRef = useRef<HTMLDivElement>(null)
  const [inventoryData, setInventoryData] = useState(
    inventory.inventoryRequests
  )
  const [downloadInventoryData, setDownloadInventoryData] = useState<
    InventoryResponseModel[]
  >([])
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [isAPILoading, setIsAPILoading] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const [isChange, setIsChange] = useState(true)
  const form = useRef<HTMLFormElement>(null)

  const formatToISODate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return year.concat('-').concat(month).concat('-').concat(day)
  }

  const getFromDate = (date: Date) => {
    const updatedValue: InventoryRequestModel = {
      ...filters,
      fromDate: formatToISODate(date),
    }
    setFilters(updatedValue)
    setIsChange(false)
  }

  const [updateApiStatus, setUpdateApiStatus] = useState<{
    status: boolean | null
    text: string
  }>({
    status: null,
    text: '',
  })
  const initialState = {
    pageSize: filters.maximumRows,
    pageIndex: filters.startIndex,
  }
  const total =
    inventoryData.length > 0
      ? inventoryData[0].totalNoOfRows.toLocaleString('en-US')
      : 0
  const totalRecords =
    inventoryData.length > 0 ? inventoryData[0].totalNoOfRows : 0
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return month.concat('-').concat(day).concat('-').concat(year)
  }

  const openModal = (
    pageIndex = filters.startIndex,
    pageSize = filters.maximumRows
  ) => {
    setModal(true)
    setLoading(true)
    const formElement = form.current?.elements as HTMLFormControlsCollection
    const cusip = (formElement.namedItem('cusipOrSymbol') as HTMLInputElement)
      .value
    const updatedValue: InventoryRequestModel = {
      fromDate: filters.fromDate
        ? filters.fromDate
        : formatToISODate(new Date()),
      toDate: filters.toDate ? filters.toDate : formatToISODate(new Date()),
      cusip: cusip,
      startIndex: pageIndex,
      maximumRows: pageSize,
    }
    setFilters(updatedValue)
    inventory
      .sendInventoryRequests(updatedValue)
      .then((res) => {
        if (res.data) {
          const responseData = res.data.map((data) => {
            return {
              ...data,
              inventoryDate: formatDate(new Date(data.inventoryDate)),
            }
          })
          inventory.setInventoryRequest(responseData)
          setInventoryData([...inventory.inventoryRequests])
          setLoading(false)
        }
      })
      .catch((error: AxiosError) => {
        setLoading(false)
        setUpdateApiStatus({
          status: false,
          text: error.message,
        })
      })
  }

  const downloadFile = (event?: BaseSyntheticEvent) => {
    const htmlElement = event?.target as HTMLElement
    if (htmlElement.nodeName === 'BUTTON') {
      setIsAPILoading(true)
      const formElement = form.current?.elements as HTMLFormControlsCollection
      const cusip = (formElement.namedItem('cusipOrSymbol') as HTMLInputElement)
        .value
      const updatedValue: InventoryRequestModel = {
        fromDate: filters.fromDate
          ? filters.fromDate
          : formatToISODate(new Date()),
        toDate: filters.toDate ? filters.toDate : formatToISODate(new Date()),
        cusip: cusip,
        startIndex: 1,
        maximumRows: inventoryData.length ? inventoryData[0].totalNoOfRows : 0,
      }
      setFilters(updatedValue)
      inventory
        .sendInventoryRequests(updatedValue)
        .then((res) => {
          if (res.data) {
            const responseData = res.data.map((data) => {
              return {
                ...data,
                inventoryDate: formatDate(new Date(data.inventoryDate)),
              }
            })
            inventory.setInventoryRequest(responseData)
            setDownloadInventoryData([...responseData])
            setIsAPILoading(false)
          }
        })
        .catch((error: AxiosError) => {
          setIsAPILoading(false)
          setUpdateApiStatus({
            status: false,
            text: error.message,
          })
        })
    }
  }

  const submitForm = (event: SubmitEvent) => {
    event.preventDefault()
    openModal()
  }

  const apiCallBack = (
    status: boolean,
    batchID: number | null | undefined,
    error: AxiosError | null | undefined
  ) => {
    if (status) {
      setUpdateApiStatus({
        status: true,
        text: `Successfully added the inventory. BatchID is ${batchID}`,
      })
      openModal()
    } else {
      setUpdateApiStatus({
        status: false,
        text: error ? error?.message : 'Error',
      })
    }
  }

  const togglePopUp = () => {
    setShowPopUp(true)
  }

  const checkIfFilterChange = (updatedFilter: InventoryRequestModel) => {
    return filters !== updatedFilter
  }

  const resetValues = () => {
    form.current?.reset()
    const updatedValue: InventoryRequestModel = {
      fromDate: '',
      toDate: '',
      cusip: '',
      startIndex: 1,
      maximumRows: 50,
    }
    setFilters(updatedValue)
    setIsChange(true)
  }

  useEffect(() => {
    openModal()
  }, [])

  useEffect(() => {
    if (downloadInventoryData.length) {
      const htmlAnchorElement = csvLinkRef.current?.children[0].children[0]
        .children[0] as HTMLAnchorElement
      htmlAnchorElement.click()
    }
  }, [downloadInventoryData])

  useEffect(() => {
    setInventoryData([...inventory.inventoryRequests])
  }, [inventory.inventoryRequests])

  return (
    <MasterWrapper>
      <SubWrapper>
        <ReviewLocate>
          <WDCard>
            <WDCardHeader>
              <WDLabelHeadingWhite>
                <Label>{'Inventory'}</Label>
              </WDLabelHeadingWhite>
              <WDLabelHeadingWhiteBold>
                <Label>{`Total: ${total}`} </Label>
              </WDLabelHeadingWhiteBold>
            </WDCardHeader>
            <WDCardContentRound>
              <ReviewTopContainer>
                <FormContainer ref={form} onSubmit={submitForm}>
                  <FilterContainer>
                    <DateWrapper>
                      <WDCalendar>
                        <CustomCalendar
                          name="fromDate"
                          placeholder="Date"
                          onChange={getFromDate}
                          resetValue={filters.fromDate}
                          maxDate={new Date()}
                        />
                      </WDCalendar>
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
                                cusip: value,
                              })
                                ? setIsChange(false)
                                : setIsChange(true)
                            }
                          />
                        </WDTextbox>
                        <SearchButtonWrapper>
                          <WDButtonTransparent>
                            <Button type={'submit'}>
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
                {inventoryData.length > 0 && (
                  <DownloadContainer>
                    <DownloadButtonWrapper>
                      <FlexItem>
                        <DownloadWrapper>
                          <ExportCSV
                            csvData={downloadInventoryData}
                            fileName={
                              'Inventory List ' +
                              formatDate(new Date()) +
                              '.csv'
                            }
                            onClickCallBackFn={downloadFile}
                            reference={csvLinkRef}
                          >
                            {' '}
                            <Icon icon={DownloadIcon} />
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
                  <InventoryTable
                    rowData={inventoryData}
                    totalRecord={totalRecords}
                    isLoading={isLoading}
                    initialState={initialState}
                    updateTableCallbackFn={openModal}
                  />
                  <ButtonContainer>
                    <WDButtonLarge>
                      <Button type={'button'} onClick={togglePopUp}>
                        {'Add Inventory'}
                      </Button>
                    </WDButtonLarge>
                  </ButtonContainer>
                </DetailsContainer>
              )}
            </WDCardContentRound>
          </WDCard>
        </ReviewLocate>
      </SubWrapper>
      {showPopUp && (
        <AddInventory
          setModalCallBack={setShowPopUp}
          apiCallBack={apiCallBack}
        />
      )}
      {updateApiStatus.status !== null && (
        <ToastWrapper>
          <Toast
            text={updateApiStatus.text}
            type={updateApiStatus.status ? 'success' : 'danger'}
            openStatusCallback={(status: boolean) =>
              setUpdateApiStatus({
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
  )
}

export const InventoryPage = () => {
  const { isLoggedIn } = useContext(AuthContext)
  if (isLoggedIn) {
    return <Inventory />
  } else {
    return (
      <Navigate
        to={{ pathname: '/login' }}
        state={{ redirectUrl: '/inventory' }}
      />
    )
  }
}

export default InventoryPage
