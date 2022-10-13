import styled, { css } from 'styled-components'
import { SIZES, TextSizes, TextWeight, TextAlign } from '../../theme/Sizes'
import { COLORS } from '../../theme/Colors'

interface cardProps {
  children?: React.ReactNode
  isCollapsed?: boolean
}

export const StyledCard = styled.div`
  // padding: ${SIZES[2]} ${SIZES[4]};
  gap: ${SIZES[1]};
  /* background: ${COLORS.UI.BackgroundStrong}; */
  // background-color: ${({ isCollapsed }: cardProps) =>
    isCollapsed ? '#ffffff' : COLORS.UI.BackgroundStrong};
  box-shadow: ${({ isCollapsed }: cardProps) =>
    isCollapsed
      ? '0px 2px 6px -2px rgba(0, 36, 93, 0.3)'
      : '0px 8px 16px -8px rgba(0, 36, 93, 0.3)'};
  border-radius: ${({ isCollapsed }: cardProps) =>
    isCollapsed ? `${SIZES[1]}` : `${SIZES[1]} ${SIZES[1]} 0px 0px`};
  border: 1px solid ${COLORS.Background.StrongBackgound};
`
export const StyledCollapsedCard = styled.div`
  padding: ${SIZES[2]} ${SIZES[4]};
  gap: ${SIZES[1]};
  background: ${COLORS.Background.Primary};
  border-radius: ${SIZES[1]} ${SIZES[1]} 0px 0px;
`
export const StyledCardList = styled.div`
  font-size: ${TextSizes[2]};
  line-height: ${TextSizes[5]};
  color: ${COLORS.Text.Neutral};
  font-weight: ${TextWeight[0]};
`
export const StyledCardListTitle = styled.div`
  font-size: ${TextSizes[3]};
  line-height: ${TextSizes[5]};
  color: ${COLORS.Text.Neutral};
  font-weight: ${TextWeight[3]};
`
export const StyledCardSubTitleCenter = styled.div`
  font-size: ${TextSizes[6]};
  line-height: ${TextSizes[7]};
  color: ${COLORS.Text.Neutral};
  font-weight: ${TextWeight[3]};
  text-align: ${TextAlign[2]};
`
export const StyledCardSubTitleForm = styled.div`
  font-size: ${TextSizes[6]};
  line-height: ${TextSizes[6]};
  color: ${COLORS.Text.Neutral};
  font-weight: ${TextWeight[3]};
  text-align: ${TextAlign[2]};
`
export const StyledCardTitle = styled.div`
  font-size: ${TextSizes[9]};
  line-height: ${TextSizes[10]};
  color: ${COLORS.Text.Neutral};
  font-weight: ${TextWeight[3]};
`

export const StyledCardSubTitle = styled.div`
  font-size: ${TextSizes[2]};
  line-height: ${TextSizes[5]};
  color: ${COLORS.Text.NeutralTextWeak};
  font-weight: ${TextWeight[0]};
`
export const StyledDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  padding-right: 8px;
  flex: 1;
`
export const StyledFinancialCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES[1]};
  background: ${COLORS.Background.Primary};
  border: 1px solid ${COLORS.UI.Border};
  border-radius: ${SIZES[1]};
  box-shadow: 0px, 8px rgba(0, 36, 93, 0.3);
  padding: ${SIZES[1]} ${SIZES[3]};
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  align-items: stretch;
  width: 30%;
`
export const StyledDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`
export const StyledFinancialWidgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`
export const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: flex-end;
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  transform: matrix(1, 0, 0, 1, 0, 0);
`
export const WDCollapsedCard = styled.div`
  background-color: ${({ isCollapsed }: cardProps) =>
    !isCollapsed ? '#ffffff' : COLORS.UI.BackgroundStrong};
`
export const StyledCardBlue = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  border-radius: ${SIZES[1]};
  background: ${COLORS.Background.NeutralMedium};
  padding: ${SIZES[1]} ${SIZES[3]};
`
export const StyledCardBlueTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: ${SIZES[1]};
  background: ${COLORS.Background.NeutralMedium};
  padding: ${SIZES[1]} ${SIZES[3]};
`
export const StyledCardBlueBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: ${SIZES[1]};
  background: ${COLORS.Background.NeutralMedium};
  padding: ${SIZES[1]} ${SIZES[3]};
`
export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${COLORS.Background.PrimaryText};
  border-radius: ${SIZES[1]} ${SIZES[1]} 0px 0px;
  padding: ${SIZES[2]} ${SIZES[3]};
`
export const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SIZES[3]} ${SIZES[4]};
  background: ${COLORS.Background.White};
`
export const StyledCardContentRound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SIZES[3]} ${SIZES[4]};
  background: ${COLORS.Background.White};
  border-radius: 0px 0px ${SIZES[1]} ${SIZES[1]};
`
export const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${COLORS.Background.White};
  border-radius: 0px 0px ${SIZES[1]} ${SIZES[1]};
  padding: ${SIZES[3]} ${SIZES[4]};
`
export const WDCard = ({ isCollapsed, children }: cardProps) => {
  return <StyledCard isCollapsed={isCollapsed}>{children}</StyledCard>
}

export const WDCardBlue = ({ children }: cardProps) => {
  return <StyledCardBlue>{children}</StyledCardBlue>
}

export const WDCardBlueTop = ({ children }: cardProps) => {
  return <StyledCardBlueTop>{children}</StyledCardBlueTop>
}

export const WDCardBlueBottom = ({ children }: cardProps) => {
  return <StyledCardBlueBottom>{children}</StyledCardBlueBottom>
}

export const WDCardHeader = ({ children }: cardProps) => {
  return <StyledCardHeader>{children}</StyledCardHeader>
}

export const WDCardContent = ({ children }: cardProps) => {
  return <StyledCardContent>{children}</StyledCardContent>
}

export const WDCardContentRound = ({ children }: cardProps) => {
  return <StyledCardContentRound>{children}</StyledCardContentRound>
}

export const WDCardFooter = ({ children }: cardProps) => {
  return <StyledCardFooter>{children}</StyledCardFooter>
}
