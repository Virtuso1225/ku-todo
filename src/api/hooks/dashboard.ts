import { useQuery } from '@tanstack/react-query'

import { customApi } from '@/api/types/custom-api'
import { TodoStatus } from '@/lib/types/todo'

const getProgress = async () => {
  const response = await customApi.get<TodoStatus>(`https://ku-todo.deno.dev/todo/dashboard`)
  return response.data
}

export const useGetProgress = () => {
  return useQuery({ queryKey: ['progress'], queryFn: getProgress })
}
