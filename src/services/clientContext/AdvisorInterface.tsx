export interface AdvisorInterface {
  firstName: string
  lastName: string
  middleInitial: string
  primaryPhoneNumber: string
  primaryAdvisorPhoneNumber: string
  customerServicePhone: string
  customerServicesEmail: string
}
export const defaultAdvisor: AdvisorInterface = {
  firstName: '',
  lastName: '',
  middleInitial: '',
  primaryPhoneNumber: '',
  primaryAdvisorPhoneNumber: '',
  customerServicePhone: '',
  customerServicesEmail: '',
}
