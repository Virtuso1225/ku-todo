import { useAtom, useAtomValue } from 'jotai/react'
import { useLayoutEffect } from 'react'

import { UserCredential } from '@/api/types/user'
import API from '@/lib/axios/custom-axios'
import { onRequest } from '@/lib/axios/on-request'
import { loginAtom, userCredentialAtom } from '@/lib/store/jotai'

export const useAxiosInterceptor = () => {
  const loginStatus = useAtomValue(loginAtom)
  const [userCred, setUserCredential] = useAtom(userCredentialAtom)
  useLayoutEffect(() => {
    const handleSet = (value: Pick<UserCredential, 'accessToken' | 'exp'>) => {
      setUserCredential({ ...userCred!, ...value })
    }
    const requestInterceptor = API.interceptors.request.use(config => {
      return onRequest(config, loginStatus, userCred, handleSet)
    })
    return () => API.interceptors.request.eject(requestInterceptor)
  }, [loginStatus, setUserCredential, userCred])
}
