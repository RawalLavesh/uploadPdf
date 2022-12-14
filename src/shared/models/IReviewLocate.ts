export interface ReviewLocateRequestModel {
    userName?: string;
    fromDate: string;
    toDate: string;
    cusipOrSymbol?: string;
    statuses?: number[];
    filterByUser?: string,
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
    recordsCount?: number
}

export interface ReviewLocateResponseModel {
    totalRecordCount: number,
    approvedRecordCount: number,
    partialRecordCount: number,
    pendingRecordCount: number,
    rejectedRecordCount: number,
    requests: ReviewRequest[]
}