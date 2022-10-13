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

const submitLocateStore = {
  submitLocateRequest: submitLocateRequestData,
  sendSubmitLocateValidateRequest: async (payload: SubmitLocateValidationPayload[]) => {
    return await submitLocateValidate(payload)
  },
  sendSubmitLocateRequest: async (userName: string) => {
    const payload: SubmitLocateRequestPayload[] = []
    submitLocateStore.submitLocateRequest.submitRequestResponse.stockLocates.forEach(
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
    submitLocateStore.submitLocateRequest.bulkRequest = request
  },
  deleteAllRequest: () => {
    submitLocateStore.submitLocateRequest.submitRequestResponse.stockLocates.splice(
      0,
      submitLocateStore.submitLocateRequest.submitRequestResponse.stockLocates
        .length
    )
    submitLocateStore.submitLocateRequest.submitRequestResponse.totalLocates = 0
    submitLocateStore.submitLocateRequest.submitRequestResponse.validLocates = 0
    submitLocateStore.submitLocateRequest.submitRequestResponse.invalidLocates = 0
  },
  deleteRequest: (indexes: number[]) => {
    submitLocateStore.submitLocateRequest.submitRequestResponse.stockLocates =
      submitLocateStore.submitLocateRequest.submitRequestResponse.stockLocates.filter(
        (stockLocate, index) => {
          return !indexes.includes(index)
        }
      )
    submitLocateStore.submitLocateRequest.submitRequestResponse.totalLocates =
      submitLocateStore.submitLocateRequest.submitRequestResponse.stockLocates.length
    submitLocateStore.submitLocateRequest.submitRequestResponse.validLocates =
      submitLocateStore.submitLocateRequest.submitRequestResponse.stockLocates.filter(
        (response) =>
          response.isLocateValid === true
      ).length
    submitLocateStore.submitLocateRequest.submitRequestResponse.invalidLocates =
      submitLocateStore.submitLocateRequest.submitRequestResponse.stockLocates.filter(
        (response) =>
          response.isLocateValid === false
      ).length
  },
}

const SubmitLocateContext = createContext(submitLocateStore)

export const SubmitLocateContextProvider = (props: any) => {
  return (
    <SubmitLocateContext.Provider value={submitLocateStore}>
      {props.children}
    </SubmitLocateContext.Provider>
  )
}

export default SubmitLocateContext
