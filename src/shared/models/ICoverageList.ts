export interface CoverageListRequestModel {
    fromDate: string;
    toDate: string;
    pageIndex?: number,
    pageSize?: number,
}

export interface UpdateReviewRequestModel {
    requestId: number,
    requestQuantity: number,
    allocationQuantity: number,
    userName ?: string
    batchDescription?: string
}

export interface ReviewRequest {
    userName: string,
    cusip: string,
    symbol: string,
    securityDescription: string,
    condition: string,
    requestQuantity: number,
    authorizeID: number,
    accountNumber: string,
    repCode: string,
    statusId: string,
    requestID: number,
    status?: string,
    allocationQuantity: number,
    locateRequestTime: Date | string,
    updatedDate: Date | string
    recordsCount?: number,

    documentId?: string
    documentName?: string
    uploadedBy?: string
    uploadedDate?: string
    documentType?:number
}
export interface ReviewTable {

    documentId?: string
    documentName?: string
    uploadedBy?: string
    uploadedDate?: string
    documentType?:number
}

export interface ReviewLocateResponseModel {
    totalRecordCount: number,
    // approvedRecordCount: number,
    // partialRecordCount: number,
    // pendingRecordCount: number,
    // rejectedRecordCount: number,
    requests: ReviewRequest[]
}