import { css } from '@styled-stytem/css'
import { ChevronRight, Mail } from 'lucide-react'

import Button from '@/components/Button'

function App() {
  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        flexDir: 'column',
        // maxW: 'sm',
        alignItems: 'flex-start',
        gap: '[6px]'
      })}
    >
      <div
        className={css({
          display: 'flex',
          w: 'full',
          // maxW: 'sm',
          alignItems: 'center',
          spaceX: '2'
        })}
      >
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button>
          <Mail className={css({ mr: 2, w: 4, h: 4 })} /> Button with icon
        </Button>
        <Button size="icon">
          <ChevronRight className={css({ w: 4, h: 4 })} />
        </Button>
      </div>
    </div>
  )
}

export default App
