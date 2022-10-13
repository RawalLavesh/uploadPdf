import { useContext, useRef, useState } from 'react'
import Image from '../../components/image/Image'
import Label from '../../components/label/Label'
import Cancel from '../../assets/icons/size16/Cancel.svg'
import Add from '../../assets/icons/Default.svg'
import {
  CancelWrapper,
  DividerWrapper,
  FieldsetWrapper,
  FirstTextBox,
  HeaderWrapper,
  ImageWrapper,
  MasterWrapper,
  ModalFooter,
  ModalHeaderWrapper,
  ModalWrapper,
  OverlayWrapper,
  SecondTextBox,
  TextInputWrapper,
  ThirdTextBox,
  Wrapper,
  ButtonContainer,
  SubWrapper,
  ErrorWrapper,
  InlineErrorWrapper,
} from './styles'
import { AddInventoryProps } from './IAddInventory'
import { FormWrapper } from '../individualRequestRow/styles'
import { Textbox } from '../../components/textbox/Textbox'
import Button from '../../components/button/Button'
import inventoryContext from '../../store/InventoryContext'
import { AxiosError } from 'axios'
import { AddInventoryRequestModel } from '../../shared/models/IInventoryPage'
import { Icons } from '../../shared/GlobalStyle'
import { AuthContext } from '../../store/LoginAuthContext'
import { LottieWrapper, SpinnerWrapper } from '../submitLocate/styles'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'
import {
  WDLabel,
  WDFormLabelHeading,
  WDHorizontalDivider,
} from '../../components/ui/WDLabel'
import { WDTextbox } from '../../components/ui/WDTextbox'
import {
  WDButton,
  WDButtonOutLine,
  WDButtonTransparent,
} from '../../components/ui/WDButton'

export const AddInventory = ({
  setModalCallBack,
  apiCallBack,
}: AddInventoryProps) => {
  const inventory = useContext(inventoryContext)
  const [modal, setModal] = useState(false)
  const { user } = useContext(AuthContext)
  const [showError, setShowError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState<AddInventoryRequestModel>({
    cusip: '',
    quantity: null,
    userName: user.userName,
    batchDescription: '',
  })
  const form = useRef<HTMLFormElement>(null)
  const toggleModal = () => {
    setModal(!modal)
    setModalCallBack(modal)
  }

  const validate = (dataToValidate: AddInventoryRequestModel) => {
    if (
      !dataToValidate ||
      !dataToValidate.cusip ||
      !dataToValidate.quantity ||
      !dataToValidate.batchDescription ||
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
    const cusipValue = (elements?.namedItem('cusip') as HTMLInputElement).value
    const quantityValue = (elements?.namedItem('quantity') as HTMLInputElement)
      .value
    const sourceValue = (
      elements?.namedItem('batchDescription') as HTMLInputElement
    ).value
    const data = {
      cusip: cusipValue,
      quantity: isNaN(parseInt(quantityValue)) ? null : parseInt(quantityValue),
      batchDescription: sourceValue,
      userName: user.userName,
    }
    setFormData(data)
  }

  const handleSubmit = () => {
    validate(formData)
    if (validate(formData)) {
      setLoading(true)
      inventory
        .addInventoryRequest(formData)
        .then((res) => {
          if (res.data) {
            apiCallBack(true, res.data.batchID, null)
            toggleModal()
            setLoading(false)
          }
        })
        .catch((error: AxiosError) => {
          apiCallBack(false, null, error)
          setLoading(false)
        })
    }
  }

  return (
    <MasterWrapper>
      <OverlayWrapper>
        <ModalWrapper>
          <ModalHeaderWrapper>
            <HeaderWrapper>
              <ImageWrapper>
                <Image image={Add} alt={'Add'} width={'22px'} height={'22px'} />
              </ImageWrapper>
              <WDFormLabelHeading>
                <Label>{'Add Inventory'}</Label>
              </WDFormLabelHeading>
            </HeaderWrapper>
            <CancelWrapper>
              <WDButtonTransparent>
                <Button type={'button'} onClick={toggleModal}>
                  <Image image={Cancel} alt={'Toast Cancel'} width={'18px'} height={'18px'} />
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
                          <Label>{'CUSIP'}</Label>
                        </WDLabel>
                      </SubWrapper>
                      <WDTextbox>
                        <Textbox
                          placeholder={`CUSIP`}
                          type={'text'}
                          name="cusip"
                        />
                      </WDTextbox>
                    </FirstTextBox>
                    {showError && !formData.cusip && (
                      <InlineErrorWrapper>
                        <Image
                          image={Icons.ExclamationWarning}
                          alt={'Exclamation Icon'}
                        />
                        &nbsp; {'Required'}
                      </InlineErrorWrapper>
                    )}
                  </ErrorWrapper>
                  <ErrorWrapper>
                    <SecondTextBox>
                      <SubWrapper>
                        <WDLabel>
                          <Label>{'Quantity'}</Label>
                        </WDLabel>
                      </SubWrapper>
                      <WDTextbox>
                        <Textbox
                          name="quantity"
                          placeholder={`Quantity `}
                          type={'number'}
                        />
                      </WDTextbox>
                    </SecondTextBox>
                    {showError && !formData.quantity && (
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
                <TextInputWrapper>
                  <ErrorWrapper>
                    <ThirdTextBox>
                      <SubWrapper>
                        <WDLabel>
                          <Label>{'Source'}</Label>
                        </WDLabel>
                      </SubWrapper>
                      <WDTextbox>
                        <Textbox
                          name="batchDescription"
                          placeholder={`Source`}
                          type={'text'}
                        />
                      </WDTextbox>
                      {showError && !formData.batchDescription && (
                        <InlineErrorWrapper>
                          <Image
                            image={Icons.ExclamationWarning}
                            alt={'Exclamation Icon'}
                          />
                          &nbsp; {'Required'}
                        </InlineErrorWrapper>
                      )}
                    </ThirdTextBox>
                  </ErrorWrapper>
                  <ErrorWrapper>
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
    </MasterWrapper>
  )
}
