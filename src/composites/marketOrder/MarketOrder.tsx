import { useState } from 'react'
import Button from '../../components/button/Button'
import Label from '../../components/label/Label'
import {
  SvgChevronDownMedium,
  SvgChevronUpMedium,
  SvgWarning,
} from '../../components/svg/SvgChevron'
import { WDStyledWidgetSubHeading } from '../../components/ui/WDTypography'
import { COLORS } from '../../theme/Colors'
import { InputField } from '../inputField/InputField'
import {
  CardBox,
  MakeOrderForm,
  DropdownWrapper,
  Warning,
  ExecutionTypeDropdownWrapper,
  DropdownSubMenuOne,
  DropdownSubMenuTwo,
  DropdownTwo,
  DropdownOne,
  FromControllerGroupOne,
  FromControllerGroupTwo,
  FromControllerGroup,
  CombinedDropdownWrapper,
  CombinedExecutionTypeDropdownWrapper,
} from './styles'

export default function MarketOrder({ selectedOrderType }: any) {
  const [showOptions, setShowOptions] = useState(false)
  const [limitPrice, setLimitPrice]: any = useState(130)
  const [share, setShare]: any = useState(0)
  const [showOptionsDuration, setShowOptionsDuration] = useState(false)
  return (
    <CardBox>
      <MakeOrderForm>
        {selectedOrderType !== 'Market Order' ? (
          <>
            <FromControllerGroup>
              <InputField
                label={
                  selectedOrderType === 'Stop Order'
                    ? 'Stop Price'
                    : 'Limit Price'
                }
                id={'LimitPrice'}
                textboxPlaceholder={'Limit Price'}
                value={limitPrice}
                onChange={(limit: any) => {
                  setLimitPrice(limit)
                }}
              />
            </FromControllerGroup>
            {limitPrice < 120 && (
              <Warning>
                <SvgWarning fillColor={'#F97316'} />
                <Label>
                  {'Limit price must be greater than the current market price'}
                </Label>
              </Warning>
            )}
          </>
        ) : (
          <>
            {selectedOrderType === 'Market Order' ? null : (
              <>
                {' '}
                <FromControllerGroup>
                  <InputField
                    label={'Stop Price'}
                    id={'StopPrice'}
                    textboxPlaceholder={'Stop Price'}
                    value={limitPrice}
                    onChange={(limit: any) => {
                      setLimitPrice(limit)
                    }}
                  />
                </FromControllerGroup>
                {limitPrice < 120 && (
                  <Warning>
                    <SvgWarning fillColor={'#F97316'} />
                    <Label>
                      {'Stop Price must be less than or equal to Limit Price'}
                    </Label>
                  </Warning>
                )}
              </>
            )}
          </>
        )}
        {selectedOrderType === 'Stop Limit Order' ? (
          <>
            <FromControllerGroup>
              <InputField
                label={'Stop Price'}
                id={'LimitPrice'}
                textboxPlaceholder={'Limit Price'}
                value={limitPrice}
                onChange={(limit: any) => {
                  setLimitPrice(limit)
                }}
              />
            </FromControllerGroup>
            {limitPrice < 120 && (
              <Warning>
                <SvgWarning fillColor={'#F97316'} />
                <Label>
                  {'Stop price must be greater than the current market price'}
                </Label>
              </Warning>
            )}{' '}
          </>
        ) : null}
        <FromControllerGroup>
          <InputField
            label={'Number of shares'}
            id={'shares'}
            textboxPlaceholder={'Number of shares'}
            value={share}
            onChange={(e) => {
              setShare(e)
            }}
          />
        </FromControllerGroup>
        <FromControllerGroup disabled={true}>
          <InputField
            label={'Estimated Cost'}
            id={'Cost'}
            disabled={true}
            textboxPlaceholder={'Estimated Cost'}
            value={'$0'}
            onChange={(value: string) => {
              console.log(value)
            }}
          />
        </FromControllerGroup>
        <FromControllerGroupOne>
          <DropdownWrapper>
            <Label>Duration</Label>
            <DropdownOne>
            <CombinedDropdownWrapper>
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
                onClick={() => {setShowOptionsDuration(!showOptionsDuration)}}
                bgColor={COLORS.Background.Primary}
              >
                <Label>{'Good for the Day'}</Label>
              </Button>
              </CombinedDropdownWrapper>
              {showOptionsDuration && (
                <DropdownSubMenuOne>
                  <WDStyledWidgetSubHeading>
                    <Label>Good for the Day</Label>
                    <Label>All or None</Label>
                  </WDStyledWidgetSubHeading>
                </DropdownSubMenuOne>
              )}
            </DropdownOne>
          </DropdownWrapper>
        </FromControllerGroupOne>
        <FromControllerGroupTwo>
          <ExecutionTypeDropdownWrapper>
            <Label>Execution Type</Label>
            <DropdownTwo>
              <CombinedExecutionTypeDropdownWrapper>
              <Button
                type={'button'}
                color={COLORS.UI.BackgroundStrong}
                suffixedIcon={
                  showOptions ? (
                    <SvgChevronUpMedium
                      fillColor={COLORS.Background.NeutralIcons}
                    />
                  ) : (
                    <SvgChevronDownMedium
                      fillColor={COLORS.Background.NeutralIcons}
                    />
                  )
                }
                onClick={() => {setShowOptions(!showOptions) }}
                bgColor={COLORS.Background.Primary}
              >
                {'Execution Type'}
              </Button>
              </CombinedExecutionTypeDropdownWrapper>
              {showOptions && (
                <DropdownSubMenuTwo>
                  <WDStyledWidgetSubHeading>
                    <Label>Not limited</Label>
                    <Label>All or None</Label>
                  </WDStyledWidgetSubHeading>
                </DropdownSubMenuTwo>
              )}
            </DropdownTwo>
          </ExecutionTypeDropdownWrapper>
        </FromControllerGroupTwo>
      </MakeOrderForm>
    </CardBox>
  )
}
