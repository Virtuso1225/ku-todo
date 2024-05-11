import { useAtom, useAtomValue } from 'jotai/react'
import { useCallback, useLayoutEffect } from 'react'

import { UserCredential } from '@/api/types/user'
import API from '@/lib/axios/custom-axios'
import { onRequest } from '@/lib/axios/on-request'
import { loginAtom, userCredentialAtom } from '@/lib/store/jotai'

export const useAxiosInterceptor = () => {
  const loginStatus = useAtomValue(loginAtom)
  const [userCred, setUserCredential] = useAtom(userCredentialAtom)
  const handleSet = useCallback(
    (value: Pick<UserCredential, 'accessToken' | 'exp'>) => {
      setUserCredential({ ...userCred!, ...value })
    },
    [setUserCredential, userCred]
  )
  useLayoutEffect(() => {
    const requestInterceptor = API.interceptors.request.use(config => {
      return onRequest(config, loginStatus, userCred, handleSet)
    })
    return () => API.interceptors.request.eject(requestInterceptor)
  }, [handleSet, loginStatus, userCred])
}
