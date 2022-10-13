// export interface DefaultDocumentsInterface {
//   categoryId: string
//   month: number
//   year: string
//   startDate: string
//   endDate: string
//   symbol: string
//   quarter: string
// }

// export const defaultDocuments : DefaultDocumentsInterface = {
//   categoryId: '',
//   month: 1,
//   year: '',
//   startDate: '',
//   endDate: '',
//   symbol: '',
//   quarter: '',
// }
export interface DateRangeLookupOutput {
  endDate:string,
  startDate:string,
}
export const defaultDateRangeLookupOutput : DateRangeLookupOutput = {
  endDate:'',
  startDate:'',
}

export interface DateRangeLookupInput {
  accountNumber:string,
}

export const defaultDateRangeLookupInput : DateRangeLookupInput = {
  accountNumber:'',
}


export interface FindTradeConfirmationInput {
  accountNumber:string,
  date: string,
  trade: string,
}

export const defaultFindTradeConfirmationInput : FindTradeConfirmationInput ={
  accountNumber:'',
  date: '',
  trade: ''
}


export interface FindTradeConfirmationOutput {
  accountNumber: string,
date:string,
filePath: string,
trade: string
}

export const defaultFindTradeConfirmationOutput : FindTradeConfirmationOutput ={
  accountNumber: '',
  date:'',
  filePath: '',
  trade: ''
}

export interface SearchByDateRangeInput {
  accountNumber: string,
  endDate:'',
  startDate:'',
}

export const defaultSearchByDateRangeInput : SearchByDateRangeInput ={
  accountNumber: '',
  endDate:'',
  startDate:'',
}

export interface SearchByDateRangeOutput {
  date: string,
  trade:string,
  startDate:string,
}

export const defaultSearchByDateRangeOutput : SearchByDateRangeOutput ={
  date: '',
  trade:'',
  startDate:'',
}

export interface StockSearchOutput {
  date: string,
  trade:string,
 
}

export const defaultStockSearchOutput : StockSearchOutput ={
  date: '',
  trade:'', 
}




export interface DocumentsInterface {
  clientID: string
  categoryId: string
  categoryName: string,
  dateRangeLookupInput:DateRangeLookupInput,
  dateRangeLookupOutput:DateRangeLookupOutput,
  findTradeConfirmationInput:FindTradeConfirmationInput,
  findTradeConfirmationOutput:FindTradeConfirmationOutput,
  searchByDateRangeInput:SearchByDateRangeInput,
  searchByDateRangeOutput:SearchByDateRangeOutput
  stockSearchOutput:StockSearchOutput
   search: SearchInterface
}

export const defaultDocuments: DocumentsInterface = {
  clientID: '',
  categoryId: '',
  categoryName: '',
  dateRangeLookupInput:defaultDateRangeLookupInput,
  dateRangeLookupOutput:defaultDateRangeLookupOutput,
  findTradeConfirmationInput :defaultFindTradeConfirmationInput,
  findTradeConfirmationOutput :defaultFindTradeConfirmationOutput,
  searchByDateRangeInput:defaultSearchByDateRangeInput,
  searchByDateRangeOutput:defaultSearchByDateRangeOutput,
  stockSearchOutput :defaultStockSearchOutput,
  search: { monList: [], monthList: [], yearList: [] },
}
export interface SearchInterface {
  monList: Array<number>
  monthList: Array<string>
  yearList: Array<string>
}
export const defaultSearch: SearchInterface = {
  monList: [],
  monthList: [],
  yearList: [],
}
// export interface MonthlyStatementInputInterface {
//  mon: number
//  year: string
//  accountNumber: string
// }
// export const defaultMonthlyStatementInput: MonthlyStatementInputInterface = {
//   mon:0,
//   year: '',
//   accountNumber: '',
// }
// export interface MonthlyStatementInterface {
//   mon: number
//   year: string
//   accountNumber: string
//   filePath:string
//  }
//  export const defaultMonthlyStatement: MonthlyStatementInterface = {
//    mon: 0,
//    year: '',
//    accountNumber: '',
//    filePath: ''
//  }

export interface SelectedFiltersInterface {
  month: string
  year: string
  accountNumber: string
}
export const defaultSelectedFilters: SelectedFiltersInterface = {
  month: '',
  year: '',
  accountNumber: '',
}
export interface SelectedDocumentInterface {
  mon: number
  year: string
  accountNumber: string
  filePath: string
}

export const defaultSelectedDocument: SelectedDocumentInterface = {
  mon: 0,
  year: '',
  accountNumber: '',
  filePath: '',
}
