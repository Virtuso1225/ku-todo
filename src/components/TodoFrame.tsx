import { css } from '@styled-stytem/css'

import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagenation'
const TodoFrame = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
      })}
    >
      <TodoInput />
      <TodoList />
      <Pagination>
        <PaginationContent
          className={css({
            display: 'flex',
            w: 'full',
            justifyContent: 'space-between',
            alignSelf: 'stretch'
          })}
        >
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <div className={css({ display: 'flex', flexDir: 'row', alignItems: 'center', gap: 1 })}>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </div>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default TodoFrame
