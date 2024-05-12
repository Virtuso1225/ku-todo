import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'

import { customApi } from '@/api/hooks/custom-api'
import { loginAtom } from '@/lib/store/jotai'
import { TodoStatus } from '@/lib/types/todo'

const getProgress = async () => {
  const response = await customApi.get<TodoStatus>(`/auth/todo/dashboard`)
  return response.data
}

export const useGetProgress = () => {
  const loginSatus = useAtomValue(loginAtom)
  return useQuery({ queryKey: ['progress'], queryFn: getProgress, enabled: loginSatus })
}
