export interface InventoryRequestModel {
    fromDate: string,
    toDate: string,
    cusip?: string,
    startIndex: number,
    maximumRows: number,
}

export interface InventoryResponseModel {
    id: number,
    cusip: string,
    inventoryDate: string | Date,
    status: number,
    userName: string,
    batchRows: number,
    batchReceiveDate: string | Date,
    batchID: number,
    quantity: number,
    symbol: string,
    securityDescription: string,
    clientID: string,
    clientName: string,
    totalNoOfRows: number,
}
export interface AddInventoryResponseModel {
    batchID: number,
}

export interface AddInventoryRequestModel {
    cusip: string,
    quantity: number | null,
    userName: string,
    batchDescription: string,
}
