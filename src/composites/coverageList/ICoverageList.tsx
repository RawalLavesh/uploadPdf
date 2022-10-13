import { AxiosError } from 'axios'
import { ReviewRequest, ReviewTable } from '../../shared/models/ICoverageList'

export interface MoreButtonProps {
  onBlur?: (data: any) => void
  openMenu?: () => void
}

export interface ReviewTableProps {
  rowData: ReviewTable[]
  isLoading?: boolean
  totalRecords: number
  pageIndex: number
  pageSize: number
  // updateTableCallbackFn: (pageIndex: number, pageSize: number) => void
  // updateStatus: (status: boolean, error?: AxiosError | null) => void
}
