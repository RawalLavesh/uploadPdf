import styled from 'styled-components'

interface selectProps {
  children?: React.ReactNode
}

export const StyledSelect = styled.div`
    borderColor={COLORS.Background.Border}
    borderRadius={'8px'}
    isSearchable={false}
    selectedValueColor={COLORS.UI.TextWeak}
    padding={'4px 8px'}
`
const WDSelect = ({ children }: selectProps) => {
  return <StyledSelect>{children}</StyledSelect>
}

export default WDSelect
