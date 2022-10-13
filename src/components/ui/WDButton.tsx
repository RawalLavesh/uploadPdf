import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
import { SIZES, TextSizes, TextWeight } from '../../theme/Sizes'

interface cardProps {
  children?: React.ReactNode
  activeButton?: number
  buttonStatus?: string | number
}

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.Background.PrimaryText};
  border: 1px solid ${COLORS.Border.PrimaryText};
  border-radius: ${SIZES[0]};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.White};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[0]} ${SIZES[3]};
    font-size: ${TextSizes[2]};
    line-height: ${TextSizes[6]};
    font-weight: ${TextWeight[0]};
  }
`
export const StyledPageButtonWhite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.Background.White};
  border-radius: ${SIZES[10]};
  border: 1px solid ${COLORS.Border.PrimaryText};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.PrimaryText};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[1]} 0.6rem;
    font-size: ${TextSizes[2]};
    line-height: ${TextSizes[6]};
    font-weight: ${TextWeight[0]};
  }
`
export const StyledPageButtonPrimary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.Background.PrimaryText};
  border-radius: ${SIZES[10]};
  border: 1px solid ${COLORS.Border.PrimaryText};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.White};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[1]} 0.6rem;
    font-size: ${TextSizes[2]};
    line-height: ${TextSizes[6]};
    font-weight: ${TextWeight[0]};
  }
`

export const StyledButtonDisabled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.Background.NeutralStrong};
  border-radius: ${SIZES[0]};
  border: 1px solid ${COLORS.UI.NeutralDisabled};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.NeutralDisabled};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[0]} ${SIZES[3]};
    font-size: ${TextSizes[2]};
    line-height: ${TextSizes[6]};
    font-weight: ${TextWeight[0]};
  }
`
export const StyledButtonOutLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.Background.White};
  border-radius: ${SIZES[0]};
  border: 1px solid ${COLORS.Border.PrimaryText};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.PrimaryText};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[0]} ${SIZES[3]};
    font-size: ${TextSizes[2]};
    line-height: ${TextSizes[6]};
    font-weight: ${TextWeight[0]};
  }
`

export const StyledButtonTransparent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: ${SIZES[0]};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.PrimaryText};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[0]};
    font-size: 14px;
    line-height: ${SIZES[3]};
    font-weight: ${TextWeight[3]};
  }
`
export const StyledMoreButtonTransparent = styled.div`
  background: transparent;
  cursor: pointer;
  button {
    border: none;
    background: none;
    display: flex;
  }
`
export const StyledButtonPrimaryTransparent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: ${SIZES[0]};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.Primary50};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[0]};
    font-size: 14px;
    line-height: ${SIZES[3]};
    font-weight: ${TextWeight[3]};
  }
`
export const StyledButtonLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.Background.PrimaryText};
  border: 1px solid ${COLORS.Background.PrimaryText};
  border-radius: ${SIZES[0]};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.White};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: ${SIZES[1]} ${SIZES[5]};
    font-size: ${SIZES[3]};
    line-height: ${SIZES[4]};
    font-weight: ${TextWeight[0]};
  }
`

export const StyledButtonAccentLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.Background.MilkyWhite};
  border-radius: ${SIZES[0]};
  border: 1px solid ${COLORS.Border.Accent};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.Brand3};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding: ${SIZES[1]} ${SIZES[5]};
    font-size: ${SIZES[3]};
    line-height: ${SIZES[4]};
    font-weight: ${TextWeight[0]};
  }
`
export const StyledButtonAccent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: ${SIZES[0]};
  border: 1px solid ${COLORS.Border.Accent};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.Brand3};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[0]} ${SIZES[3]};
    font-size: ${TextSizes[2]};
    line-height: ${TextSizes[6]};
    font-weight: ${TextWeight[0]};
  }
`
export const StyledButtonOutLineLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.Background.White};
  border-radius: ${SIZES[0]};
  border: 1px solid ${COLORS.Border.PrimaryText};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.PrimaryText};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${SIZES[5]};
    padding: ${SIZES[1]} ${SIZES[5]};
    font-size: ${SIZES[3]};
    line-height: ${SIZES[4]};
    font-weight: ${TextWeight[0]};
  }
`

export const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${SIZES[0]};
  cursor: pointer;
  button {
    border: none;
    background: none;
    color: ${COLORS.UI.PrimaryText};
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 6rem;
    height: ${SIZES[5]};
    padding: ${SIZES[0]} ${SIZES[3]};
    font-size: ${TextSizes[2]};
    line-height: ${TextSizes[6]};
    font-weight: ${TextWeight[2]};
    border: 1px solid ${COLORS.Border.PrimaryText};
  }
  button:not(:last-child, :first-child) {
    border-top: none;
    border-bottom: none;
    border-left: 1px solid ${COLORS.Border.PrimaryText};
    border: 1px solid ${COLORS.Border.PrimaryText};
  }
  button:first-of-type {
    border-top-left-radius: ${SIZES[0]};
    border-bottom-left-radius: ${SIZES[0]};
  }
  button:last-of-type {
    border-top-right-radius: ${SIZES[0]};
    border-bottom-right-radius: ${SIZES[0]};
    border-left: 1px solid ${COLORS.Border.PrimaryText};
  }
  button:nth-child(${({ activeButton }: cardProps) => activeButton}) {
    background: ${COLORS.Background.PrimaryText};
    color: ${COLORS.UI.White};
  }
`

export const WDButton = ({ children }: cardProps) => {
  return <StyledButton>{children}</StyledButton>
}
export const WDPageButtonWhite = ({ children }: cardProps) => {
  return <StyledPageButtonWhite>{children}</StyledPageButtonWhite>
}

export const WDPageButtonPrimary = ({ children }: cardProps) => {
  return <StyledPageButtonPrimary>{children}</StyledPageButtonPrimary>
}

export const WDButtonAccent = ({ children }: cardProps) => {
  return <StyledButtonAccent>{children}</StyledButtonAccent>
}

export const WDButtonAccentLarge = ({ children }: cardProps) => {
  return <StyledButtonAccentLarge>{children}</StyledButtonAccentLarge>
}

export const WDButtonDisabled = ({ children }: cardProps) => {
  return <StyledButtonDisabled>{children}</StyledButtonDisabled>
}

export const WDButtonOutLine = ({ children }: cardProps) => {
  return <StyledButtonOutLine>{children}</StyledButtonOutLine>
}

export const WDButtonTransparent = ({ children }: cardProps) => {
  return <StyledButtonTransparent>{children}</StyledButtonTransparent>
}
export const WDMoreButtonTransparent = ({ children }: cardProps) => {
  return <StyledMoreButtonTransparent>{children}</StyledMoreButtonTransparent>
}

export const WDButtonPrimaryTransparent = ({ children }: cardProps) => {
  return (
    <StyledButtonPrimaryTransparent>{children}</StyledButtonPrimaryTransparent>
  )
}

export const WDButtonOutLineLarge = ({ children }: cardProps) => {
  return <StyledButtonOutLineLarge>{children}</StyledButtonOutLineLarge>
}

export const WDButtonLarge = ({ children }: cardProps) => {
  return <StyledButtonLarge>{children}</StyledButtonLarge>
}

export const WDButtonGroup = ({ children, activeButton }: cardProps) => {
  return (
    <StyledButtonGroup activeButton={activeButton}>
      {children}
    </StyledButtonGroup>
  )
}
