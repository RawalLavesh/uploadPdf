import axios from 'axios'
import {
  SubmitLocateRequestPayload,
  SubmitLocateResponse,
  SubmitLocateValidationPayload,
  SubmitLocateValidationResponse,
} from '../shared/models/ISubmitLocate'
import ENDPOINTS from './endpoints'

export const submitLocateValidate = (
  payload: SubmitLocateValidationPayload[]
) => {
  return axios.post<SubmitLocateValidationResponse>(ENDPOINTS.VALIDATE, payload)
}

export const submitLocateRequest = (payload: SubmitLocateRequestPayload[]) => {
  return axios.post<SubmitLocateResponse[]>(ENDPOINTS.SUBMIT, payload)
}
