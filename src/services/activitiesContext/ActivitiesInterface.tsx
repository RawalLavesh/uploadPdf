export interface ByAccountInterface {
  accountNumber: string
  accountName: string
  accountType: string
  lineItemNumber: string
  date: string
  action: string
  category: string
  quantity: string
  cusip?: string
  tickerSymbol?: string
  transactionDescription: string
  amount: string
  cashOrMargin: string
}

export const defaultByAccount: ByAccountInterface = {
  accountNumber: '',
  accountName: '',
  accountType: '',
  lineItemNumber: '',
  date: '',
  action: '',
  category: '',
  quantity: '',
  cusip: '',
  tickerSymbol: '',
  transactionDescription: '',
  amount: '',
  cashOrMargin: '',
}
export interface AccountSummaryInterface {
  accountNumber: string
  netCashFlow: string
}

export const defaultAccountSummary: AccountSummaryInterface = {
  accountNumber: '',
  netCashFlow: '',
}
export interface ActivitiesInterface {
  clientId: string
  netCashFlow: string
  asOfDateTime: string
  accountSummary: AccountSummaryInterface[]
  byAccount: ByAccountInterface[]
}

export const defaultActivities: ActivitiesInterface = {
  clientId: '',
  netCashFlow: '',
  asOfDateTime: '',
  accountSummary: [defaultAccountSummary],
  byAccount: [defaultByAccount],
}
