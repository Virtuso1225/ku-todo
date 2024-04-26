import { css } from '@styled-stytem/css'

import TodoFrame from '@/components/TodoFrame'
import Wrapper from '@/components/Wrapper'

function App() {
  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        h: 'lvh',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black'
      })}
    >
      <Wrapper>
        <TodoFrame />
      </Wrapper>
    </div>
  )
}

export default App
