import { useMutation } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'
import { RESET } from 'jotai/utils'

import { customApi } from '@/api/hooks/custom-api'
import { User, UserCredential } from '@/api/types/user'
import { loginAtom, userCredentialAtom } from '@/lib/store/jotai'

const createUser = async (data: User) => {
  const response = await customApi.post<User, null>('/signup', data)
  return response.data
}

export const useCreateUser = () => {
  return useMutation({ mutationFn: createUser })
}

const login = async (data: User) => {
  const response = await customApi.post<User, UserCredential>('/login', data)
  return response.data
}

export const useLogin = () => {
  const setLoginStorage = useSetAtom(loginAtom)
  const setUserCredential = useSetAtom(userCredentialAtom)
  return useMutation({
    mutationFn: login,
    onSuccess: data => {
      setLoginStorage(true)
      setUserCredential(data.data)
    }
  })
}

const logout = async () => {
  const response = await customApi.post<null, null>('/auth/logout')
  return response.data
}

export const useLogout = () => {
  const setLoginStorage = useSetAtom(loginAtom)
  const setUserCredential = useSetAtom(userCredentialAtom)
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setLoginStorage(false)
      setUserCredential(RESET)
    }
  })
}
