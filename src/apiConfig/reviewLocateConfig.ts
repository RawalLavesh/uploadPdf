import {
  ReviewLocateRequestModel,
  ReviewLocateResponseModel,
  UpdateReviewRequestModel,
} from '../shared/models/IReviewLocate'
import axios from 'axios'
import ENDPOINTS from './endpoints'

export const reviewLocateRequest = (payload: ReviewLocateRequestModel) => {
  return axios.post<ReviewLocateResponseModel>(ENDPOINTS.REVIEW_REPORT, payload)
}

export const updateReviewRequest = (payload: [UpdateReviewRequestModel]) => {
  return axios.post(ENDPOINTS.UPDATE_ALLOCATION, payload)
}
