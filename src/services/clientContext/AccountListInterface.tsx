export interface AccountListInterface {
  accountNumber: string
  accountName: string
  accountType: string
  accountBalance: string
  cashTotal: string
  cashValue: string
  FDICSweep: string
  margin: string
  marketValue: string
  longMarketValue: string
  shortMarketValue: string
  todayGainLossValue: string
  todayGainLossValuePct: string
  isTodaysGainLossValueDown: boolean
  totalGainLossPct: string
  totalGainLossValue: string
  isTotalGainLossValueDown: string
  taxable: boolean
}
export const defaultAccountList: AccountListInterface = {
  accountNumber: '',
  accountName: '',
  accountType: '',
  accountBalance: '',
  cashTotal: '',
  cashValue: '',
  FDICSweep: '',
  margin: '',
  marketValue: '',
  longMarketValue: '',
  shortMarketValue: '',
  todayGainLossValue: '',
  todayGainLossValuePct: '',
  isTodaysGainLossValueDown: false,
  totalGainLossPct: '',
  totalGainLossValue: '',
  isTotalGainLossValueDown: '',
  taxable: false,
}
