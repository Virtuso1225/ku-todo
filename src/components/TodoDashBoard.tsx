import { css } from '@styled-stytem/css'

import denoURL from '@/assets/deno.svg'
import pandaURL from '@/assets/panda.svg'
import reactQueryURL from '@/assets/react-query.svg'
import reactURL from '@/assets/react.svg'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/util/theme-provider'
import { useToggle } from '@/util/useToggle'

const TodoDashBoard = () => {
  const { setTheme } = useTheme()
  const [isChecked, setCheck] = useToggle(localStorage.getItem('theme') === 'light' ? false : true)
  const handleTheme = () => {
    setTheme(isChecked ? 'light' : 'dark')
    setCheck()
  }
  return (
    <Card className={css({ border: 'base', w: '400px' })}>
      <CardHeader>
        <CardTitle>Todo Dashboard</CardTitle>
        <CardDescription>Here you can see your status</CardDescription>
      </CardHeader>
      <CardContent className={css({ pt: 5, spaceY: 4, justifyContent: 'space-between' })}>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 3 })}>
          <div
            className={css({
              display: 'flex',
              flexDir: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'stretch'
            })}
          >
            <Label className={css({ fontWeight: 800 })}>Theme Selection</Label>
            <Switch checked={isChecked} onCheckedChange={handleTheme} />
          </div>
          <div className={css({ display: 'flex', flexDir: 'row', gap: 3, fontSize: 'sm' })}>
            <p>current mode: </p>
            <p className={css({ fontWeight: 800 })}>{isChecked ? 'Dark' : 'Light'}</p>
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 3 })}>
          <p className={css({ fontSize: 'sm', fontWeight: 800 })}>Progress</p>
          <Progress value={50} />
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 })}>
          <Label className={css({ fontWeight: 800 })}>Finished</Label>
          <p className={css({ fontSize: 'sm' })}>5</p>
        </div>
        <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 })}>
          <Label className={css({ fontWeight: 800 })}>Left Todos</Label>
          <p className={css({ fontSize: 'sm' })}>5</p>
        </div>
      </CardContent>
      <CardFooter className={css({ justifyContent: 'center', gap: 10 })}>
        <a href="https://panda-css.com">
          <img
            src={pandaURL}
            alt="panda logo"
            className={css({ cursor: 'pointer', _hover: { filter: 'drop-shadow(0 0 1em yellow)' } })}
          />
        </a>
        <a href="https://deno.com/">
          <img
            src={denoURL}
            alt="deno logo"
            className={css({ cursor: 'pointer', _hover: { filter: 'drop-shadow(0 0 1em rgb(151, 252, 182))' } })}
          />
        </a>
        <a href="https://tanstack.com/query/latest/docs/framework/react/overview">
          <img
            src={reactQueryURL}
            alt="react-query logo"
            className={css({ cursor: 'pointer', _hover: { filter: 'drop-shadow(0 0 1em rgb(204,76,70))' } })}
          />
        </a>
        <a href="https://react.dev/">
          <img
            src={reactURL}
            alt="react logo"
            className={css({ cursor: 'pointer', _hover: { filter: 'drop-shadow(0 0 1em #61dafbaa)' } })}
          />
        </a>
      </CardFooter>
    </Card>
  )
}

export default TodoDashBoard
