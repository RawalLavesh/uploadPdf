export interface HouseholdFixedIncomeInterface {
  itemNumber: string
  description: string
  currentValue: string
  percentage: string
}

export const defaultHouseholdFixedIncome: HouseholdFixedIncomeInterface = {
  itemNumber: '',
  description: '',
  currentValue: '',
  percentage: '',
}
