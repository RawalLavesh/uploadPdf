export interface IPaginator {
  totalRecords: number
  pageIndex: number
  pageSizeOptions: number[]
  dataCallbackFn: (startIndex: number, pageSize: number) => void
}
