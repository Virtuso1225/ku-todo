import { css } from '@styled-stytem/css'
import { useSetAtom } from 'jotai'
import { Trash2 } from 'lucide-react'
import { memo } from 'react'

import { useDeleteTodo, usePatchTodo } from '@/api/hooks/to-do'
import Button from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { pageAtom } from '@/lib/store/jotai'
import { Todo } from '@/lib/types/todo'

const TodoItem = memo(({ id, content, isChecked }: Todo) => {
  const { mutate: mutateCheck } = usePatchTodo()
  const { mutate: mutateDelete } = useDeleteTodo()
  const setPage = useSetAtom(pageAtom)
  const handleCheck = (id: string, isChecked: boolean) => {
    mutateCheck({ id, isChecked: !isChecked })
  }
  const handleDelete = (id: string) => {
    mutateDelete(id, { onSuccess: () => setPage(1) })
  }

  return (
    <div
      className={css({
        display: 'flex',
        h: '42px',
        px: 5,
        py: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        rounded: 6,
        border: 'base',
        shadow: 'sm'
      })}
    >
      <div
        className={css({
          display: 'flex',
          w: 'full',
          h: 'full',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 5
        })}
      >
        <Checkbox id="todo" checked={isChecked} onCheckedChange={() => handleCheck(id, isChecked)} />
        <p
          className={css({
            color: 'secondary.foreground',
            fontFamily: 'SUIT',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 500
          })}
        >
          {content}
        </p>
        <Button variant="ghost" size="icon" css={{ h: 8, w: 8 }} onClick={() => handleDelete(id)}>
          <Trash2 className={css({ h: 4, w: 4, color: 'red.400' })} />
        </Button>
      </div>
    </div>
  )
})

export default TodoItem
