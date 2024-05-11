import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { customApi } from '@/api/hooks/custom-api'
import { GetTodoRes } from '@/api/types/to-do'
import { FilterStatus } from '@/lib/types/todo'

const getTodo = async (pageNum: number, filter: FilterStatus) => {
  const response = await customApi.get<GetTodoRes>(`https://ku-todo.deno.dev/todo?filter=${filter}&page=${pageNum}`)
  return response.data
}

export const useGetTodo = (pageNum: number, filter: FilterStatus) => {
  return useQuery({
    queryKey: ['todo', pageNum, filter],
    queryFn: () => getTodo(pageNum, filter),
    placeholderData: keepPreviousData
  })
}

const postTodo = async (content: string) => {
  const response = await customApi.post<{ content: string }, null>(`https://ku-todo.deno.dev/todo/create`, { content })
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
  const response = await customApi.patch<{ isChecked: boolean }, null>(`https://ku-todo.deno.dev/todo/update/${id}`, {
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
  const response = await customApi.delete<null>(`https://ku-todo.deno.dev/todo/delete/${id}`)
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
