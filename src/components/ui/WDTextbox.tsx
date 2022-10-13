import styled from 'styled-components'
import { SIZES } from '../../theme/Sizes'

interface textboxProps {
  children?: React.ReactNode
}

export const StyledTextbox = styled.div`
  display: flex;
  align-items: center;
  height: ${SIZES[5]};
  border-radius: ${SIZES[1]};
  width: 100%;
  input {
    padding: ${SIZES[0]} ${SIZES[1]};
    width: 100%;
    height: ${SIZES[5]};
  }
`
export const StyledUpdatedTextbox = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${SIZES[1]};
  width: 100%;
  input {
    padding: ${SIZES[0]} ${SIZES[1]};
    width: 18rem;
    height: 2.625rem;
  }
`

export const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${SIZES[1]};
  width: 100%;
`
export const StyledCalendar = styled.div`
  display: flex;
  align-items: center;
  height: ${SIZES[5]};
  border-radius: ${SIZES[1]};
  max-width: 144px;
  input {
    padding: ${SIZES[0]} ${SIZES[1]};
    width: 100%;
    height: ${SIZES[5]};
  }
`
export const StyledTextboxLarge = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  height: ${SIZES[8]};
  border-radius: ${SIZES[1]};
  input {
    padding: ${SIZES[2]} ${SIZES[3]};
    width: 100%;
    height: ${SIZES[8]};
  }
`

export const WDTextbox = ({ children }: textboxProps) => {
  return <StyledTextbox>{children}</StyledTextbox>
}
export const WDUpdateTextbox = ({ children }: textboxProps) => {
  return <StyledUpdatedTextbox>{children}</StyledUpdatedTextbox>
}

export const WDSelect = ({ children }: textboxProps) => {
  return <StyledSelect>{children}</StyledSelect>
}

export const WDTextboxLarge = ({ children }: textboxProps) => {
  return <StyledTextboxLarge>{children}</StyledTextboxLarge>
}

export const WDCalendar = ({ children }: textboxProps) => {
  return <StyledCalendar>{children}</StyledCalendar>
}
