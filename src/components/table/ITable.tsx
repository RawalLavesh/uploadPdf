import { ReactNode } from 'react'

interface Column {
  Header: string
  accessor: string
}

interface Data {
  [key: string]: string | number | boolean | JSX.Element
}

interface OnClickFunc {
  (key: Data): void | string | number | boolean | JSX.Element
}

export interface TableProps {
  tableColumns: Column[]
  tableData: Data[]
  onClick: OnClickFunc
  hasFooter?: boolean
}
