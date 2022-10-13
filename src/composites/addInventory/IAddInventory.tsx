import { AxiosError } from 'axios'
import { ReviewRequest } from '../../shared/models/IReviewLocate'
export interface AddInventoryProps {
  setModalCallBack: (status: boolean) => void
  apiCallBack: (
    status: boolean,
    batchId?: number | null,
    error?: AxiosError | null
  ) => void
}

export interface AddInventoryReviewProps {
  setModalCallBack: (status: boolean) => void
  rowData?: ReviewRequest[]
  index: number
  apiSuccessCallBack: (status: boolean, error?: AxiosError | null) => void
}
