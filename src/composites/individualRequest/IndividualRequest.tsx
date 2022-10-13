import { useEffect, useRef, useState } from 'react'
import Button from '../../components/button/Button'
import {
  Wrapper,
  FirstRow,
  RowWrapper,
  RequestRowWrapper,
  ToolTipWrapper,
  ButtonWrapper,
} from './styles'
import {IndividualRequestProps} from './IIndividualRequest'
import { IndividualRequestRow } from '../../composites/individualRequestRow/IndividualRequestRow'
import Label from '../../components/label/Label'
import TooltipTop from '../../components/toolTip/Tooltip'
import { Icons } from '../../shared/GlobalStyle'
import { Icon } from '../../components/icon/Icon'
import { WDButtonTransparent } from '../../components/ui/WDButton'
import { WDLabelBrandBold } from '../../components/ui/WDLabel'
import { SubmitLocateValidationPayload } from '../../shared/models/ISubmitLocate'

export const IndividualRequest = ({
  previewClicked,
  disabled,
  formCallBackFn,
}: IndividualRequestProps) => {
  const [showError, setShowError] = useState(false)
  const [previewRequestStatus, setPreviewRequestStatus] = useState(0)
  const [requestArray, setRequestArray] = useState([1])
  const formArray = useRef<HTMLDivElement>(null)

  const getLastRowData = (): SubmitLocateValidationPayload => {
    const formElement: HTMLFormElement = formArray.current?.children[
      formArray.current?.childNodes.length - 1
    ] as HTMLFormElement
    const rowData: SubmitLocateValidationPayload = {
      cusip: (formElement.elements.namedItem('cusipSymbol') as HTMLInputElement)
        .value,
      accountNumber: (
        formElement.elements.namedItem('accountNo') as HTMLInputElement
      ).value,
      quantity: isNaN(
        parseInt(
          (formElement.elements.namedItem('quantity') as HTMLInputElement).value
        )
      )
        ? null
        : parseInt(
            (formElement.elements.namedItem('quantity') as HTMLInputElement)
              .value
          ),
      repCode: (formElement.elements.namedItem('repCode') as HTMLInputElement)
        .value,
    }
    return rowData
  }

  const validate = (dataToValidate: SubmitLocateValidationPayload) => {
    if (
      !dataToValidate ||
      !dataToValidate.cusip ||
      !dataToValidate.quantity ||
      !dataToValidate.accountNumber
    ) {
      setShowError(true)
      return false
    } else {
      setShowError(false)
      return true
    }
  }

  const handleAddFields = () => {
    validate(getLastRowData()) &&
      requestArray.push(requestArray[requestArray.length - 1] + 1)
    setRequestArray([...requestArray])
  }

  const deleteRowHandle = (removedIndex: number) => {
    if (removedIndex !== 0) {
      const newRequestArray = requestArray.filter(
        (value, index) => index != removedIndex
      )
      setRequestArray(newRequestArray)
    }
    setShowError(false)
  }

  useEffect(() => {
    if (previewClicked !== previewRequestStatus) {
      if (validate(getLastRowData())) {
        const formData: SubmitLocateValidationPayload[] = []
        const formElements: HTMLFormElement[] = []
        formArray.current?.childNodes.forEach((child) => {
          formElements.push(child as HTMLFormElement)
        })
        formElements.forEach((form) => {
          const rowData: SubmitLocateValidationPayload = {
            cusip: (form.elements.namedItem('cusipSymbol') as HTMLInputElement)
              .value,
            accountNumber: (
              form.elements.namedItem('accountNo') as HTMLInputElement
            ).value,
            quantity: isNaN(
              parseInt(
                (form.elements.namedItem('quantity') as HTMLInputElement).value
              )
            )
              ? null
              : parseInt(
                  (form.elements.namedItem('quantity') as HTMLInputElement)
                    .value
                ),
            repCode: (form.elements.namedItem('repCode') as HTMLInputElement)
              .value,
          }
          formData.push(rowData)
        })
        formCallBackFn(formData)
      }
      setPreviewRequestStatus(previewClicked)
    }
  }, [previewClicked, formCallBackFn])
  return (
    <Wrapper disabled={disabled}>
      <WDLabelBrandBold>
        <Label>{'Individual request'}</Label>
      </WDLabelBrandBold>
      <Wrapper>
        <FirstRow>
          <RequestRowWrapper ref={formArray}>
            {requestArray.map((value: number, index: number) => {
              return (
                <IndividualRequestRow
                  key={value}
                  number={index}
                  labelOne={'CUSIP/Symbol*'}
                  labelTwo={'Quantity*'}
                  labelThree={'Account Number*'}
                  labelFour={'Representative Code'}
                  callBackFn={deleteRowHandle}
                  showError={showError}
                  disabled={disabled}
                />
              )
            })}
          </RequestRowWrapper>
        </FirstRow>
      </Wrapper>
      <RowWrapper>
        <ButtonWrapper>
          <WDButtonTransparent>
            <Button
              onClick={() => handleAddFields()}
              prefixedIcon={<Icon icon={Icons.AddIcon} />}
              disabled={disabled}
              type={'button'}
            >
              {'Add Entry'}
            </Button>
          </WDButtonTransparent>
        </ButtonWrapper>
        <ToolTipWrapper className="ToolTip">
          <TooltipTop
            width={'14.5rem'}
            height={'3.5rem'}
            label={'Click here to Add new entry.'}
          />
        </ToolTipWrapper>
      </RowWrapper>
    </Wrapper>
  )
}
