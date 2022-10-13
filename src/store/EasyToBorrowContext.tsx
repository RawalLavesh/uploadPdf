import { createContext } from 'react'
import {
  EasyToBorrowRequestModel,
  EasyToBorrowResponseModel,
  UpdateETBRequestModel,
} from '../shared/models/IEasyToBorrow'
import { easyToBorrowRequest, updateETB } from '../apiConfig/easyToBorrowConfig'

const easyToBorrowRequests: EasyToBorrowResponseModel = {
  totalRecordCount: 0,
  borrowSecurities: [],
}

const easyToBorrowStore = {
  easyToBorrowRequests: easyToBorrowRequests,
  sendEasyToBorrowRequests: async (payload: EasyToBorrowRequestModel) => {
    return await easyToBorrowRequest(payload)
  },
  updateInventoryRequest: async (payload: [UpdateETBRequestModel]) => {
    return await updateETB(payload)
  },
}

const easyToBorrowContext = createContext(easyToBorrowStore)

export const EasyToBorrowContextProvider = (props: any) => {
  return (
    <easyToBorrowContext.Provider value={easyToBorrowStore}>
      {props.children}
    </easyToBorrowContext.Provider>
  )
}

export default easyToBorrowContext
