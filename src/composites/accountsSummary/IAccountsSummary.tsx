export interface AccountsSummaryProps {
  type: string
  value?: string
  TodaysGainLossVlu?: string
  TodaysGainLossPct?: string
  isTodaysGainLossValueDown?: boolean
  TotalUnrealizedGainLossVlu?: string
  TotalUnrealizedGainLossPct?: string
  isTotalGainLossValueDown?: boolean
  cashVlu?: string
  marginVlu?: string
  isMarginVluDown?: boolean
  marketVlu?: string
  label?: string
}
