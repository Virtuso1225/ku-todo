import { css } from '@styled-stytem/css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
        hi
      </div>
    </QueryClientProvider>
  )
}

export default App
