interface SummaryByMonthInterface {
  month: string
  interest: string
  dividends: string
  totalIncome: string
  year: string
}

const defaultSummaryByMonth: SummaryByMonthInterface = {
  month: '',
  interest: '',
  dividends: '',
  totalIncome: '',
  year: '',
}

interface DetailsByMonthInterface {
  year: string
  month: string
  cusip: string
  tickerSymbol: string
  description: string
  dividends: string
  totalIncome: string
  payDate: string
  frequency: string
  reinvestment: boolean
  paymentPending: boolean
}

export const defaultDetailsByMonth: DetailsByMonthInterface = {
  year: '',
  month: '',
  cusip: '',
  tickerSymbol: '',
  description: '',
  dividends: '',
  totalIncome: '',
  payDate: '',
  frequency: '',
  reinvestment: true,
  paymentPending: true,
}

export interface ProjectedIncomeInterface {
  totalIncomeForNext12Months: string
  asOfDateTime: string
  summaryByMonth: SummaryByMonthInterface
  detailByMonth: DetailsByMonthInterface
}

export const defaultProjectedIncome: ProjectedIncomeInterface = {
  totalIncomeForNext12Months: '',
  summaryByMonth: defaultSummaryByMonth,
  detailByMonth: defaultDetailsByMonth,
  asOfDateTime: '',
}
