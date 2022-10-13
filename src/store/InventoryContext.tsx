import { createContext } from 'react'
import {  addInventory, inventoryRequest } from '../apiConfig/inventoryConfig';
import {  AddInventoryRequestModel, InventoryResponseModel,InventoryRequestModel } from '../shared/models/IInventoryPage'

const inventoryRequests: InventoryResponseModel[] = []

const inventoryStore = {
  inventoryRequests:inventoryRequests,
  sendInventoryRequests: async (payload: InventoryRequestModel) => {
    return await inventoryRequest(payload)
  },
  addInventoryRequest: async (payload: AddInventoryRequestModel) => {
    return await addInventory(payload)
  },
  setInventoryRequest: (payload: InventoryResponseModel[]) => {
    inventoryStore.inventoryRequests = payload
  }
}

const inventoryContext = createContext(inventoryStore)

export const inventoryContextProvider = (props: any) => {
  return (
    <inventoryContext.Provider value={inventoryStore}>
      {props.children}
    </inventoryContext.Provider>
  )
}

export default inventoryContext
