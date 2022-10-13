import { useContext, useRef, useState } from 'react'
import Image from '../../components/image/Image'
import Label from '../../components/label/Label'
import Cancel from '../../assets/icons/size16/Cancel.svg'
import {
  CancelWrapper,
  DividerWrapper,
  FieldsetWrapper,
  HeaderWrapper,
  MasterWrapper,
  ModalFooter,
  ModalHeaderWrapper,
  ModalWrapper,
  OverlayWrapper,
  SecondTextBox,
  TextInputWrapper,
  Wrapper,
  ButtonContainer,
  SubWrapper,
  ErrorWrapper,
  InlineErrorWrapper,
} from '../addInventory/styles'
import { AddInventoryReviewProps } from '../addInventory/IAddInventory'
import { FormWrapper } from '../individualRequestRow/styles'
import { Textbox } from '../../components/textbox/Textbox'
import Button from '../../components/button/Button'
import { Icons } from '../../shared/GlobalStyle'
import { AuthContext } from '../../store/LoginAuthContext'
import { UpdateReviewRequestModel } from '../../shared/models/IReviewLocate'
import reviewLocateContext from '../../store/ReviewLocateContext'
import { AxiosError } from 'axios'
import {
  LottieWrapper,
  SpinnerWrapper,
  ToastWrapper,
} from '../submitLocate/styles'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'
import { Toast } from '../../components/toast/Toast'
import {
  WDFormLabelHeading,
  WDHorizontalDivider,
  WDLabel,
} from '../../components/ui/WDLabel'
import { WDUpdateTextbox } from '../../components/ui/WDTextbox'
import {
  WDButton,
  WDButtonOutLine,
  WDButtonTransparent,
} from '../../components/ui/WDButton'

export const AddInventoryReview = ({
  setModalCallBack,
  rowData,
  index,
  apiSuccessCallBack,
}: AddInventoryReviewProps) => {
  const form = useRef<HTMLFormElement>(null)
  const [modal, setModal] = useState(false)
  const { user } = useContext(AuthContext)
  const [showError, setShowError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const loginContext = useContext(AuthContext)
  const reviewContext = useContext(reviewLocateContext)
  const [formData, setFormData] = useState<UpdateReviewRequestModel>({
    userName: loginContext.user.userName,
    requestId: rowData ? rowData[index].requestID : 0,
    requestQuantity:
      index !== undefined && rowData && rowData.length > 0
        ? rowData[index].requestQuantity
        : 0,
    allocationQuantity: 0,
    batchDescription: '',
  })
  const [updateApiStatus, setUpdateApiStatus] = useState<{
    status: boolean | null
    text: string
  }>({
    status: null,
    text: '',
  })

  const toggleModal = () => {
    setModal(!modal)
    setModalCallBack(modal)
  }

  const validate = (dataToValidate: UpdateReviewRequestModel) => {
    if (
      !dataToValidate ||
      !dataToValidate.allocationQuantity ||
      !dataToValidate.requestId ||
      !dataToValidate.requestQuantity ||
      !dataToValidate.userName
    ) {
      setShowError(true)
      return false
    } else {
      setShowError(false)
      return true
    }
  }

  const handleForm = () => {
    const elements = form.current?.elements
    const quantityValue = (
      elements?.namedItem('allocation') as HTMLInputElement
    ).value
    const data = {
      requestId: rowData ? rowData[index].requestID : 0,
      requestQuantity: formData.requestQuantity,
      allocationQuantity: isNaN(parseInt(quantityValue))
        ? 0
        : parseInt(quantityValue),
      userName: user.userName,
    }
    setFormData(data)
  }

  const handleSubmit = () => {
    validate(formData)
    if (validate(formData)) {
      setLoading(true)
      reviewContext
        .updateReviewRequest([formData])
        .then((res) => {
          if (res.data) {
            setLoading(false)
            if (res.data === 'Allocation updated successfully.') {
              apiSuccessCallBack(true, null)
              setUpdateApiStatus({
                status: true,
                text: res.data,
              })
            }
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

  return (
    <MasterWrapper>
      <OverlayWrapper>
        <ModalWrapper>
          <ModalHeaderWrapper>
            <HeaderWrapper>
              <WDFormLabelHeading>
                <Label>{'Update Allocation Quantity'}</Label>
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
                    <SecondTextBox>
                      <SubWrapper>
                        <WDLabel>
                          <Label>{'Allocation Quantity'}</Label>
                        </WDLabel>
                      </SubWrapper>
                      <WDUpdateTextbox>
                        <Textbox
                          name="allocation"
                          placeholder={`Quantity `}
                          type={'number'}
                        />
                      </WDUpdateTextbox>
                    </SecondTextBox>
                    {showError && !formData.allocationQuantity && (
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
