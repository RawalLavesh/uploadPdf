import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
`
export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  button {
    width: 416px;
    height: 72px;
    border: 1px solid ${COLORS.Background.Border};
    border-radius: 8px;

    padding: 0px 16px;
    padding: 10px 16px;
    //background: ${COLORS.Background.Primary};

    text-align: center;
  }
`
export const CombinedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`
export const CombinedDropdownWrapper = styled.div`
  position: relative;
`
export const GeneralInvestmentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: space-between;
  padding: 16px 24px;
  //border-bottom:1px solid #CBD5E1;
  cursor: pointer;
`
export const SingleAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 16px 24px 24px 24px;
  gap: 8px;
  justify-content: space-between;
  cursor: pointer;
`
export const StyledLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #475569;
`
export const StyledAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const FirstRowWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`
export const AccountListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //padding:16px;
  background: #ffffff;
  border: 1px solid ${COLORS.Background.Border};
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  position: absolute;
  top: 74px;
  z-index: 1;
  width: 416px;
`
export const CombinedOrderTypeWrapper = styled.div`
  position: relative;
`
export const OrderTypeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid #d0d7e2;
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  position: absolute;
  top: 100px;
  z-index: 1;
  width: 416px;
`
export const CombinedTooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const OrderTypeListItemsWrapper = styled.div`
  cursor: pointer;
  padding: 16px 24px;
  border-bottom: 1px solid #e2e8f0;
  width: 100%;
`
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const AccountsLabel = styled.div`
  display: flex;
  flex-direction: row;
`
export const CashLabel = styled.div`
  display: flex;
  flex-direction: row;
`
export const AccountTypeCashWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  &.selectedCash {
    background-color: ${COLORS.Background.NeutralBorder};
  }
`
export const AccountTypeMarginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  &.selectedMargin {
    background-color: ${COLORS.Background.NeutralBorder};
  }
`
export const CashMarginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  p:first-child {
    text-align: center;
  }
`
export const CombinedAccountTypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`
export const CombinedLabelWrapper = styled.div`
  display: flex;
  gap: 4px;
`
export const ButtonLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledDiv = styled.div``

export const ChevronLeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const AdvancedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  gap: 8px;
  cursor: pointer;

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #2563eb;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 416px;
  padding: 0px;
  gap: 8px;
  box-sizing: border-box;
  button {
    display: flex;
    flex-direction: row;
    padding: 24px 16px;
    width: 132px;
    height: 72px;
    border: 1px solid ${COLORS.Background.Border};
    border-radius: 8px;
  }
  p {
    text-align: center;
  }
`
export const SellShortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 416px;
  padding: 0px;
  gap: 8px;
  box-sizing: border-box;
  position: relative;
  button {
    display: flex;
    flex-direction: row;
    padding: 24px 16px;
    width: 132px;
    height: 72px;
    border: 1px solid ${COLORS.Background.Border};
    border-radius: 8px;
  }
  p {
    text-align: center;
  }
`
export const MarketOrderDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 24px 16px;
  width: 416px;
  height: 96px;
  background: ${COLORS.Background.Primary};
  border: 1px solid ${COLORS.Background.Border};
  border-radius: 8px;

  &.selectedOrderType {
    background-color: ${COLORS.Background.NeutralBorder};
  }
  button {
    border-color: transparent;
  }
`
