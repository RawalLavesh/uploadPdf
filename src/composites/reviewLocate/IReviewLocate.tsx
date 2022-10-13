import { AxiosError } from "axios"
import { ReviewRequest } from "../../shared/models/IReviewLocate"

export interface MoreButtonProps {
  onBlur?: (data: any) => void
  openMenu?: () => void
}

export interface ReviewTableProps{
  rowData: ReviewRequest[]
  isLoading?: boolean
  totalRecords: number
  pageIndex: number
  pageSize: number
  updateTableCallbackFn: (pageIndex: number, pageSize: number) => void
  updateStatus: (status: boolean,error?: AxiosError | null) => void
}