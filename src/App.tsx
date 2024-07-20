import { css } from '@styled-stytem/css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'

import LoginForm from '@/components/CredentialForm'
import TodoDashBoard from '@/components/TodoDashBoard'
import TodoFrame from '@/components/TodoFrame'
import Wrapper from '@/components/Wrapper'
import { loginAtom } from '@/lib/store/jotai'
import InterceptProvider from '@/util/InterceptProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  const auth = useAtomValue(loginAtom)
  return (
    <QueryClientProvider client={queryClient}>
      <InterceptProvider />
      <div
        className={css({
          display: 'flex',
          w: 'full',
          h: 'lvh',
          alignItems: 'center',
          justifyContent: 'center'
        })}
      >
        {!auth && (
          <div
            className={css({
              position: 'absolute',
              w: 'full',
              h: 'lvh',
              zIndex: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backdropFilter: 'blur(5px)'
            })}
          >
            <LoginForm />
          </div>
        )}
        <Wrapper>
          <TodoFrame />
          <TodoDashBoard />
        </Wrapper>
      </div>
    </QueryClientProvider>
  )
}

export default App
