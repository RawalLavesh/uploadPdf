import { useMemo } from 'react'
import { useTable } from 'react-table'
import {
  ReactTable,
  RootContainer,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TableWrapper,
} from '../previewLocateRequest/table/styles'
import { SpinnerWrapper } from '../reviewLocate/styles'
import { DateWrapper } from '../reviewLocate/styles'
import { InventoryResponseModel } from '../../shared/models/IInventoryPage'
import InventoryTableColumns from './InventoryColumns'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'
import { LottieWrapper } from '../submitLocate/styles'
import Paginator from '../paginator/Paginator'
import { ColumnDetails, TableOption } from './IInventoryPage'

export const InventoryTable = (props: {
  rowData: InventoryResponseModel[]
  isLoading?: boolean
  totalRecord: number
  initialState: TableOption
  updateTableCallbackFn: (pageIndex: number, pageSize: number) => void
}) => {
  const data: InventoryResponseModel[] = useMemo(
    () => props.rowData,
    [props.rowData]
  )
  const columns = useMemo<ColumnDetails[]>(
    () => InventoryTableColumns,
    []
  ) as []
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({ columns, data })

  const getData = (pageIndex: number, pageSize: number) => {
    props.updateTableCallbackFn(pageIndex, pageSize)
  }

  return (
    <RootContainer>
      {props.isLoading && (
        <SpinnerWrapper>
          <LottieWrapper>
            <Lottie animationData={Loader} loop={true} />
          </LottieWrapper>
        </SpinnerWrapper>
      )}
      {!props.isLoading && (
        <>
          {data.length > 0 ? (
            <>
              <ReactTable>
                <TableWrapper {...getTableProps()}>
                  <TableHead>
                    {headerGroups.map((headerGroup, index) => (
                      <TableRow
                        {...headerGroup.getHeaderGroupProps()}
                        key={index}
                      >
                        {headerGroup.headers.map((column, index) => (
                          <TableHeaderCell
                            {...column.getHeaderProps()}
                            key={index}
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
                            return index == 0 ? (
                              <TableDataCell {...cell.getCellProps()}>
                                {props.initialState.pageSize *
                                  (props.initialState.pageIndex - 1) +
                                  rowIndex +
                                  1}
                              </TableDataCell>
                            ) : (
                              <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                              </td>
                            )
                          })}
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </TableWrapper>
              </ReactTable>
              <Paginator
                totalRecords={props.totalRecord}
                pageIndex={props.initialState.pageIndex}
                pageSizeOptions={[props.initialState.pageSize]}
                dataCallbackFn={getData}
              />
            </>
          ) : (
            <DateWrapper>{'No Data available'}</DateWrapper>
          )}
        </>
      )}
    </RootContainer>
  )
}
