import React, { useState, createContext, useEffect } from 'react'
import { fetchApi } from '../http'

import {
  DocumentsInterface,
  SelectedDocumentInterface,
  SelectedFiltersInterface,
  defaultDateRangeLookupOutput,
  defaultFindTradeConfirmationInput,
  defaultFindTradeConfirmationOutput,
  defaultSearchByDateRangeInput,
  defaultSearchByDateRangeOutput,
  defaultDateRangeLookupInput,
  defaultStockSearchOutput
} from './DocumentsInterface'
interface DocumentContextInterface {
  documents: DocumentsInterface
  selectedFilters: SelectedFiltersInterface
  setDocumentFilters: setDocumentFiltersFunc
  selectedDocument: SelectedDocumentInterface
  setDocumentSelected: setDocumentSelectedFunc
  //resetDocumentFilter: DefaultDocumentsInterface | undefined
  isLoading: boolean
  error: object | null
}



export const DocumentContext = createContext<
  DocumentContextInterface | undefined | null
>(undefined)

interface DocumentsCtxProviderProps {
  children: React.ReactNode | React.ReactNode[]
}
interface setDocumentFiltersFunc {
  (value: any): undefined | void
}

interface setDocumentSelectedFunc {
  (value: any): void | undefined
}

export const DocumentsContextProvider = ({
  children,
}: DocumentsCtxProviderProps) => {
  const [documents, setDocuments] = useState<DocumentsInterface>({
    clientID: '',
    categoryId: '',
    categoryName: '',
    dateRangeLookupInput:defaultDateRangeLookupInput,
    dateRangeLookupOutput: defaultDateRangeLookupOutput,
    findTradeConfirmationInput:defaultFindTradeConfirmationInput,
    findTradeConfirmationOutput:defaultFindTradeConfirmationOutput,
    searchByDateRangeInput:defaultSearchByDateRangeInput,
    searchByDateRangeOutput:defaultSearchByDateRangeOutput,
    stockSearchOutput: defaultStockSearchOutput,   
    search: { monList: [], monthList: [], yearList: [] },
  })
  const [selectedDocument, setSelectedDocument] =
    useState<SelectedDocumentInterface>({
      mon: 0,
      year: '',
      accountNumber: '',
      filePath: '',
    })
  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFiltersInterface>({
      month: '',
      year: '',
      accountNumber: '',
    })
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    async function retrieveDocumentData() {
      setIsLoading(true)

      const data = await fetchApi('documents')
      console.log('Doc..', data)

      if (isMounted) {
        setDocuments(data)
      }
    }
    retrieveDocumentData()

    setIsLoading(false)
    return () => {
      isMounted = false
    }
  }, [])

  function setDocumentSelected(document: any) {
    setSelectedDocument(document)
  }

  function setDocumentFilters(filters: any) {
    setSelectedFilters({ ...filters })
  }

  function resetDocumentFilter() {
    // setDocumentFilters(defaultDocuments)
  }

  return (
    <DocumentContext.Provider
      value={{
        documents,
        selectedFilters,
        setDocumentFilters,
        selectedDocument,
        setDocumentSelected,
        //resetDocumentFilter,
        isLoading,
        error,
      }}
    >
      {children}
    </DocumentContext.Provider>
  )
}
