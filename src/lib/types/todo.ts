export interface Todo {
  id: string
  content: string
  isChecked: boolean
}

export interface TodoStatus {
  progress: number
  finished: number
  left: number
}

export type FilterStatus = 'all' | 'checked' | 'unchecked'
