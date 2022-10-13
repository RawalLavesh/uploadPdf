import { useContext, useEffect, useRef, useState } from 'react'
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
import ETBTableColumns from './EasyToBorrowTableColumns'
import { DateWrapper, DropdownList } from '../reviewLocate/styles'
import { DropdownWrapper } from './styles'
import Lottie from 'lottie-react'
import Loader from '../../assets/lottiefiles/loader.json'
import { LottieWrapper } from '../submitLocate/styles'
import MoreButton from '../reviewLocate/MoreButton'
import { UpdateETB } from '../updateETB/UpdateETB'
import { AuthContext } from '../../store/LoginAuthContext'
import { DivWrapper } from './styles'
import { ColumnDetails } from '../inventoryPage/IInventoryPage'
import { BorrowSecurityModel } from '../../shared/models/IEasyToBorrow'
import { ETBTableProps } from './IEasyToBorrow'
import Paginator from '../paginator/Paginator'

export const EasyToBorrowTable = ({
  rowData,
  isLoading,
  totalRecords,
  pageIndex,
  pageSize,
  updateTableCallbackFn,
  apiSuccessCallBack,
}: ETBTableProps) => {
  const data: BorrowSecurityModel[] = useMemo(() => rowData, [rowData])
  const columns = useMemo<ColumnDetails[]>(() => ETBTableColumns, []) as []
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })
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

  const callBackFn = (status: boolean) => {
    apiSuccessCallBack(status)
  }

  const getData = (pageIndex: number, pageSize: number) => {
    updateTableCallbackFn(pageIndex, pageSize)
  }

  const openModal = () => {
    setShowPopUp(true)
    setMenuActive(false)
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
  useEffect(() => {
    loginContext.user.roleName === 'Admin'
      ? setUpdateButton(true)
      : setUpdateButton(false)
  }, [])

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
                                {showUpdateButton && (
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
                                          Update Status
                                        </DropdownList>
                                      </DropdownWrapper>
                                    )}
                                  </DivWrapper>
                                )}
                              </TableDataCell>
                            ) : (
                              <TableDataCell {...cell.getCellProps()}>
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
              <Paginator
                totalRecords={totalRecords}
                pageIndex={pageIndex}
                pageSizeOptions={[pageSize]}
                dataCallbackFn={getData}
              />
            </>
          ) : (
            <DateWrapper>{'No Data available'}</DateWrapper>
          )}
        </>
      )}
      {showPopUp && (
        <UpdateETB
          setModalCallBack={setShowPopUp}
          rowData={rowData}
          index={dataIndex}
          apiSuccessCallBack={callBackFn}
        />
      )}
    </RootContainer>
  )
}
