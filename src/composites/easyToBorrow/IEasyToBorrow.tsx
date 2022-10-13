import { AxiosError } from "axios"
import { BorrowSecurityModel } from "../../shared/models/IEasyToBorrow"

export interface ETBTableProps {
    rowData: BorrowSecurityModel[]
    isLoading?: boolean
    totalRecords: number
    pageIndex: number
    pageSize: number
    updateTableCallbackFn: (pageIndex: number, pageSize: number) => void
    apiSuccessCallBack: (status: boolean, error?: AxiosError | null) => void
}