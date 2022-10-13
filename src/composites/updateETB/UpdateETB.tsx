import { useContext, useRef, useState } from 'react'
import Image from '../../components/image/Image'
import Label from '../../components/label/Label'
import Cancel from '../../assets/icons/size16/Cancel.svg'
import {
  CancelWrapper,
  DividerWrapper,
  FieldsetWrapper,
  FirstTextBox,
  HeaderWrapper,
  MasterWrapper,
  ModalHeaderWrapper,
  ModalWrapper,
  OverlayWrapper,
  TextInputWrapper,
  Wrapper,
  ButtonContainer,
  SubWrapper,
  ErrorWrapper,
  InlineErrorWrapper,
} from '../addInventory/styles'
import { FormWrapper } from '../individualRequestRow/styles'
import { Textbox } from '../../components/textbox/Textbox'
import Button from '../../components/button/Button'
import { Icons } from '../../shared/GlobalStyle'
import SelectDropdown from '../../components/selectDropdown/SelectDropdown'
import { UpdateETBRequestModel } from '../../shared/models/IEasyToBorrow'
import { DefaultProps } from '../../components/selectDropdown/ISelectDropdown'
import { UpdateETBProps } from './IUpdateETB'
import { SecondTextBox, ModalFooter, } from './styles'
import easyToBorrowContext from '../../store/EasyToBorrowContext'
import { AxiosError } from 'axios'
import Loader from '../../assets/lottiefiles/loader.json'
import {
  LottieWrapper,
  SpinnerWrapper,
  ToastWrapper,
} from '../submitLocate/styles'
import Lottie from 'lottie-react'
import { Toast } from '../../components/toast/Toast'
import {
  WDLabel,
  WDFormLabelHeading,
  WDHorizontalDivider,
} from '../../components/ui/WDLabel'
import { WDSelect, WDUpdateTextbox } from '../../components/ui/WDTextbox'
import {
  WDButton,
  WDButtonOutLine,
  WDButtonTransparent,
} from '../../components/ui/WDButton'

export const UpdateETB = ({
  setModalCallBack,
  rowData,
  index,
  apiSuccessCallBack,
}: UpdateETBProps) => {
  const [modal, setModal] = useState(false)
  const form = useRef<HTMLFormElement>(null)
  const [showError, setShowError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState<UpdateETBRequestModel>({
    borrowId:
      index !== undefined && rowData && rowData.length > 0
        ? rowData[index].borrowId
        : 0,
    status: 'All',
  })
  const [updateApiStatus, setUpdateApiStatus] = useState<{
    status: boolean | null
    text: string
  }>({
    status: null,
    text: '',
  })

  const easyToBorrow = useContext(easyToBorrowContext)

  const toggleModal = () => {
    setModal(!modal)
    setModalCallBack(modal)
  }

  const statusList = [
    { label: 'Filter by Status', value: 'All' },
    {
      label: 'Easy to borrow',
      value: '1',
    },
    {
      label: 'Locate Required ',
      value: '2',
    },
    {
      label: 'Pre-borrow Required',
      value: '3',
    },
  ]

  const handleForm = () => {
    const formElement = form.current?.elements as HTMLFormControlsCollection
    const statusValue = (
      formElement.namedItem('borrowStatus') as HTMLInputElement
    ).value
    const data: UpdateETBRequestModel = {
      borrowId: formData.borrowId,
      status: statusValue === 'All' ? '' : statusValue,
    }
    setFormData(data)
  }

  const validate = (dataToValidate: UpdateETBRequestModel) => {
    if (
      !dataToValidate ||
      !dataToValidate.borrowId ||
      !dataToValidate.status ||
      dataToValidate.status === 'All'
    ) {
      setShowError(true)
      return false
    } else {
      setShowError(false)
      return true
    }
  }

  const handleSubmit = () => {
    validate(formData)
    if (validate(formData)) {
      setLoading(true)
      easyToBorrow
        .updateInventoryRequest([formData])
        .then((res) => {
          if (res.data) {
            setLoading(false)
            apiSuccessCallBack(true, null)
            setUpdateApiStatus({
              status: true,
              text: 'Status updated successfully.',
            })
          }
          toggleModal()
        })
        .catch((error: AxiosError) => {
          apiSuccessCallBack(false, error)
          setLoading(false)
          setUpdateApiStatus({
            status: false,
            text: error.response ? error.response.statusText : error.message,
          })
        })
    }
  }
  const getCurrentStatus = (): DefaultProps => {
    return statusList.filter((list) => list.value === formData.status)[0]
  }

  return (
    <MasterWrapper>
      <OverlayWrapper>
        <ModalWrapper>
          <ModalHeaderWrapper>
            <HeaderWrapper>
              <WDFormLabelHeading>
                <Label>{'Update borrow Status'}</Label>
              </WDFormLabelHeading>
            </HeaderWrapper>
            <CancelWrapper>
              <WDButtonTransparent>
                <Button type={'button'} onClick={toggleModal}>
                  <Image
                    image={Cancel}
                    alt={'Toast Cancel'}
                    width={'18px'}
                    height={'18px'}
                  />
                </Button>
              </WDButtonTransparent>
            </CancelWrapper>
          </ModalHeaderWrapper>
          <DividerWrapper>
            <WDHorizontalDivider />
          </DividerWrapper>
          <FormWrapper ref={form} onChange={handleForm}>
            <FieldsetWrapper>
              <Wrapper>
                <TextInputWrapper>
                  <ErrorWrapper>
                    <FirstTextBox>
                      <SubWrapper>
                        <WDLabel>
                          <Label>{'Borrow ID'}</Label>
                        </WDLabel>
                      </SubWrapper>
                      <WDUpdateTextbox>
                        <Textbox
                          placeholder={`Borrow ID`}
                          type={'text'}
                          value={formData.borrowId.toString()}
                          disabled
                        />
                      </WDUpdateTextbox>
                    </FirstTextBox>
                  </ErrorWrapper>
                  <ErrorWrapper>
                    <SecondTextBox>
                      <SubWrapper>
                        <WDLabel>
                          <Label>{'Status'}</Label>
                        </WDLabel>
                      </SubWrapper>
                      <WDSelect>
                        <SelectDropdown
                          options={statusList}
                          name="borrowStatus"
                          indicatorSeparator={false}
                          width={'20rem'}
                          height={'2.625rem'}
                          borderRadius={'0.25rem'}
                          onChange={(value: string) => {
                            setFormData({ ...formData, status: value })
                          }}
                          value={getCurrentStatus()}
                        />
                      </WDSelect>
                    </SecondTextBox>
                    {showError && !formData.status && (
                      <InlineErrorWrapper>
                        <Image
                          image={Icons.ExclamationWarning}
                          alt={'Exclamation Icon'}
                        />
                        &nbsp; {'Required'}
                      </InlineErrorWrapper>
                    )}
                  </ErrorWrapper>
                </TextInputWrapper>
              </Wrapper>
              <ModalFooter>
                <ButtonContainer>
                  <WDButtonOutLine>
                    <Button type={'button'} onClick={toggleModal}>
                      {'Cancel'}
                    </Button>
                  </WDButtonOutLine>
                </ButtonContainer>
                <ButtonContainer>
                  <WDButton>
                    <Button type={'button'} onClick={handleSubmit}>
                      {'Submit'}
                    </Button>
                  </WDButton>
                </ButtonContainer>
              </ModalFooter>
            </FieldsetWrapper>
          </FormWrapper>
        </ModalWrapper>
      </OverlayWrapper>
      {isLoading && (
        <SpinnerWrapper>
          <LottieWrapper>
            <Lottie animationData={Loader} loop={true} />
          </LottieWrapper>
        </SpinnerWrapper>
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
    </MasterWrapper>
  )
}
