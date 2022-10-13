import axios from 'axios'
import {
  EasyToBorrowRequestModel,
  UpdateETBRequestModel,
  EasyToBorrowResponseModel,
  UpdateETBResponseModel,
} from '../shared/models/IEasyToBorrow'
import ENDPOINTS from './endpoints'

export const easyToBorrowRequest = (payload: EasyToBorrowRequestModel) => {
  return axios.post<EasyToBorrowResponseModel>(ENDPOINTS.ETB_REPORT, payload)
}

export const updateETB = (payload: [UpdateETBRequestModel]) => {
  return axios.post<UpdateETBResponseModel>(ENDPOINTS.UPDATE_ETB, payload)
}
