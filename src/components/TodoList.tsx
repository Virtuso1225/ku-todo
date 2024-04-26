import { css } from '@styled-stytem/css'
import { ListFilter } from 'lucide-react'

import Button from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const TodoList = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', minH: '334px', gap: 10, alignSelf: 'stretch' })}>
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
    </div>
  )
}

export default TodoList
