import React from 'react'
import { StyledPanelWrapper } from './styles'
import FinancialSummaryCard from './FinancialSummaryCard'
import { HouseholdDataPanel } from '../../widgets/financialSummaryWidget/householdDataPanel/HouseholdDataPanel'
import { GainLossDataPanel } from '../../widgets/financialSummaryWidget/gainLossDataPanel/GainLossDataPanel'

const FinancialSummaryPanel = (props: {
  totalValue: string
  gainLoss: string
  gainLossPct: string
  isDown: boolean
}) => {
  return (
    <StyledPanelWrapper>
      <FinancialSummaryCard title="Total Household Value">
        <HouseholdDataPanel totalValue={props.totalValue} />
      </FinancialSummaryCard>
      <FinancialSummaryCard title="Total Household Value">
        <GainLossDataPanel
          gainLoss={props.gainLoss}
          gainLossPct={props.gainLossPct}
          isLoss={props.isDown}
        />
      </FinancialSummaryCard>
    </StyledPanelWrapper>
  )
}

export default FinancialSummaryPanel
