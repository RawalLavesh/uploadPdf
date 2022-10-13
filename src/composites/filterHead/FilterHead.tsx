import { Wrapper, LabelHeader, List, InputIcon, ButtonStyle } from './styles'

import { FilterHeadProps } from './IFilterHead'
import { FilterHeadDropdown } from '../../components/selectDropdown/SelectDropdown'
import { useState } from 'react'
import { Textbox } from '../../components/textbox/Textbox'
import Button from '../../components/button/Button'
import { COLORS } from '../../theme/Colors'
import WDSelect from '../../components/ui/WDSelect'
import SvgCalendar from '../../components/svg/logo/SvgCalendar'
import {
  SvgChevronDownSmall,
  SvgChevronUpSmall,
} from '../../components/svg/SvgChevron'
import {
  WDStyledButtonText,
  WDStyledFinancialHeading,
} from '../../components/ui/WDTypography'
import Label from '../../components/label/Label'

// eslint-disable-next-line react-hooks/rules-of-hooks

export const FilterHead = ({
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
}: FilterHeadProps) => {
  const [account, setAccount] = useState<string | undefined>()
  const [inputValue, setInputValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <Wrapper>
      <LabelHeader color={'#000'}>
        <List>
          {/* <FilterHeadDropdown
              options={[{ value: '1', label: 'one' }]}
              onChange={(value: string | undefined) => setAccount(value)}
              defaultValue={{
                value: 'Filter By Category',
                label: 'Filter By Category',
              }}
            /> */}
          <ButtonStyle>
            <Button
              type={'button'}
              color={COLORS.UI.BackgroundStrong}
              suffixedIcon={
                showOptions ? (
                  <SvgChevronUpSmall fillColor={COLORS.UI.BackgroundStrong} />
                ) : (
                  <SvgChevronDownSmall fillColor={COLORS.UI.BackgroundStrong} />
                )
              }
              onClick={() => setShowOptions(!showOptions)}
            >
              <WDStyledFinancialHeading>
                <Label>{'Filter By Category'}</Label>
              </WDStyledFinancialHeading>
            </Button>
          </ButtonStyle>
        </List>

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
          <Button
            borderLessBgColor="#E2E8F0"
            borderRadius="8px"
            type=""
            color={'#A7AFBC'}
            padding="9px 15px 7px"
            hasBorder={false}
          >
            {'Reset'}
          </Button>
        </List>
      </LabelHeader>
    </Wrapper>
  )
}
