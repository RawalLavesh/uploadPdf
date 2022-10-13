import { ChangeEvent, useState } from 'react'
import { Wrapper, StyledSearchBox, ButtonsWrapper } from './styles'
import Button from '../button/Button'
import { Colors, BorderColors } from '../../shared/styles'
import { SearchBarProps } from './ISearchBar'
import { COLORS } from '../../theme/Colors'
import SvgSearch from '../svg/logo/SvgSearch'
import SvgCancel from '../svg/logo/SvgCancel'

const SearchBar = ({
  placeHolder,
  onChange,
  maxWidth,
  handleSearch,
}: SearchBarProps) => {
  const [query, setQuery] = useState('')
  const [borderColor, setBorderColor] = useState(BorderColors.Gray50)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.target.value)
    onChange(e.target.value)
  }

  return (
    <Wrapper borderColor={borderColor} maxWidth={maxWidth}>
      <StyledSearchBox
        type="text"
        placeholder={placeHolder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e)
        }}
        value={query}
        onFocus={() => setBorderColor(BorderColors.Primary50)}
        onBlur={() => setBorderColor(BorderColors.Gray50)}
      />
      <ButtonsWrapper>
        {query !== '' && (
          <Button
            prefixedIcon={<SvgCancel fillColor={COLORS.Icons.NeutralIcon} />}
            iconWidth={'16px'}
            iconHeight={'16px'}
            type={'button'}
            color={''}
            hasBorder={false}
            padding={'4px'}
            borderLessBgColor={Colors.White}
            onClick={() => {
              setQuery('')
              onChange('')
            }}
          />
        )}
        <Button
          type={'button'}
          color={''}
          prefixedIcon={
            <SvgSearch fillColor={COLORS.Icons.NeutralIconInverted} />
          }
          iconWidth={'16px'}
          iconHeight={'16px'}
          bgColor={COLORS.Background.Primarytext}
          borderColor={COLORS.Background.Primarytext}
          padding={'7px'}
          borderRadius={'4px'}
          onClick={handleSearch}
        />
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default SearchBar
