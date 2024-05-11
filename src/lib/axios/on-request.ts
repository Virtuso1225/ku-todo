import { type InternalAxiosRequestConfig } from 'axios'

import { getNewToken } from '@/api/hooks/refresh'
import { UserCredential } from '@/api/types/user'

export const onRequest = async (
  config: InternalAxiosRequestConfig,
  loginSatus: boolean,
  userCred: UserCredential | null,
  setUserCredential: (value: Pick<UserCredential, 'accessToken' | 'exp'>) => void
) => {
  if (!loginSatus) return config
  const isTokenExpired = userCred!.exp < Date.now() / 1000
  if (isTokenExpired) {
    const response = await getNewToken(userCred!.refreshToken, userCred!.accessToken)
    setUserCredential({ ...response })
    config.headers.Authorization = `Bearer ${response.accessToken}`
  } else {
    config.headers.Authorization = `Bearer ${userCred!.accessToken}`
  }
  return config
}

export const handleRequestError = (error: Error) => {
  console.error(error)
  localStorage.clear()
}
