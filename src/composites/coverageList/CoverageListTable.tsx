import { useMemo } from 'react'
import { useTable } from 'react-table'
import CoverageTableColumns from './CoverageTableColumns'
import {
  ReactTable,
  RootContainer,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableWrapper,
  TableRow,
} from '../previewLocateRequest/table/styles'
import { SpinnerWrapper } from './styles'
import Loader from '../../assets/lottiefiles/loader.json'
import Lottie from 'lottie-react'
import { LottieWrapper } from '../submitLocate/styles'
import { ColumnDetails } from '../inventoryPage/IInventoryPage'
import {
  ReviewTable,
  ReviewTableProps,
} from '../../shared/models/ICoverageList'
import EmptyState from '../emptyState/EmptyState'

export const CoverageListTable = ({
  rowData,
  isLoading,
  pageIndex,
  pageSize,
}: ReviewTableProps) => {
  const data: ReviewTable[] = useMemo(() => rowData, [rowData])
  const columns = useMemo<ColumnDetails[]>(() => CoverageTableColumns, []) as []
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <RootContainer>
      {isLoading && (
        <SpinnerWrapper>
          <LottieWrapper>
            <Lottie animationData={Loader} loop={true} />
          </LottieWrapper>
        </SpinnerWrapper>
      )}
      {!isLoading && (
        <>
          {data.length > 0 ? (
            <ReactTable>
              <TableWrapper {...getTableProps()}>
                <TableHead>
                  {headerGroups.map((headerGroup, index) => (
                    <TableRow
                      {...headerGroup.getHeaderGroupProps()}
                      key={index}
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
                  {rows.map((row, rowIndex) => {
                    prepareRow(row)
                    return (
                      <TableRow {...row.getRowProps()} key={rowIndex}>
                        {row.cells.map((cell, index) => {
                          return index == 1 ? (
                            <TableDataCell {...cell.getCellProps()}>
                              {pageSize * (pageIndex - 1) + rowIndex + 1}
                            </TableDataCell>
                          ) : index == 0 ? (
                            <TableDataCell
                              className={
                                cell.column.Header === 'More'
                                  ? cell.value
                                  : undefined
                              }
                              {...cell.getCellProps()}
                            ></TableDataCell>
                          ) : (
                            <TableDataCell
                              className={
                                cell.column.Header === 'Status'
                                  ? cell.value
                                  : undefined
                              }
                              {...cell.getCellProps()}
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
          ) : (
            <EmptyState />
          )}
        </>
      )}
    </RootContainer>
  )
}
