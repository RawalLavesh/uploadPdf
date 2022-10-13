import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { logout } from '../apiConfig/authConfig'
import { getWithExpiry } from '../store/LoginAuthContext'

const removeUserData = () => {
  localStorage.removeItem('sessionId')
  localStorage.removeItem('traceId')
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('user')
  localStorage.removeItem('relatedUsers')
}

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (config.url) {
    const hostUrl = process.env.REACT_APP_API_HOST_URL
    config.url = hostUrl ? hostUrl.concat(config.url) : config.url
  }
  const traceId = getWithExpiry('traceId')
  const sessionId = getWithExpiry('sessionId')
  config.headers = { ...config.headers, 'Access-Control-Allow-Origin': '*' }
  if (traceId) {
    config.headers = {
      ...config.headers,
      traceId,
    }
    if (sessionId) {
      config.headers = { ...config.headers, sessionId: sessionId }
    }
  }
  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response?.status === 401) {
    logout()
      .then((response) => {
        removeUserData()
      })
      .catch((error: AxiosError) => {
        removeUserData()
      })
    window.location.href = `${window.location.origin}/${process.env.REACT_APP_BASE_URL}/login`
  }
  return Promise.reject(error)
}

export function setupInterceptorsTo() {
  axios.interceptors.request.use(onRequest, onRequestError)
  axios.interceptors.response.use(onResponse, onResponseError)
}
