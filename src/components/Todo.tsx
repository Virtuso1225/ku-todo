import { css } from '@styled-stytem/css'
import { memo } from 'react'

import { Checkbox } from '@/components/ui/checkbox'

interface TodoProps {
  id: string
  text: string
  isChecked: boolean
  handleCheck: (id: string, isChecked: boolean) => void
}
const Todo = memo(({ id, text, isChecked, handleCheck }: TodoProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        w: '384px',
        h: '42px',
        px: 5,
        py: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        rounded: 6,
        border: 'base',
        shadow: '0px 4px 4px 0px rgba(174, 174, 174, 0.15)'
      })}
    >
      <div
        className={css({
          display: 'flex',
          w: 'full',
          h: 'full',
          alignItems: 'center',
          justifyContent: 'flex-start',
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
            fontWeight: 500,
            lineHeight: 14
          })}
        >
          {text}
        </p>
      </div>
    </div>
  )
})

export default Todo
