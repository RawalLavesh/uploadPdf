export interface StatsInterface {
  open: string
  volume: string
  high: string
  avgVolume: string
  low: string
  marketCap: string
}

export const defaultStats: StatsInterface = {
  open: '',
  volume: '',
  high: '',
  avgVolume: '',
  low: '',
  marketCap: '',
}
