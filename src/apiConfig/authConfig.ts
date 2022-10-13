import axios from 'axios'
import {
  LoginRequestModel,
  LoginResponseModel,
} from '../shared/models/ILogin'
import ENDPOINTS from './endpoints'

export const authenticate = (loginCredential: LoginRequestModel) => {
  return axios.post<LoginResponseModel>(ENDPOINTS.LOGIN, loginCredential)
}

export const logout = () => {
  return axios.post(ENDPOINTS.LOGOUT)
}

export default authenticate
