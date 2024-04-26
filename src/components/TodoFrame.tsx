import { css } from '@styled-stytem/css'

import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

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
    </div>
  )
}

export default TodoFrame
