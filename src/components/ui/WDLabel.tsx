import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
import { SIZES, TextSizes, TextWeight } from '../../theme/Sizes'
import Divider from '../divider/Divider'
import { FontSizes, FontWeights } from '../../theme/Fonts'

interface labelProps {
  children?: React.ReactNode
}

export const StyledLabel = styled.div`
  font-size: ${TextSizes[3]};
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[4]};
  font-style: normal;
  color: ${COLORS.UI.NeutralText};
`

export const StyledLabelGray = styled.div`
  font-size: ${TextSizes[3]};
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[4]};
  font-style: normal;
  color: ${COLORS.UI.Gray20};
`

export const StyledLabelGrayBold = styled.div`
  font-size: ${TextSizes[3]};
  font-weight: bold;
  line-height: ${SIZES[4]};
  font-style: normal;
  color: ${COLORS.UI.Gray20};
`

export const StyledLabelPrimary = styled.div`
  font-size: ${TextSizes[2]};
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[4]};
  font-style: normal;
  color: ${COLORS.UI.Primary60};
`

export const StyledFormLabelHeading = styled.div`
  font-size: ${TextSizes[5]};
  font-style: normal;
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[5]};
  color: ${COLORS.UI.Gray100};
`
export const StyledLoginLabelHeading = styled.div`
  font-size: ${TextSizes[7]};
  font-style: normal;
  font-weight: ${TextWeight[3]};
  line-height: ${SIZES[5]};
  color: ${COLORS.UI.NeutralText};
`
export const StyledLabelFooter = styled.div`
  font-size: 12px;
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[3]};
  font-style: normal;
  color: ${COLORS.UI.Black};
`

export const StyledLabelFooterGray = styled.div`
  font-size: 12px;
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[3]};
  font-style: normal;
  color: ${COLORS.UI.Gray100};
`

export const StyledLabelHeadingWhite = styled.div`
  font-size: ${TextSizes[5]};
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[5]};
  font-style: normal;
  color: ${COLORS.UI.White};
`

export const StyledLabelHeadingWhiteBold = styled.div`
  font-size: ${TextSizes[5]};
  font-weight: ${TextWeight[3]};
  line-height: ${SIZES[5]};
  font-style: normal;
  color: ${COLORS.UI.White};
`

export const StyledLabelBrandLarge = styled.div`
  font-size: ${TextSizes[12]};
  font-weight: ${TextWeight[3]};
  line-height: ${SIZES[9]};
  font-style: normal;
  color: ${COLORS.UI.White};
`

export const StyledLabelBrand = styled.div`
  font-size: ${TextSizes[4]};
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[5]};
  font-style: normal;
  color: ${COLORS.UI.White};
`

export const StyledLabelPageHeading = styled.div`
  font-size: ${TextSizes[10]};
  font-weight: ${TextWeight[3]};
  line-height: ${SIZES[8]};
  font-style: normal;
  color: ${COLORS.UI.NeutralText};
`
export const StyledLabelHeadingBold = styled.div`
  font-style: normal;
  font-weight: ${TextWeight[3]};
  font-size: ${TextSizes[4]};
  line-height: ${SIZES[4]};
  color: ${COLORS.UI.Brand3};
`

export const StyledLabelUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  color: ${COLORS.UI.PrimaryText};
  font-size: ${TextSizes[3]};
  font-weight: ${TextWeight[0]};
  line-height: ${SIZES[4]};
  font-style: normal;
`

export const StyledLabelHeader = styled.div`
  font-style: normal;
  font-weight: ${FontWeights.Bold};
  font-size: ${FontSizes.Caption};
  line-height: ${TextSizes[2]};
  color: ${COLORS.Text.Neutral};
`

export const WDLabel = ({ children }: labelProps) => {
  return <StyledLabel>{children}</StyledLabel>
}

export const WDLabelHeader = ({ children }: labelProps) => {
  return <StyledLabelHeader>{children}</StyledLabelHeader>
}

export const WDLabelUser = ({ children }: labelProps) => {
  return <StyledLabelUser>{children}</StyledLabelUser>
}

export const WDLabelGray = ({ children }: labelProps) => {
  return <StyledLabelGray>{children}</StyledLabelGray>
}

export const WDLabelGrayBold = ({ children }: labelProps) => {
  return <StyledLabelGrayBold>{children}</StyledLabelGrayBold>
}

export const WDLabelPrimary = ({ children }: labelProps) => {
  return <StyledLabelPrimary>{children}</StyledLabelPrimary>
}

export const WDFormLabelHeading = ({ children }: labelProps) => {
  return <StyledFormLabelHeading>{children}</StyledFormLabelHeading>
}

export const WDLabelFooter = ({ children }: labelProps) => {
  return <StyledLabelFooter>{children}</StyledLabelFooter>
}
export const WDLabelBrandBold = ({ children }: labelProps) => {
  return <StyledLabelHeadingBold>{children}</StyledLabelHeadingBold>
}

export const WDLabelFooterGray = ({ children }: labelProps) => {
  return <StyledLabelFooterGray>{children}</StyledLabelFooterGray>
}

export const WDLabelHeadingWhite = ({ children }: labelProps) => {
  return <StyledLabelHeadingWhite>{children}</StyledLabelHeadingWhite>
}

export const WDLabelHeadingWhiteBold = ({ children }: labelProps) => {
  return <StyledLabelHeadingWhiteBold>{children}</StyledLabelHeadingWhiteBold>
}

export const WDLabelBrandLarge = ({ children }: labelProps) => {
  return <StyledLabelBrandLarge>{children}</StyledLabelBrandLarge>
}

export const WDLabelBrand = ({ children }: labelProps) => {
  return <StyledLabelBrand>{children}</StyledLabelBrand>
}

export const WDLabelPageHeading = ({ children }: labelProps) => {
  return <StyledLabelPageHeading>{children}</StyledLabelPageHeading>
}

export const WDHorizontalDivider = () => {
  return (
    <Divider
      horizontal={true}
      thickness={'0.0625rem'}
      bgColor={COLORS.Border.Gray50}
    />
  )
}
