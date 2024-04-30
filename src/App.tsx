import { css } from '@styled-stytem/css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import TodoDashBoard from '@/components/TodoDashBoard'
import TodoFrame from '@/components/TodoFrame'
import Wrapper from '@/components/Wrapper'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App
