import { useState } from 'react'
import Button from '../../components/button/Button'
import Label from '../../components/label/Label'
import {
  SvgChevronDownMedium,
  SvgChevronUpMedium,
} from '../../components/svg/SvgChevron'
import {
    WDStyledOrderEntrySubHeadingText,

  WDStyledWidgetSubHeading,
} from '../../components/ui/WDTypography'
import { COLORS } from '../../theme/Colors'
import { InputField } from '../inputField/InputField'
import {
  CombinedDropdownWrapper,
  CombinedExecutionTypeWrapper,
  Container,
  DropdownWrapper,
  DurationDropdownSubMenu,
  EstimatedCostWrapper,
  ExecutionDropdownSubMenu,
  ExecutionTypeDropdownWrapper,
  InputWrapper,
  LabelWrapper,
  LimitPriceInputWrapper,
  WholeDropdownWrapper,
} from './styles'

export const LimitOrder = ({ selectedOrderType }: any) => {
  const [limitPrice, setLimitPrice] :any= useState(130)
  const [showOptionsExecution, setShowOptionsExecution] = useState(false)
  const [share, setShare]: any = useState(0)
  const [showOptionsDuration, setShowOptionsDuration] = useState(false)
  return (
    <Container>
      
      <InputWrapper> <InputField
          label={
            selectedOrderType === 'Stop Order' ? 'Stop Price' : 'Limit Price'
          }
          id={'LimitPrice'}
          textboxPlaceholder={'Limit Price'}
          value={limitPrice}
          onChange={(limit: any) => {
            setLimitPrice(limit)
          }}
        /></InputWrapper>
        <InputWrapper>
        <InputField
          label={'Number of shares'}
          id={'shares'}
          textboxPlaceholder={'Number of shares'}
          value={share}
          onChange={(e) => {
            setShare(e)
          }}
        /></InputWrapper>
       
        <EstimatedCostWrapper disabled = {true}>
        <InputWrapper>
        <InputField
          label={'Estimated Cost'}
          id={'Cost'}
          disabled={true}
          textboxPlaceholder={'Estimated Cost'}
          value={'$0'}
          onChange={(value: string) => {
            console.log(value)
          }}
        /></InputWrapper>
        </EstimatedCostWrapper>
        <InputWrapper>
        <LabelWrapper>
        <WDStyledOrderEntrySubHeadingText>
          <Label> Duration </Label>
        </WDStyledOrderEntrySubHeadingText>
        </LabelWrapper>
        <CombinedDropdownWrapper>
          <DropdownWrapper>
            <Button
              type={'button'}
              color={COLORS.UI.BackgroundStrong}
              suffixedIcon={
                showOptionsDuration ? (
                  <SvgChevronUpMedium
                    fillColor={COLORS.Background.NeutralIcons}
                  />
                ) : (
                  <SvgChevronDownMedium
                    fillColor={COLORS.Background.NeutralIcons}
                  />
                )
              }
              onClick={() => setShowOptionsDuration(!showOptionsDuration)}
            >
              {' '}
              <WDStyledOrderEntrySubHeadingText>
                <Label> {'Good for the day'} </Label>
              </WDStyledOrderEntrySubHeadingText>
            </Button>
          </DropdownWrapper>
          {showOptionsDuration && (
            <DurationDropdownSubMenu>
              <WDStyledOrderEntrySubHeadingText>
                <Label>Good for the Day</Label>
              </WDStyledOrderEntrySubHeadingText>
              <WDStyledOrderEntrySubHeadingText>
                {' '}
                <Label>All or None</Label>
              </WDStyledOrderEntrySubHeadingText>
            </DurationDropdownSubMenu>
          )}
        </CombinedDropdownWrapper>
        </InputWrapper>
        <InputWrapper>
        <LabelWrapper>
        <WDStyledOrderEntrySubHeadingText>
          <Label> Execution Type </Label>
        </WDStyledOrderEntrySubHeadingText>
        </LabelWrapper>
        <CombinedExecutionTypeWrapper>
          <ExecutionTypeDropdownWrapper>
            <Button
              type={'button'}
              color={COLORS.UI.BackgroundStrong}
              suffixedIcon={
                showOptionsExecution ? (
                  <SvgChevronUpMedium
                    fillColor={COLORS.Background.NeutralIcons}
                  />
                ) : (
                  <SvgChevronDownMedium
                    fillColor={COLORS.Background.NeutralIcons}
                  />
                )
              }
              onClick={() => setShowOptionsExecution(!showOptionsExecution)}
            >
              {' '}
              <WDStyledOrderEntrySubHeadingText>
                <Label> {'Not Limited'} </Label>
              </WDStyledOrderEntrySubHeadingText>
            </Button>
          </ExecutionTypeDropdownWrapper>
          {showOptionsExecution && (
            <ExecutionDropdownSubMenu>
              <WDStyledWidgetSubHeading>
                <Label>Not Limited</Label>
              </WDStyledWidgetSubHeading>
              <WDStyledWidgetSubHeading>
                {' '}
                <Label>All or None</Label>
              </WDStyledWidgetSubHeading>
            </ExecutionDropdownSubMenu>
          )}
        </CombinedExecutionTypeWrapper>
        </InputWrapper>
        
   
  
    </Container>
  )
}
