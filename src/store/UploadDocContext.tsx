import { createContext } from 'react'
import {
  submitLocateValidate,
  submitLocateRequest,
} from './../apiConfig/submitLocateConfig'
import { SubmitLocateRequestModel, SubmitLocateRequestPayload, SubmitLocateValidationPayload } from '../shared/models/ISubmitLocate'

const submitLocateRequestData: SubmitLocateRequestModel = {
  bulkRequest: [],
  submitRequestResponse: {
    totalLocates: 0,
    validLocates: 0,
    invalidLocates: 0,
    stockLocates: [],
  },
}

const uploadDocStore = {
  submitLocateRequest: submitLocateRequestData,
  sendSubmitLocateValidateRequest: async (payload: SubmitLocateValidationPayload[]) => {
    return await submitLocateValidate(payload)
  },
  sendSubmitLocateRequest: async (userName: string) => {
    const payload: SubmitLocateRequestPayload[] = []
    uploadDocStore.submitLocateRequest.submitRequestResponse.stockLocates.forEach(
      (data) => {
        if (data.isLocateValid === true) {
          payload.push({
            cusip: data.cusip,
            requestedQuantity: data.quantity,
            accountNumber: data.accountNumber,
            repCode: data.repCode,
            userName: userName,
            symbol: data.symbol,
            securityDescription: data.securityDescription,
            condition: data.borrowStatus
          })
        }
      }
    )
    return await submitLocateRequest(payload)
  },
  setBulkRequest: (request: SubmitLocateValidationPayload[]) => {
    uploadDocStore.submitLocateRequest.bulkRequest = request
  },
  deleteAllRequest: () => {
    uploadDocStore.submitLocateRequest.submitRequestResponse.stockLocates.splice(
      0,
      uploadDocStore.submitLocateRequest.submitRequestResponse.stockLocates
        .length
    )
    uploadDocStore.submitLocateRequest.submitRequestResponse.totalLocates = 0
    uploadDocStore.submitLocateRequest.submitRequestResponse.validLocates = 0
    uploadDocStore.submitLocateRequest.submitRequestResponse.invalidLocates = 0
  },
  deleteRequest: (indexes: number[]) => {
    uploadDocStore.submitLocateRequest.submitRequestResponse.stockLocates =
      uploadDocStore.submitLocateRequest.submitRequestResponse.stockLocates.filter(
        (stockLocate, index) => {
          return !indexes.includes(index)
        }
      )
    uploadDocStore.submitLocateRequest.submitRequestResponse.totalLocates =
      uploadDocStore.submitLocateRequest.submitRequestResponse.stockLocates.length
    uploadDocStore.submitLocateRequest.submitRequestResponse.validLocates =
      uploadDocStore.submitLocateRequest.submitRequestResponse.stockLocates.filter(
        (response) =>
          response.isLocateValid === true
      ).length
    uploadDocStore.submitLocateRequest.submitRequestResponse.invalidLocates =
      uploadDocStore.submitLocateRequest.submitRequestResponse.stockLocates.filter(
        (response) =>
          response.isLocateValid === false
      ).length
  },
}

const UploadDocContext = createContext(uploadDocStore)

export const UploadDocStoreProvider = (props: any) => {
  return (
    <UploadDocContext.Provider value={uploadDocStore}>
      {props.children}
    </UploadDocContext.Provider>
  )
}

export default UploadDocContext
