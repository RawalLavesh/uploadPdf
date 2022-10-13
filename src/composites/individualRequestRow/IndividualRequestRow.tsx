import { useRef, useState } from 'react'
import {
  Wrapper,
  FirstTextBox,
  SecondTextBox,
  ThirdTextBox,
  FourthTextBox,
  MasterWrapper,
  SubWrapper,
  ButtonWrapper,
  TextInputWrapper,
  FormWrapper,
  FieldsetWrapper,
} from './styles'
import { IndividualRequestRowProps } from './IIndividualRequestRow'
import { Textbox } from '../../components/textbox/Textbox'
import Label from '../../components/label/Label'
import { InlineErrorWrapper } from './styles'
import Button from '../../components/button/Button'
import Image from '../../components/image/Image'
import { Icons } from '../../shared/GlobalStyle'
import { ToolTipWrapper } from '../individualRequest/styles'
import TooltipTop from '../../components/toolTip/Tooltip'
import { WDTextbox } from '../../components/ui/WDTextbox'
import { Icon } from '../../components/icon/Icon'
import { WDLabel } from '../../components/ui/WDLabel'
import { WDButtonTransparent } from '../../components/ui/WDButton'
import { SubmitLocateValidationPayload } from '../../shared/models/ISubmitLocate'

export const IndividualRequestRow = ({
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  number,
  disabled,
  callBackFn,
  showError,
}: IndividualRequestRowProps) => {
  const [formIsValid, setFormAsValid] = useState<boolean>(false)
  const [formData, setFormData] = useState<SubmitLocateValidationPayload>({
    cusip: '',
    accountNumber: '',
    quantity: null,
    repCode: '',
  })
  const form = useRef<HTMLFormElement>(null)

  const clearFormData = () => {
    setFormData({
      cusip: '',
      accountNumber: '',
      quantity: null,
      repCode: '',
    })
  }

  const handleRemoveField = () => {
    if (number > 0) {
      callBackFn(number)
      setFormAsValid(false)
      clearFormData()
    } else {
      callBackFn(number)
      form.current?.reset()
      setFormAsValid(false)
      clearFormData()
    }
  }

  const handleForm = () => {
    const elements = form.current?.elements
    const cusipValue = (elements?.namedItem('cusipSymbol') as HTMLInputElement)
      .value
    const quantityValue = (elements?.namedItem('quantity') as HTMLInputElement)
      .value
    const accountValue = (elements?.namedItem('accountNo') as HTMLInputElement)
      .value
    const repCodeValue = (elements?.namedItem('repCode') as HTMLInputElement)
      .value
    setFormData({
      cusip: cusipValue,
      accountNumber: accountValue,
      quantity: isNaN(parseInt(quantityValue)) ? null : parseInt(quantityValue),
      repCode: repCodeValue,
    })
    if (cusipValue || quantityValue || accountValue || repCodeValue) {
      setFormAsValid(true)
    } else {
      setFormAsValid(false)
    }
  }

  return (
    <FormWrapper ref={form} onChange={handleForm}>
      <FieldsetWrapper disabled={disabled}>
        <Wrapper>
          <ButtonWrapper>
            {!(number === 0 && !formIsValid) && (
              <WDButtonTransparent>
                <Button
                  type={'button'}
                  onClick={handleRemoveField}
                  prefixedIcon={<Icon icon={Icons.DeleteIcon} />}
                ></Button>
              </WDButtonTransparent>
            )}
          </ButtonWrapper>
          {!(number === 0 && !formIsValid) && (
            <ToolTipWrapper className="ToolTip">
              <TooltipTop
                width={'14.5rem'}
                height={'3.5rem'}
                label={'Click here to Delete this row.'}
              />
            </ToolTipWrapper>
          )}
          <TextInputWrapper>
            <MasterWrapper>
              <FirstTextBox>
                <SubWrapper>
                  <WDLabel>
                    <Label>{labelOne}</Label>
                  </WDLabel>
                </SubWrapper>
                <WDTextbox>
                  <Textbox
                    placeholder={`Enter ${labelOne.replace('*', '')}`}
                    type={'text'}
                    name="cusipSymbol"
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
            </MasterWrapper>
            <MasterWrapper>
              <SecondTextBox>
                <SubWrapper>
                  <WDLabel>
                    <Label>{labelTwo}</Label>
                  </WDLabel>
                </SubWrapper>
                <WDTextbox>
                  <Textbox
                    name="quantity"
                    placeholder={`Enter ${labelTwo.replace('*', '')}`}
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
            </MasterWrapper>
            <MasterWrapper>
              <ThirdTextBox>
                <SubWrapper>
                  <WDLabel>
                    <Label>{labelThree}</Label>
                  </WDLabel>
                </SubWrapper>
                <WDTextbox>
                  <Textbox
                    name="accountNo"
                    placeholder={`Enter ${labelThree.replace('*', '')}`}
                    type={'text'}
                  />
                </WDTextbox>
              </ThirdTextBox>
              {showError && !formData.accountNumber && (
                <InlineErrorWrapper>
                  <Image
                    image={Icons.ExclamationWarning}
                    alt={'Exclamation Icon'}
                  />
                  &nbsp; {'Required'}
                </InlineErrorWrapper>
              )}
            </MasterWrapper>
            <MasterWrapper>
              <FourthTextBox>
                <SubWrapper>
                  <WDLabel>
                    <Label>{`${labelFour}`}</Label>
                  </WDLabel>
                </SubWrapper>
                <WDTextbox>
                  <Textbox
                    name="repCode"
                    placeholder={`Enter ${labelFour}`}
                    type={'text'}
                  />
                </WDTextbox>
              </FourthTextBox>
            </MasterWrapper>
          </TextInputWrapper>
        </Wrapper>
      </FieldsetWrapper>
    </FormWrapper>
  )
}
