import { CreateTable } from '../../composites/previewLocateRequest/table/TableHeaderElements'
import { StockLocateResponse } from '../../shared/models/ISubmitLocate'

export const PreviewLocates = (props: {
  rowData: StockLocateResponse[]
  totalLength: number
  validLength?: number
  invalidLength?: number
  deleteCallbackFn: (indexes: number[]) => void
  filterCallbackFn: (filterOption: string) => void
}) => {
  return (
    <CreateTable
      rowData={props.rowData}
      totalLength={props.totalLength}
      validLength={props.validLength}
      invalidLength={props.invalidLength}
      deleteCallbackFn={props.deleteCallbackFn}
      filterCallbackFn={props.filterCallbackFn}
    />
  )
}

export default PreviewLocates
