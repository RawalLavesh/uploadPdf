import {
  UploadFileValidationPayload
} from '../shared/models/IUploadDoc'

import axios from 'axios'
import ENDPOINTS from './endpoints'

export const uploadDocRequest = (payload: UploadFileValidationPayload) => {
  return axios.post(ENDPOINTS.UPLOAD_DOCUMENT, payload)
}

export const retrieveDocRequest = (fileName: string) => {
  const url = ENDPOINTS.RETRIEVE_DOCUMENT + '?fileName=' + fileName;
  return axios.get(url)
}

export const getDocDetailsRequest = (documentType: number, uploadedBy?: string, uploadedDate?: Date, pageNumber?: number, pageSize?: number) => {
  let url = ENDPOINTS.DOCUMENT_DETAILS + '/' + documentType;
  if (uploadedBy || uploadedDate || pageNumber || pageSize) {
    url += '?'
    if (uploadedBy) {
      url += 'UploadedBy=' + uploadedBy + '&';
    }
    if (uploadedDate) {
      url += 'UploadedDate=' + uploadedDate + '&';
    }
    if (pageNumber) {
      url += 'PageNumber=' + pageNumber + '&';
    }
    if (pageSize) {
      url += 'PageSize=' + pageSize;
    }
  }
  return axios.get(url)
}

export const getDocListRequest = (documentType: number) => {
  const url = ENDPOINTS.DOCUMENT_DETAILS + '/' + documentType;
    return axios.get(url)
  }