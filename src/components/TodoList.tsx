import { css } from '@styled-stytem/css'
import { ListFilter } from 'lucide-react'

import Todo from '@/components/Todo'
import Button from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const TodoList = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', minH: '334px', gap: 2.5, alignSelf: 'stretch' })}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignSelf: 'stretch'
        })}
      >
        <Label>Your Todos</Label>
        <Button variant="outline" size="sm" css={{ h: '24px' }}>
          <ListFilter className={css({ h: 4, w: 4 })} />
          filter
        </Button>
      </div>
      <Todo id="test" isChecked={false} handleCheck={() => {}} text="Accept terms and condition" />
      <Todo id="test2" isChecked={false} handleCheck={() => {}} text="Accept terms and condition" />
      <Todo id="test" isChecked={false} handleCheck={() => {}} text="Accept terms and condition" />
      <Todo id="test" isChecked={false} handleCheck={() => {}} text="Accept terms and condition" />
      <Todo id="test" isChecked={false} handleCheck={() => {}} text="Accept terms and condition" />
      <Todo id="test" isChecked={false} handleCheck={() => {}} text="Accept terms and condition" />
      <Todo id="test" isChecked={false} handleCheck={() => {}} text="Accept terms and condition" />
    </div>
  )
}

export default TodoList
