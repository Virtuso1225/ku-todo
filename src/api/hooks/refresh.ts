import axios, { AxiosResponse } from 'axios'

import { CommonResponse } from '@/api/types/common-response'
import { UserCredential } from '@/api/types/user'

export const getNewToken = async (refreshToken: string, accessToken: string) => {
  const response = await axios.post<null, AxiosResponse<CommonResponse<Pick<UserCredential, 'accessToken' | 'exp'>>>>(
    'https://ku-todo.deno.dev/refresh',
    { accessToken, refreshToken }
  )
  return response.data.data
}
