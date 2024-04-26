import { css } from '@styled-stytem/css'

import TodoInput from '@/components/TodoInput'

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
    </div>
  )
}

export default TodoFrame
