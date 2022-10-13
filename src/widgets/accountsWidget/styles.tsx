import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const RootContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  background-color: ${COLORS.Background.Primary};
`
export const LabelWrap = styled.div`
  padding: 8px 16px 4px 16px;
`
export const SubWrapper = styled.div`
  padding-bottom: 16px;
`
export const StyledAccountContainer = styled.div``
export const AccountBalanceWrapperOne = styled.div`
  display: flex;
  background: ${COLORS.Background.NeutralWeak};
  justify-content: space-between;
  white-space: pre;
  gap: 16px;
  border-bottom: 1px solid ${COLORS.Background.Border};
  &:last-child {
    border: none;
  }
`
export const AccountBalanceWrapperTwo = styled.div`
  display: flex;
  background: ${COLORS.Background.NeutralWeak};
  justify-content: space-between;
  white-space: pre;

  gap: 16px;
  border-bottom: 1px solid ${COLORS.Background.Border};
  &:last-child {
    border: none;
  }
`
export const AccountsBlock = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.Background.Border};
  &:last-child {
    border: none;
  }
`
export const AccountWrapper = styled.div`
  flex: 2;
`
export const InnerWrapper = styled.div`
  display: flex;
  gap: 16px;
  p {
    :nth-child(1) {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
    :nth-child(2) {
      font-weight: 700;
      font-size: 20px;
      line-height: 32px;
    }
  }
`
export const TotalAccountWrapper = styled.div`
  p {
    &.accountTitle {
      font-size: 18px;
    }
  }
`
export const ButtonWrapper = styled.div`
  flex: 1;
  justify-content: end;
  display: flex;
`
export const MoreButtonWrapper = styled.div`
  background: ${COLORS.Background.Primary};
  border: 1px solid ${COLORS.Background.StrongBackgound};
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  position: absolute;
  white-space: pre;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 28px;
  margin-left: 11px;
  border-bottom: 1px solid ${COLORS.Background.StrongBackgound};
`

export const StyledSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const StyledDropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`
export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 8px;
  position: relative;
  z-index: 1;
`
