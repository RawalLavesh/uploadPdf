export interface FinancialSummaryWidgetsProps {
  type: string
  title: string
  totalHouseholdValue?: string
  todaysGainOrLossValue?: string
  todaysGainOrLossPct?: string
  rateOfReturnPct?: string
  projectedIncomeValue?: string
  isValueDown?: boolean
  hasBorder?: boolean
  gap?: string
}
