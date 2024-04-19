import ReactDOM from 'react-dom/client'

import App from '@/App'
import '@/index.css'
import { ThemeProvider } from '@/util/theme-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light" storageKey="theme">
    <App />
  </ThemeProvider>
)
