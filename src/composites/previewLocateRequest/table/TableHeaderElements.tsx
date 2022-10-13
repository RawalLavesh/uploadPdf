import { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { usePagination, useTable } from 'react-table'
import TableColumns, { HeadersForSubmitLocate } from './TableColumns'
import {
  RootContainer,
  DetailsWrapper,
  DetailsContainer,
  ReactTable,
  TableHead,
  PreviewLocatesHeaderWrapper,
  CSVWrapper,
  ButtonWrapper,
  TableWrapper,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableDataCell,
  NoDataWrapper,
} from './styles'
import Button from '../../../components/button/Button'
import ExportCSV from '../../../utils/ExportCSV'
import { Icon } from '../../../components/icon/Icon'
import Label from '../../../components/label/Label'
import { DownloadWrapper } from '../../reviewLocate/styles'
import { ToastWrapper } from '../../submitLocate/styles'
import { Toast } from '../../../components/toast/Toast'
import { Icons } from '../../../shared/GlobalStyle'
import { ToolTipWrapper } from '../../individualRequest/styles'
import TooltipTop from '../../../components/toolTip/Tooltip'
import { ButtonContainer, Pagination } from '../../paginator/styles'
import { WDLabelPrimary } from '../../../components/ui/WDLabel'
import {
  WDButton,
  WDButtonGroup,
  WDButtonTransparent,
  WDPageButtonPrimary,
  WDPageButtonWhite,
} from '../../../components/ui/WDButton'
import { ColumnDetails } from '../../inventoryPage/IInventoryPage'
import { StockLocateResponse } from '../../../shared/models/ISubmitLocate'

export const CreateTable = (props: {
  rowData: StockLocateResponse[]
  totalLength: number
  validLength?: number
  invalidLength?: number
  deleteCallbackFn: (indexes: number[]) => void
  filterCallbackFn: (filterOption: string) => void
}) => {
  const data: StockLocateResponse[] = useMemo(
    () => props.rowData,
    [props.rowData]
  )
  const columns = useMemo<ColumnDetails[]>(() => TableColumns, []) as []
  const [currentFilterOption, setFilterOption] = useState<string>('All')
  const [currentActiveButton, setCurrentActiveButton] = useState<number>(1)
  const [selectedRowsIndex, setSelectedRowsIndex] = useState<number[]>([])
  const [isDeleted, setIsDeleted] = useState(false)
  const initialState = {
    pageSize: 50,
    pageIndex: 0,
  }
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data, initialState }, usePagination)

  const getPagesToDisplay = () => {
    const pageArray = []
    let startingPage = Math.floor(pageIndex / 10) * 10 + 1
    for (let index = 0; index < Math.min(pageCount, 10); index++) {
      if (startingPage <= pageCount) {
        pageArray[index] = startingPage
        startingPage++
      }
    }
    return pageArray
  }

  const handleRemoveFields = (index: number) => {
    if (!selectedRowsIndex.includes(index)) {
      selectedRowsIndex.push(index)
    } else {
      selectedRowsIndex.splice(selectedRowsIndex.indexOf(index), 1)
    }
    setSelectedRowsIndex([...selectedRowsIndex])
    setIsDeleted(false)
  }

  const handleDeleteRequests = () => {
    setIsDeleted(true)
    props.deleteCallbackFn(selectedRowsIndex)
    setSelectedRowsIndex([])
    setFilterOption('All')
  }

  const formatDate = (date: Date) => {
    const day = date.getDate().toString()
    const month = (date.getMonth() + 1).toString()
    const year = date.getFullYear().toString()
    return month.concat('-').concat(day).concat('-').concat(year)
  }

  const handleFilter = (filterOption: string) => {
    setFilterOption(filterOption)
    props.filterCallbackFn(filterOption)
  }

  useEffect(() => {
    getPagesToDisplay()
  }, [pageOptions])

  useEffect(() => {
    switch (currentFilterOption) {
      case 'All':
        setCurrentActiveButton(1)
        break
      case 'Valid':
        setCurrentActiveButton(2)
        break
      case 'Invalid':
        setCurrentActiveButton(3)
        break
    }
  }, [currentFilterOption])

  const PaginationBar = () => {
    return (
      <Pagination>
        <ButtonContainer>
          <WDButton>
            <Button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
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
              disabled={!canPreviousPage}
              type={'button'}
            >
              {'Prev'}
            </Button>
          </WDButton>
        </ButtonContainer>
        {getPagesToDisplay().map((pageValue, index) => {
          return (
            <ButtonContainer key={index}>
              {pageIndex === pageValue - 1 ? (
                <WDPageButtonPrimary>
                  <Button
                    onClick={() => gotoPage(pageValue - 1)}
                    type={'button'}
                  >
                    {pageValue}
                  </Button>
                </WDPageButtonPrimary>
              ) : (
                <WDPageButtonWhite>
                  <Button
                    onClick={() => gotoPage(pageValue - 1)}
                    type={'button'}
                  >
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
              disabled={!canNextPage}
              type={'button'}
            >
              {'Next'}
            </Button>
          </WDButton>
        </ButtonContainer>
        <ButtonContainer>
          <WDButton>
            <Button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              type={'button'}
            >
              {'>>'}
            </Button>
          </WDButton>
        </ButtonContainer>
      </Pagination>
    )
  }

  return (
    <RootContainer>
      <DetailsContainer>
        <PreviewLocatesHeaderWrapper>
          <ButtonWrapper>
            <WDButtonTransparent>
              <Button
                prefixedIcon={
                  <Icon
                    icon={
                      !selectedRowsIndex.length
                        ? Icons.DeleteIconGray
                        : Icons.DeleteIcon
                    }
                  />
                }
                onClick={handleDeleteRequests}
                disabled={!selectedRowsIndex.length}
                type={'button'}
              />
            </WDButtonTransparent>
          </ButtonWrapper>
          <ToolTipWrapper className="ToolTip">
            <TooltipTop
              width="22.4375rem"
              height="5.625rem"
              label={
                'This will delete only the selected row. Shift + Click allows you to select multiple rows.'
              }
            />
          </ToolTipWrapper>

          <DetailsWrapper>
            <WDButtonGroup activeButton={currentActiveButton}>
              <Button onClick={() => handleFilter('All')} type={'button'}>
                {`All ${props.totalLength.toLocaleString('en-US')}`}
              </Button>
              <Button onClick={() => handleFilter('Valid')} type={'button'}>
                {`Valid ${props.validLength?.toLocaleString('en-US')}`}
              </Button>
              <Button onClick={() => handleFilter('Invalid')} type={'button'}>
                {`Invalid ${props.invalidLength?.toLocaleString('en-US')}`}
              </Button>
            </WDButtonGroup>
          </DetailsWrapper>
          {props.rowData.length > 0 && (
            <CSVWrapper>
              <DownloadWrapper>
                <ExportCSV
                  csvData={props.rowData}
                  fileName={
                    'Preview Locates ' + formatDate(new Date()) + '.csv'
                  }
                  headers={HeadersForSubmitLocate}
                >
                  <Icon icon={Icons.DownloadIcon} />
                  <WDLabelPrimary>
                    <Label>{'Download'}</Label>
                  </WDLabelPrimary>
                </ExportCSV>
              </DownloadWrapper>
            </CSVWrapper>
          )}
        </PreviewLocatesHeaderWrapper>
      </DetailsContainer>
      {isDeleted && (
        <ToastWrapper>
          <Toast
            text={'Selected locates have been deleted'}
            type={'success'}
            openStatusCallback={(status: boolean) => setIsDeleted(status)}
          />
        </ToastWrapper>
      )}
      {data.length > 0 ? (
        <>
          <ReactTable>
            <TableWrapper {...getTableProps()}>
              <TableHead>
                {headerGroups.map((headerGroup, rowIndex) => (
                  <TableRow
                    {...headerGroup.getHeaderGroupProps()}
                    key={rowIndex}
                  >
                    {headerGroup.headers.map((column, columnIndex) => (
                      <TableHeaderCell
                        {...column.getHeaderProps()}
                        key={columnIndex}
                      >
                        {column.render('Header')}
                      </TableHeaderCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {page.map((row, rowIndex) => {
                  prepareRow(row)
                  return (
                    <TableRow
                      {...row.getRowProps()}
                      key={rowIndex}
                      onClick={() => handleRemoveFields(rowIndex)}
                      className={
                        selectedRowsIndex.includes(rowIndex) ? 'selected' : ''
                      }
                    >
                      {row.cells.map((cell, index) => {
                        return index == 0 ? (
                          <TableDataCell {...cell.getCellProps()}>
                            {pageSize * pageIndex + rowIndex + 1}
                          </TableDataCell>
                        ) : (
                          <TableDataCell
                            {...cell.getCellProps()}
                            className={
                              cell.column.Header === 'Reason' ? 'error' : ''
                            }
                          >
                            {cell.render('Cell')}
                          </TableDataCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </TableWrapper>
          </ReactTable>
          <PaginationBar />
        </>
      ) : (
        <NoDataWrapper>{'No Data available'}</NoDataWrapper>
      )}
    </RootContainer>
  )
}
