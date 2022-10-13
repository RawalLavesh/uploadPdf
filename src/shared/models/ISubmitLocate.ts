export interface SubmitLocateRequestPayload {
    cusip: string,
    requestedQuantity: number,
    accountNumber: string,
    repCode: string,
    userName: string,
    symbol: string,
    securityDescription: string,
    condition: string
}

export interface SubmitLocateResponse {
    accountNumber: string
    cusip: string
    requestId: number
    authorizeID: number
    requestedQuantity: number
    allocatedQuantity: number
}

export interface SubmitLocateValidationPayload {
    cusip: string,
    quantity: number | null,
    accountNumber: string,
    repCode: string
}

export interface StockLocateResponse {
    cusip: string
    symbol: string
    securityDescription: string
    quantity: number
    accountNumber: string
    repCode: string
    borrowStatus: string
    isLocateValid:boolean
    reason: string
    errorCodes: number[]
}

export interface SubmitLocateValidationResponse {
    totalLocates: number;
    validLocates: number;
    invalidLocates: number;
    stockLocates: StockLocateResponse[]
}

export interface SubmitLocateRequestModel {
    bulkRequest: SubmitLocateValidationPayload[],
    submitRequestResponse: SubmitLocateValidationResponse
}