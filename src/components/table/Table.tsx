import { useRowSelect, useTable } from 'react-table'
import { StyledRectangle, ThContentWrapper, ThWrapper, Wrapper } from './styles'
import { useMemo } from 'react'
import { TableProps } from './ITable'

const Table = ({
  tableColumns,
  tableData,
  onClick,
  hasFooter = false,
}: TableProps) => {
  const data = useMemo(() => tableData, [tableData])
  const columns = useMemo(() => tableColumns, [tableColumns])
  const tableInstance = useTable({ columns, data }, useRowSelect)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance

  const selectedColor = (e: any) => {
    for (const elem of (document as any).getElementsByClassName(
      'active-selected'
    )) {
      elem.classList.remove('active-selected')
    }
    for (const elem of (document as any).getElementsByClassName('table-row')) {
      elem.classList.remove('table-row')
    }
    e.currentTarget.classList.add('active-selected')
  }
  return (
    <Wrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, key) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={key}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps()} key={index}>
                  <ThWrapper>
                    <ThContentWrapper>
                      {column.render('Header')}
                    </ThContentWrapper>
                    {headerGroup.headers.length - 1 !== index && (
                      <StyledRectangle></StyledRectangle>
                    )}
                  </ThWrapper>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                key={index}
                onClick={(e) => {
                  onClick(row.original)
                  selectedColor(e)
                }}
                className="table-row"
              >
                {row.cells.map((cell, i) => {
                  return (
                    <td {...cell.getCellProps()} key={i}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        {hasFooter ? (
          <tfoot>
            {footerGroups.map((group, index) => (
              <tr {...group.getFooterGroupProps()} key={index}>
                {group.headers.map((column, i) => (
                  <td {...column.getFooterProps()} key={i}>
                    {column.render('Footer')}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        ) : null}
      </table>
    </Wrapper>
  )
}

export default Table
