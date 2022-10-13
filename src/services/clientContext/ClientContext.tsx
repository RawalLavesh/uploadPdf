import React, { useState, createContext, useEffect } from 'react'
import { fetchApi } from '../http'
import {
  AccountBalanceInterface,
  defaultAccountBalance,
} from './AccountBalanceInterface'
import {
  AccountListInterface,
  defaultAccountList,
} from './AccountListInterface'
import { AdvisorInterface, defaultAdvisor } from './AdvisorInterface'
import { ClientInterface, defaultClient } from './ClientInterface'
import {
  HouseholdSummaryInterface,
  defaultHouseholdSummary,
} from './HouseholdSummaryInterface'

export interface AccountDetailsInterface {
  accountNumber: string
  accountName: string
}

export interface MenuInterface {
  menuTitle: string
  isSelected: boolean
}

export interface MenuItemInterface {
  menuItemTitle: string
  isSelected: boolean
}

export interface ToggleSidebarInterface {
  value: boolean
}

interface setSelectedMenuFunc {
  (value: MenuInterface): void | MenuInterface | undefined
}
interface setSelectedMenuItemFunc {
  (value: MenuItemInterface): void | MenuItemInterface | undefined
}
interface SetSelectedAccountFunc {
  (value: AccountDetailsInterface): void | AccountDetailsInterface | undefined
}

interface setSelectedHoldingsFunc {
  (value: HouseholdSummaryInterface):
    | void
    | HouseholdSummaryInterface
    | undefined
}

export interface ClientContextInterface {
  client: ClientInterface
  householdSummary: HouseholdSummaryInterface
  accountBalance: AccountBalanceInterface
  accountList: AccountListInterface
  advisor: AdvisorInterface
  selectedAccount: AccountDetailsInterface | undefined
  setSelectedAccount: SetSelectedAccountFunc
  selectedHoldings: HouseholdSummaryInterface
  setSelectedHoldings: setSelectedHoldingsFunc
  selectedMenu: MenuInterface
  setSelectedMenu: setSelectedMenuFunc
  selectedMenuItem: MenuItemInterface
  setSelectedMenuItem: setSelectedMenuItemFunc
  isLoading: boolean
  setIsSideMenuOpen: (a: boolean) => void
  isSideMenuOpen: boolean
  error: object | null
}

export const ClientContext = createContext<
  ClientContextInterface | undefined | null
>(undefined)

interface ClientCtxProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export const ClientContextProvider = ({ children }: ClientCtxProviderProps) => {
  const [client, setClient] = useState(defaultClient)
  const [householdSummary, setHouseholdSummary] = useState(
    defaultHouseholdSummary
  )
  const [accountBalance, setAccountBalance] = useState(defaultAccountBalance)
  const [isLoading, setIsLoading] = useState(false)
  const [advisor, setAdvisor] = useState(defaultAdvisor)
  const [accountList, setAccountList] = useState(defaultAccountList)
  const [selectedAccount, setSelectedAccount] = useState<
    undefined | AccountDetailsInterface
  >({ accountNumber: 'all', accountName: 'All Accounts' })
  const [selectedHoldings, setSelectedHoldings] =
    useState<HouseholdSummaryInterface>(defaultHouseholdSummary)
  const [selectedMenu, setSelectedMenu] = useState<MenuInterface>({
    menuTitle: '',
    isSelected: false,
  })
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemInterface>({
    menuItemTitle: '',
    isSelected: false,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(true)
  useEffect(() => {
    async function retrieveClient() {
      setIsLoading(true)
      const data = await fetchApi('client')
      const clientData = data
      const householdSummaryData = data.householdSummary
      const accountBalance = data.accountBalance
      const advisor = data.advisor
      const accountList = data.accountBalance.accountList
      setClient(clientData)
      setHouseholdSummary(householdSummaryData)
      setAccountBalance(accountBalance)
      setAdvisor(advisor)
      setAccountList(accountList)
      setSelectedAccount({
        accountNumber: 'all',
        accountName: 'All Accounts',
      })
      setSelectedHoldings(householdSummaryData)
      setSelectedMenu({ menuTitle: '', isSelected: false })
      setSelectedMenuItem({ menuItemTitle: '', isSelected: false })
      setIsSideMenuOpen(true)
      setIsLoading(true)
    }
    retrieveClient()
  }, [])
  //Call Loader
  return (
    <ClientContext.Provider
      value={{
        client,
        householdSummary,
        advisor,
        accountList,
        accountBalance,
        selectedAccount,
        setSelectedAccount,
        selectedHoldings,
        setSelectedHoldings,
        selectedMenu,
        setSelectedMenu,
        selectedMenuItem,
        setSelectedMenuItem,
        isLoading,
        setIsSideMenuOpen,
        isSideMenuOpen,
        error,
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}
