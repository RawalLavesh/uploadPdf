import React, { useState, createContext, useEffect } from 'react'
import { fetchApi } from '../http'

import {
  ProjectedIncomeInterface,
  defaultProjectedIncome,
} from './ProjectedIncomeInterface'

interface ProjectedContextInterface {
  projectedIncome: ProjectedIncomeInterface
  isLoading: boolean
  error: object | null
}

export const ProjectedIncomeContext = createContext<
  ProjectedContextInterface | undefined | null
>(undefined)

interface ProjectedIncomeCtxProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

export const ProjectedIncomeContextProvider = ({
  children,
}: ProjectedIncomeCtxProviderProps) => {
  const [projectedIncome, setProjectedIncome] = useState(defaultProjectedIncome)
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null)

  useEffect(() => {
    async function retrieveProjectedIncome() {
      setIsLoading(true)
      const data = await fetchApi('projectedIncome')
      const projectedIncomeData = data

      setProjectedIncome(projectedIncomeData)
      setIsLoading(true)
    }
    retrieveProjectedIncome()
  }, [])

  return (
    <ProjectedIncomeContext.Provider
      value={{ projectedIncome, isLoading, error }}
    >
      {children}
    </ProjectedIncomeContext.Provider>
  )
}
