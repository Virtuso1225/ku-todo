import { css } from '@styled-stytem/css'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { ListFilter } from 'lucide-react'
import { memo, useEffect, useState } from 'react'

import { useGetTodo } from '@/api/hooks/to-do'
import TodoItem from '@/components/TodoItem'
import Button from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { loginAtom, pageAtom, pageSizeAtom } from '@/lib/store/jotai'
import { FilterStatus } from '@/lib/types/todo'

const TodoList = memo(() => {
  const [filter, setFilter] = useState<FilterStatus>('all')
  const [page, setPage] = useAtom(pageAtom)
  const { data, isPending } = useGetTodo(page, filter)
  const { todos, totalPage } = data?.data ?? { todos: [], totalPage: 1 }
  const setTotalPage = useSetAtom(pageSizeAtom)
  const handleFilter = (filter: FilterStatus) => {
    setFilter(filter)
    setPage(1)
  }
  const loginStatus = useAtomValue(loginAtom)
  useEffect(() => setTotalPage(totalPage), [setTotalPage, totalPage])
  return (
    <div className={css({ display: 'flex', flexDir: 'column', h: '334px', gap: 2.5, alignSelf: 'stretch' })}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'stretch'
        })}
      >
        <Label className={css({ fontWeight: 800 })}>Your Todos</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" css={{ h: '24px' }}>
              <ListFilter className={css({ h: 4, w: 4 })} />
              filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Todo Filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={filter === 'all'} onCheckedChange={() => handleFilter('all')}>
              All
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={filter === 'unchecked'}
              onCheckedChange={() => handleFilter('unchecked')}
            >
              Not Done
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={filter === 'checked'} onCheckedChange={() => handleFilter('checked')}>
              Done
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {isPending || !loginStatus
        ? Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className={css({ w: 'full', h: '42px' })} />
          ))
        : todos.map(todo => <TodoItem key={todo.id} id={todo.id} isChecked={todo.isChecked} content={todo.content} />)}
    </div>
  )
})

export default TodoList
