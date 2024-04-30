import { Todo } from '@/lib/types/todo'

export interface GetTodoRes {
  todos: Todo[]
  totalPage: number
}
