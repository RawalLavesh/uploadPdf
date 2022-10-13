export interface EasyToBorrowRequestModel {
    fromDate: string,
    toDate: string,
    status?: string,
    cusipOrSymbol?: string,
    pageIndex?: number,
    pageSize?: number
}

export interface BorrowSecurityModel {
    borrowId: number,
    tradeDate: Date | string,
    cusip: string,
    symbol: string,
    securityDescription: string,
    borrowStatus: string,
}

export interface UpdateETBRequestModel {
    borrowId: number,
    status: number | string
}

export interface EasyToBorrowResponseModel {
    totalRecordCount: number,
    borrowSecurities: BorrowSecurityModel[]
}

export interface UpdateETBResponseModel {
    statusCode: number,
    reasonPhrase: string,
    isSuccessStatusCode: boolean
}