export interface User {
  username: string
  password: string
}

export interface UserCredential {
  id: string
  username: string
  exp: number
  accessToken: string
  refreshToken: string
}
