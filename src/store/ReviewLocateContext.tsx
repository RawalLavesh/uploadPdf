import { createContext } from 'react'
import {
  reviewLocateRequest,
  updateReviewRequest,
} from '../apiConfig/reviewLocateConfig'
import {
  ReviewLocateRequestModel,
  ReviewLocateResponseModel,
  UpdateReviewRequestModel,
} from '../shared/models/IReviewLocate'

const reviewLocateRequests: ReviewLocateResponseModel = {
  totalRecordCount: 0,
  approvedRecordCount: 0,
  partialRecordCount: 0,
  pendingRecordCount: 0,
  rejectedRecordCount: 0,
  requests: [],
}

const reviewLocateStore = {
  reviewLocateRequests: reviewLocateRequests,
  sendReviewLocateRequests: async (payload: ReviewLocateRequestModel) => {
    return await reviewLocateRequest(payload)
  },
  updateReviewRequest: async (payload: [UpdateReviewRequestModel]) => {
    return await updateReviewRequest(payload)
  },
}

const reviewLocateContext = createContext(reviewLocateStore)

export const ReviewLocateContextProvider = (props: any) => {
  return (
    <reviewLocateContext.Provider value={reviewLocateStore}>
      {props.children}
    </reviewLocateContext.Provider>
  )
}

export default reviewLocateContext
