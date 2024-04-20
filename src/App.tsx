import { css } from '@styled-stytem/css'
import { ChevronRight, Mail } from 'lucide-react'

import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
// import { useTheme } from '@/util/theme-provider'
import { useToggle } from '@/util/useToggle'

function App() {
  // const { setTheme } = useTheme()
  const [checked, setChecked] = useToggle(false)

  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        flexDir: 'column',
        alignItems: 'center',
        gap: '[6px]'
      })}
    >
      <div
        className={css({
          display: 'flex',
          w: 'full',
          justifyContent: 'center',
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
        <Progress value={50} className={css({ w: '1/4' })} />
      </div>
      <Input placeholder="Email" id="email" css={{ w: '1/4' }} />
      <Switch checked={checked} onCheckedChange={setChecked} />
    </div>
  )
}

export default App
