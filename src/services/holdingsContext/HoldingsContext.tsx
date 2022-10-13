import React, { useState, createContext, useEffect } from 'react'
import { fetchApi } from '../http'
import {
  defaultFixedIncomeByAccount,
  FixedIncomeByAccountInterface,
} from './FixedIncomeByAccountInterface'
import { HoldingsInterface, defaultHoldings } from './HoldingsInterface'
import {
  defaultHouseholdFixedIncome,
  HouseholdFixedIncomeInterface,
} from './HouseholdFixedIncomeInterface'
import {
  defaultHouseholdOptions,
  HouseholdOptionsInterface,
} from './HouseholdOptionsInterface'
import {
  defaultHouseholdStocksAndRelated,
  HouseholdStocksAndRelatedInterface,
} from './HouseholdStocksAndRelatedInterface'
import {
  defaultOptionsByAccount,
  OptionsByAccountInterface,
} from './OptionsByAccountInterface'
import {
  defaultStocksAndRelatedByAccount,
  StocksAndRelatedByAccountInterface,
} from './StockAndRelatedByAccountInterface'

interface HoldingsContextInterface {
  holdings: HoldingsInterface
  householdStocksAndRelated: HouseholdStocksAndRelatedInterface
  stocksAndRelatedByAccount: StocksAndRelatedByAccountInterface
  householdOptions: HouseholdOptionsInterface
  householdFixedIncome: HouseholdFixedIncomeInterface
  fixedIncomeByAccount: FixedIncomeByAccountInterface
  optionsByAccount: OptionsByAccountInterface
  isLoading: boolean
  error: object | null
}

export const HoldingsContext = createContext<
  HoldingsContextInterface | undefined | null
>(undefined)

interface HoldingsCtxProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export const HoldingsContextProvider = ({
  children,
}: HoldingsCtxProviderProps) => {
  const [holdings, setHoldings] = useState(defaultHoldings)
  const [householdStocksAndRelated, setHouseholdStocksAndRelated] = useState(
    defaultHouseholdStocksAndRelated
  )
  const [stocksAndRelatedByAccount, setStocksAndRelatedByAccount] = useState(
    defaultStocksAndRelatedByAccount
  )
  const [householdOptions, setHouseholdOptions] = useState(
    defaultHouseholdOptions
  )
  const [householdFixedIncome, setHouseholdFixedIncome] = useState(
    defaultHouseholdFixedIncome
  )
  const [fixedIncomeByAccount, setFixedIncomeByAccount] = useState(
    defaultFixedIncomeByAccount
  )
  const [optionsByAccount, setOptionsByAccount] = useState(
    defaultOptionsByAccount
  )

  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null)

  useEffect(() => {
    async function retrieveHoldings() {
      setIsLoading(true)
      const data = await fetchApi('holdings')
      const holdingsData = data
      const householdStocksAndRelatedData = data.householdStocksAndRelated
      const stocksAndRelatedByAccountData = data.stocksAndRelatedByAccount
      const householdOptionsData = data.householdOptions
      const householdFixedIncomeData = data.householdFixedIncome
      const fixedIncomeByAccountData = data.fixedIncomeByAccount
      const optionsByAccountData = data.optionsByAccount

      setHoldings(holdingsData)
      setHouseholdStocksAndRelated(householdStocksAndRelatedData)
      setStocksAndRelatedByAccount(stocksAndRelatedByAccountData)
      setHouseholdOptions(householdOptionsData)
      setHouseholdFixedIncome(householdFixedIncomeData)
      setFixedIncomeByAccount(fixedIncomeByAccountData)
      setOptionsByAccount(optionsByAccountData)
      setIsLoading(true)
    }
    retrieveHoldings()
  }, [])

  return (
    <HoldingsContext.Provider
      value={{
        holdings,
        householdStocksAndRelated,
        stocksAndRelatedByAccount,
        householdOptions,
        householdFixedIncome,
        fixedIncomeByAccount,
        optionsByAccount,
        isLoading,
        error,
      }}
    >
      {children}
    </HoldingsContext.Provider>
  )
}
