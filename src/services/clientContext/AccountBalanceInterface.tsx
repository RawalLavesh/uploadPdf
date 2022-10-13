import { AccountListInterface } from './AccountListInterface'

export interface AccountBalanceInterface {
  clientID: string
  retirement: string
  nonRetirement: string
  accountList: AccountListInterface[]
}
export const defaultAccountBalance: AccountBalanceInterface = {
  clientID: '',
  retirement: '',
  nonRetirement: '',
  accountList: [],
}
