import styled from 'styled-components'

import { Colors, Backgrounds } from '../../shared/styles'
import { FinancialSummaryWidgetsProps } from './IFinancialSummaryWidgets'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding: 8px 16px;
  background: ${Backgrounds.White};
  border: ${(props: FinancialSummaryWidgetsProps) =>
    props.hasBorder ? `1px solid ${Colors.Gray30}` : `0`};
  box-sizing: border-box;
  box-shadow: ${(props: FinancialSummaryWidgetsProps) =>
    props.hasBorder && `0px 8px 16px -8px rgba(0, 36, 93, 0.3)`};
  border-radius: 8px;
  background-color: ${Colors.Gray05};
  white-space: nowrap;
  gap: ${(props: FinancialSummaryWidgetsProps) => props.gap};
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 12px;
`

export const TodaysGainLossPctWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 4px;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  transform: matrix(1, 0, 0, 1, 0, 0);
`
