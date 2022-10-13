import axios from 'axios'
import { AddInventoryRequestModel, AddInventoryResponseModel, InventoryRequestModel, InventoryResponseModel } from '../shared/models/IInventoryPage'
import ENDPOINTS from './endpoints'

export const inventoryRequest = (payload: InventoryRequestModel) => {
  return axios.post<InventoryResponseModel[]>(ENDPOINTS.INVENTORY_REPORT, payload)
}

export const addInventory = (payload: AddInventoryRequestModel) => {
  return axios.post<AddInventoryResponseModel>(ENDPOINTS.UPDATE_INVENTORY, payload)
}
