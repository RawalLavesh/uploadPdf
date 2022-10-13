import { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import {
  WDButton,
  WDPageButtonPrimary,
  WDPageButtonWhite,
} from '../../components/ui/WDButton'
import { IPaginator } from './IPaginator'
import { ButtonContainer, Pagination } from './styles'

const Paginator = ({
  pageSizeOptions,
  pageIndex,
  totalRecords,
  dataCallbackFn,
}: IPaginator) => {
  const [pageSize] = useState<number>(pageSizeOptions[0])
  const [pageCount, setPageCount] = useState<number>(
    Math.ceil(totalRecords / pageSize)
  )
  const [currentPageIndex, setPageIndex] = useState<number>(pageIndex)
  const [pagesToDisplay, setPagesToDisplay] = useState<number[]>([1])

  const getPagesToDisplay = () => {
    const pageArray = []
    let startingPage = Math.floor((currentPageIndex - 1) / 10) * 10 + 1
    for (let index = 0; index < Math.min(pageCount, 10); index++) {
      if (startingPage <= pageCount) {
        pageArray[index] = startingPage
        startingPage++
      }
    }
    return pageArray
  }

  const gotoPage = (pageIndex: number) => {
    setPageIndex(pageIndex)
    dataCallbackFn(pageIndex, pageSize)
  }

  const previousPage = () => {
    setPageIndex((currentPageIndex) => currentPageIndex - 1)
    dataCallbackFn(currentPageIndex - 1, pageSize)
  }

  const nextPage = () => {
    setPageIndex((currentPageIndex) => currentPageIndex + 1)
    dataCallbackFn(currentPageIndex + 1, pageSize)
  }

  const canPreviousPage = () => {
    return currentPageIndex > 1
  }

  const canNextPage = () => {
    return currentPageIndex < pageCount
  }

  useEffect(() => {
    setPageCount(Math.ceil(totalRecords / pageSize))
  }, [pageSize])

  useEffect(() => {
    setPagesToDisplay(getPagesToDisplay())
  }, [pageSize, currentPageIndex])

  return (
    <Pagination>
      <ButtonContainer>
        <WDButton>
          <Button
            onClick={() => gotoPage(1)}
            disabled={!canPreviousPage()}
            type={'button'}
          >
            {'<<'}
          </Button>
        </WDButton>
      </ButtonContainer>
      <ButtonContainer>
        <WDButton>
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage()}
            type={'button'}
          >
            {'Prev'}
          </Button>
        </WDButton>
      </ButtonContainer>
      {pagesToDisplay.map((pageValue, index) => {
        return (
          <ButtonContainer key={index}>
            {currentPageIndex === pageValue ? (
              <WDPageButtonPrimary>
                <Button onClick={() => gotoPage(pageValue)} type={'button'}>
                  {pageValue}
                </Button>
              </WDPageButtonPrimary>
            ) : (
              <WDPageButtonWhite>
                <Button onClick={() => gotoPage(pageValue)} type={'button'}>
                  {pageValue}
                </Button>
              </WDPageButtonWhite>
            )}
          </ButtonContainer>
        )
      })}
      <ButtonContainer>
        <WDButton>
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage()}
            type={'button'}
          >
            {'Next'}
          </Button>
        </WDButton>
      </ButtonContainer>
      <ButtonContainer>
        <WDButton>
          <Button
            onClick={() => gotoPage(pageCount)}
            disabled={!canNextPage()}
            type={'button'}
          >
            {'>>'}
          </Button>
        </WDButton>
      </ButtonContainer>
    </Pagination>
  )
}

export default Paginator
