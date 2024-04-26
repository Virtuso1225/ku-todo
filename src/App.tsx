import { css } from '@styled-stytem/css'

import TodoDashBoard from '@/components/TodoDashBoard'
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
        justifyContent: 'center'
      })}
    >
      <Wrapper>
        <TodoFrame />
        <TodoDashBoard />
      </Wrapper>
    </div>
  )
}

export default App
