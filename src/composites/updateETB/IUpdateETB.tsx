import { AxiosError } from 'axios'
import { BorrowSecurityModel } from '../../shared/models/IEasyToBorrow'
export interface UpdateETBProps {
  setModalCallBack: (status: boolean) => void
  rowData?: BorrowSecurityModel[]
  index?: number
  apiSuccessCallBack: (status: boolean, error?: AxiosError | null) => void
}
