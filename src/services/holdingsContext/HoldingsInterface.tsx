export interface HoldingsInterface {
  clientId: string
  totalGainLossValue: string
  totalGainLossPct: string
  totalHouseholdValue: string
  todayGainLossValue: string
  todayGainLossPct: string
  isTodaysGainLossValueDown: boolean
  isTotalGainLossValueDown: boolean
  cashTotal: string
  cashValue: string
  FDICSweep: string
  margin: string
  marketValue: string
  asOfDateTime: string
}

export const defaultHoldings: HoldingsInterface = {
  clientId: '',
  totalGainLossValue: '',
  totalGainLossPct: '',
  totalHouseholdValue: '',
  todayGainLossValue: '',
  todayGainLossPct: '',
  isTodaysGainLossValueDown: false,
  isTotalGainLossValueDown: false,
  cashTotal: '',
  cashValue: '',
  FDICSweep: '',
  margin: '',
  marketValue: '',
  asOfDateTime: '',
}
