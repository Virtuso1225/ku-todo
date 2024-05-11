import { useQuery } from '@tanstack/react-query'

import { customApi } from '@/api/hooks/custom-api'
import { TodoStatus } from '@/lib/types/todo'

const getProgress = async () => {
  const response = await customApi.get<TodoStatus>(`https://ku-todo.deno.dev/todo/dashboard`)
  return response.data
}

export const useGetProgress = () => {
  return useQuery({ queryKey: ['progress'], queryFn: getProgress })
}

const getTest = async () => {
  const response = await customApi.get<string>('/auth', {
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
  })
  return response.data
}

export const useGetTest = () => {
  return useQuery({ queryKey: ['test'], queryFn: getTest })
}
