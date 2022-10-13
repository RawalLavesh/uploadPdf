import { Wrapper, LabelHeader, List, InputIcon } from './styles'

import { TradingFilterHeadProps } from './ITradingFilterHead'
import { FilterHeadDropdown } from '../../components/selectDropdown/SelectDropdown'
import { useState } from 'react'
import { Textbox } from '../../components/textbox/Textbox'
import Button from '../../components/button/Button'
import { COLORS } from '../../theme/Colors'
import WDSelect from '../../components/ui/WDSelect'
import SvgCalendar from '../../components/svg/logo/SvgCalendar'
import SvgSearch from '../../components/svg/logo/SvgSearch'
import { WDStyledLabelDisabled } from '../../components/ui/WDTypography'
import Label from '../../components/label/Label'

// eslint-disable-next-line react-hooks/rules-of-hooks

export const TradingFilterHead = ({
  disabled,
  label,
  type,
  placeholder,
  defaultValue,
  name,
  id,
  max,
  value,
  onChange,
}: TradingFilterHeadProps) => {
  const [account, setAccount] = useState<string | undefined>()
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <Wrapper>
      <LabelHeader color={'#000'}>
        <List>
          <Textbox
            id={id}
            placeholder={'Start Date'}
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
          <InputIcon>
            <SvgCalendar />
          </InputIcon>
        </List>
        <List>
          <Textbox
            id={id}
            placeholder={'End Date'}
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
          <InputIcon>
            <SvgCalendar />
          </InputIcon>
        </List>
        <List>
          <Textbox
            id={id}
            placeholder={'CUSIP/Symbol'}
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
          <InputIcon>
            <SvgSearch fillColor={COLORS.UI.Icon} />
          </InputIcon>
        </List>
        <List>
          <Button
            type={'button'}
            borderLessBgColor="#E2E8F0"
            borderRadius="8px"
            padding="9px 15px 7px"
            hasBorder={false}
          >
            <WDStyledLabelDisabled>
              <Label>{'Apply filters'}</Label>
            </WDStyledLabelDisabled>
          </Button>
        </List>
        <List>
          <Button
            borderLessBgColor="#E2E8F0"
            borderRadius="8px"
            type=""
            color={'#A7AFBC'}
            padding="9px 15px 7px"
            hasBorder={false}
          >
            <WDStyledLabelDisabled>
              <Label>{'Reset'}</Label>
            </WDStyledLabelDisabled>
          </Button>
        </List>
      </LabelHeader>
    </Wrapper>
  )
}
