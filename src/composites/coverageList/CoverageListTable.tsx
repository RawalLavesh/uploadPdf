import { useContext, useEffect, useMemo, useRef, useState } from 'react'
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
import {
  DropdownList,
  DropdownWrapper,
  NoDataWrapper,
  SpinnerWrapper,
} from './styles'
import Loader from '../../assets/lottiefiles/loader.json'
import Lottie from 'lottie-react'
import { LottieWrapper } from '../submitLocate/styles'
import MoreButton from './MoreButton'
import { AuthContext } from '../../store/LoginAuthContext'
import Paginator from '../paginator/Paginator'
import { DivWrapper } from '../easyToBorrow/styles'
import { ColumnDetails } from '../inventoryPage/IInventoryPage'
import { ReviewRequest, ReviewTable } from '../../shared/models/ICoverageList'
import { ReviewTableProps } from './ICoverageList'
import EmptyState from '../emptyState/EmptyState'

export const CoverageListTable = ({
  rowData,
  totalRecords,
  isLoading,
  pageIndex,
  pageSize,
}: // updateTableCallbackFn,
ReviewTableProps) => {
  const data: ReviewTable[] = useMemo(() => rowData, [rowData])
  const columns = useMemo<ColumnDetails[]>(() => CoverageTableColumns, []) as []
  console.log('CoverageTableColumns=>>', columns)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })
  // console.log('rows=>>', rows)

  const [menuActive, setMenuActive] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const loginContext = useContext(AuthContext)
  const [showUpdateButton, setUpdateButton] = useState(false)
  const [dataIndex, setIndex] = useState<number>(0)
  const divRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const openMenu = (index: number) => {
    index === dataIndex ? setMenuActive(!menuActive) : setMenuActive(true)
    setIndex(index)
  }

  document.body.addEventListener('click', (event: MouseEvent) => {
    const buttonId =
      (event.target as HTMLElement).parentElement?.parentElement?.id ||
      (event.target as HTMLElement).parentElement?.id
    if (
      !divRef.current?.contains(event.target as Node) &&
      buttonId !== 'more'
    ) {
      setMenuActive(false)
    }
  })

  // const openModal = () => {
  //   setMenuActive(false)
  //   // setShowPopUp(true)
  // }

  // const getUpdateStatus = (status: boolean) => {
  //   updateStatus(status)
  // }

  // useEffect(() => {
  //   loginContext.user.roleName === 'Admin'
  //     ? setUpdateButton(true)
  //     : setUpdateButton(false)
  // }, [])

  // const getData = (pageIndex: number, pageSize: number) => {
  //   updateTableCallbackFn(pageIndex, pageSize)
  // }

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
            <>
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
                            {console.log('column', column)}
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
                              >
                                {/* {showUpdateButton && (
                                  <DivWrapper
                                    ref={buttonRef}
                                    className={
                                      dataIndex === rowIndex &&
                                      'relative-position'
                                    }
                                  >
                                    <MoreButton
                                      openMenu={() => openMenu(rowIndex)}
                                    />
                                    {menuActive && dataIndex === rowIndex && (
                                      <DropdownWrapper ref={divRef}>
                                        <DropdownList onClick={openModal}>
                                          New Allocation Quantity
                                        </DropdownList>
                                      </DropdownWrapper>
                                    )}
                                  </DivWrapper>
                                )} */}
                              </TableDataCell>
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
              {/* <Paginator
                totalRecords={totalRecords}
                pageIndex={pageIndex}
                pageSizeOptions={[pageSize]}
                dataCallbackFn={getData}
              /> */}
            </>
          ) : (
            <>
              {/* <NoDataWrapper>{'No Data available'}</NoDataWrapper> */}
              <EmptyState />
            </>
          )}
        </>
      )}
      {/* {showPopUp && (
        <AddInventoryReview
          setModalCallBack={setShowPopUp}
          apiSuccessCallBack={getUpdateStatus}
          rowData={rowData}
          index={dataIndex}
        />
      )} */}
    </RootContainer>
  )
}
