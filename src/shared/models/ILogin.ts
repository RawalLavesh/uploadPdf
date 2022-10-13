export interface LoginRequestModel {
    userName: string ,
    password: string,
}

export interface UserInterface {
  firmName: string
  roleName: string
  uid: number | null
  userName: string
}

export interface LoginResponseModel {
  firmName: string
  message: string
  relatedUser: UserInterface[],
  roleName: string
  uid: number | null
  userName: string
  sessionId: string
}
