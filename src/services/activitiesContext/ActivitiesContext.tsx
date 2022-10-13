import React, { useState, createContext, useEffect } from 'react'
import { fetchApi } from '../http'

import {
  AccountSummaryInterface,
  ActivitiesInterface,
  ByAccountInterface,
  defaultAccountSummary,
  defaultActivities,
  defaultByAccount,
} from './ActivitiesInterface'

export interface ActivitiesContextInterface {
  activities: ActivitiesInterface
  accountSummary: AccountSummaryInterface
  byAccount: ByAccountInterface
  isLoading: boolean
  error: object | null
}

export const ActivitiesContext = createContext<
  ActivitiesContextInterface | undefined
>(undefined)

interface ActivitiesCtxProviderProps {
  children: React.ReactNode | React.ReactNode[] | null
}

export const ActivitiesContextProvider = ({
  children,
}: ActivitiesCtxProviderProps) => {
  const [activities, setActivities] = useState(defaultActivities)
  const [accountSummary, setAccountSummary] = useState(defaultAccountSummary)
  const [byAccount, setByAccount] = useState(defaultByAccount)
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null)

  useEffect(() => {
    async function retrieveActivities() {
      setIsLoading(true)
      const data = await fetchApi('activities')
      const activitiesData = data
      const accountSummaryData = data.accountSummary
      const byAccountData = data.byAccount

      setActivities(activitiesData)
      setAccountSummary(accountSummaryData)
      setByAccount(byAccountData)
      setIsLoading(true)
    }
    retrieveActivities()
  }, [])

  return (
    <ActivitiesContext.Provider
      value={{ activities, accountSummary, byAccount, isLoading, error }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}
