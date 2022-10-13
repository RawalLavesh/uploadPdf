export interface AccountProps {
  accountNumber?: string
  accountTitle: string
  totalAmount?: string
  valueChange?: string
  pctChange?: string
  isValueDown: boolean
  buttonTitle?: string
  onClick?: () => void
  chevronIcon?: string
  cashValue: string
  margin: string
  marketValue: string
}
