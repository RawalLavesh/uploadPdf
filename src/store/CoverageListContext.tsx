import { createContext } from 'react'
import {
  reviewLocateRequest,
  updateReviewRequest,
} from '../apiConfig/reviewLocateConfig'
import {
  CoverageListRequestModel,
  ReviewLocateResponseModel,
  UpdateReviewRequestModel,
} from '../shared/models/ICoverageList'

const coverageListRequests: ReviewLocateResponseModel = {
  totalRecordCount: 0,
  // approvedRecordCount: 0,
  // partialRecordCount: 0,
  // pendingRecordCount: 0,
  // rejectedRecordCount: 0,
  requests: [],
}

const coverageListStore = {
  coverageListRequests: coverageListRequests,
  sendCoverageListRequests: async (payload: CoverageListRequestModel) => {
    return await reviewLocateRequest(payload)
  },
  updateReviewRequest: async (payload: [UpdateReviewRequestModel]) => {
    return await updateReviewRequest(payload)
  },
}

const coverageListContext = createContext(coverageListStore)

export const CoverageListContextProvider = (props: any) => {
  return (
    <coverageListContext.Provider value={coverageListStore}>
      {props.children}
    </coverageListContext.Provider>
  )
}

export default coverageListContext
