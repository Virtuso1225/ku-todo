import { css } from '@styled-stytem/css'

import PageNavBar from '@/components/PageNavBar'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

const TodoFrame = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flex: 1,
        flexDir: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
      })}
    >
      <TodoInput />
      <TodoList />
      <PageNavBar />
    </div>
  )
}

export default TodoFrame
