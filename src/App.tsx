import { css } from '@styled-stytem/css'
import { ChevronRight, Mail } from 'lucide-react'

import Button from '@/components/Button'
import { Input } from '@/components/Input'
import { Progress } from '@/components/Progress'
import { useTheme } from '@/util/theme-provider'

function App() {
  const { setTheme } = useTheme()
  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: '[6px]'
      })}
    >
      <div
        className={css({
          display: 'flex',
          w: 'full',
          alignItems: 'center',
          spaceX: '2'
        })}
      >
        <Button onClick={() => setTheme('light')}>Default</Button>
        <Button variant="outline" onClick={() => setTheme('dark')}>
          Outline
        </Button>
        <Button>
          <Mail className={css({ mr: 2, w: 4, h: 4 })} /> Button with icon
        </Button>
        <Button size="icon">
          <ChevronRight className={css({ w: 4, h: 4 })} />
        </Button>
        <Progress value={50} css={{ w: '1/4', h: 2 }} />
      </div>
      <Input placeholder="Email" id="email" css={{ w: '1/4' }} />
    </div>
  )
}

export default App
