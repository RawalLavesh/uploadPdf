export interface HouseholdSummaryInterface {
  totalHouseholdValue: string
  totalGainLossValue: string
  totalGainLossPct: string
  isTodaysGainLossValueDown: boolean
  todayGainLossValue: string
  todayGainLossPct: string
  isTotalGainLossValueDown: boolean
  cashTotal: string
  cashValue: string
  FDICSweep: string
  margin: string
  marketValue: string
  longMarketValue: string
  shortMarketValue: string
}

export const defaultHouseholdSummary: HouseholdSummaryInterface = {
  totalHouseholdValue: '',
  totalGainLossValue: '',
  totalGainLossPct: '',
  isTodaysGainLossValueDown: false,
  todayGainLossValue: '',
  todayGainLossPct: '',
  isTotalGainLossValueDown: false,
  cashTotal: '',
  cashValue: '',
  FDICSweep: '',
  margin: '',
  marketValue: '',
  longMarketValue: '',
  shortMarketValue: '',
}
