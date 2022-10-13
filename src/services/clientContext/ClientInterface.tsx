export interface ClientInterface {
  clientID: string
  clientInitials: string
  taxID: string
  firstName: string
  lastName: string
  middleInitial: string
  greetingsMessage?: string
  asOfDateTime: string
}

export const defaultClient: ClientInterface = {
  clientID: '',
  clientInitials: '',
  taxID: '',
  firstName: '',
  lastName: '',
  middleInitial: '',
  greetingsMessage: '',
  asOfDateTime: '',
}
