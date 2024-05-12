import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'

import { customApi } from '@/api/hooks/custom-api'
import { GetTodoRes } from '@/api/types/to-do'
import { loginAtom } from '@/lib/store/jotai'
import { FilterStatus } from '@/lib/types/todo'

const getTodo = async (pageNum: number, filter: FilterStatus) => {
  const response = await customApi.get<GetTodoRes>(`/auth/todo?filter=${filter}&page=${pageNum}`)
  return response.data
}

export const useGetTodo = (pageNum: number, filter: FilterStatus) => {
  const loginSatus = useAtomValue(loginAtom)

  return useQuery({
    queryKey: ['todo', pageNum, filter],
    queryFn: () => getTodo(pageNum, filter),
    placeholderData: keepPreviousData,
    enabled: loginSatus
  })
}

const postTodo = async (content: string) => {
  const response = await customApi.post<{ content: string }, null>(`/auth/todo/create`, { content })
  return response.data
}

export const usePostTodo = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] })
      queryClient.invalidateQueries({ queryKey: ['progress'] })
    }
  })
}

interface PatchTodoProps {
  id: string
  isChecked: boolean
}
const patchTodo = async ({ id, isChecked }: PatchTodoProps) => {
  const response = await customApi.patch<{ isChecked: boolean }, null>(`/auth/todo/update/${id}`, {
    isChecked
  })
  return response.data
}

export const usePatchTodo = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] })
      queryClient.invalidateQueries({ queryKey: ['progress'] })
    }
  })
}

const deleteTodo = async (id: string) => {
  const response = await customApi.delete<null>(`/auth/todo/delete/${id}`)
  return response.data
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] })
      queryClient.invalidateQueries({ queryKey: ['progress'] })
    }
  })
}
