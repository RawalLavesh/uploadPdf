export interface CoverageListRequestModel {
    fromDate: string;
    toDate: string;
    pageIndex?: number,
    pageSize?: number,
}
export interface ReviewTable {
    documentId?: string
    documentName?: string
    uploadedBy?: string
    uploadedDate?: string
    documentType?:number
}

export interface ReviewTableProps {
    rowData: ReviewTable[]
    isLoading?: boolean
    pageIndex: number
    pageSize: number
    downloadFile:(val:number)=>void
  }
  