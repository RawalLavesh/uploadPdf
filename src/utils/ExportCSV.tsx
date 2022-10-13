import React from 'react'
import { RefObject } from 'react'
import { CSVLink } from 'react-csv'

import { BorrowSecurityModel } from '../shared/models/IEasyToBorrow'
import { InventoryResponseModel } from '../shared/models/IInventoryPage'
import { ReviewRequest } from '../shared/models/IReviewLocate'
import { StockLocateResponse } from '../shared/models/ISubmitLocate'
import Button from '../components/button/Button'
import { WDButtonTransparent } from '../components/ui/WDButton'

import { CSVWrapper } from './styles'

const ExportCSV = (props: {
  csvData:
    | BorrowSecurityModel[]
    | StockLocateResponse[]
    | ReviewRequest[]
    | InventoryResponseModel[]
  children: React.ReactNode
  fileName: string
  headers?: {
    label: string
    key: string
  }[]
  onClickCallBackFn?: () => void
  reference?: RefObject<HTMLDivElement>
}) => {
  const csvReport = {
    data: props.csvData,
    filename: props.fileName,
    header: props.headers,
  }

  return (
    <CSVWrapper ref={props.reference}>
      <WDButtonTransparent>
        <Button type="button" onClick={props.onClickCallBackFn}>
          <CSVLink headers={props.headers} {...csvReport}>
            {props.children}
          </CSVLink>
        </Button>
      </WDButtonTransparent>
    </CSVWrapper>
  )
}

export default ExportCSV
