export interface AccountProps {
  accountNumber?: string
  accountTitle: string
  totalAmount?: string
  valueChange?: string
  pctChange?: string
  isValueDown: boolean
  buttonTitle: string
  onClick?: () => void
  haveButtons?: boolean
  holdingsButtonHandler?: () => void
  activityButtonHandler?: () => void
  titleNavigationHandler?: () => void
  isCollapsed?: boolean
  dropdownItemsArray?: string[]
  showOptions?: boolean
}
