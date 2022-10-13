import { defaultStats, StatsInterface } from './StatsInterface'

export interface HouseholdStocksAndRelatedInterface {
  itemNumber: string
  cusip: string
  tickerSymbol: string
  description: string
  quantity: number
  unitCostBasis: string
  lastPrice: string
  todaysGainLoss: string
  todaysGainLossPct: string
  currentValue: string
  costBasis: string
  totalGainLoss: string
  totalGainLossPct: string
  portfolioDiversityPct: string
  security24hrValueChange: string
  security24hrPctChange: string
  isTodaysGainLossDown: boolean
  isTotalGainLossDown: boolean
  isSecurityValueDown: boolean
  stats: StatsInterface
}

export const defaultHouseholdStocksAndRelated: HouseholdStocksAndRelatedInterface =
  {
    itemNumber: '',
    cusip: '',
    tickerSymbol: '',
    description: '',
    quantity: 0,
    unitCostBasis: '',
    lastPrice: '',
    todaysGainLoss: '',
    todaysGainLossPct: '',
    currentValue: '',
    costBasis: '',
    totalGainLoss: '',
    totalGainLossPct: '',
    portfolioDiversityPct: '',
    security24hrValueChange: '',
    security24hrPctChange: '',
    isTodaysGainLossDown: false,
    isTotalGainLossDown: false,
    isSecurityValueDown: false,
    stats: defaultStats,
  }
