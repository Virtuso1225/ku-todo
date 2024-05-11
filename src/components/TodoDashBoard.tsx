import { css } from '@styled-stytem/css'
import { useAtomValue } from 'jotai'

import { useLogout } from '@/api/hooks/auth'
import { useGetProgress } from '@/api/hooks/dashboard'
import Button from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import UsedTools from '@/components/UsedTools'
import { userCredentialAtom } from '@/lib/store/jotai'
import { useTheme } from '@/util/theme-provider'
import { useToggle } from '@/util/useToggle'

const TodoDashBoard = () => {
  const { setTheme } = useTheme()
  const [isChecked, setCheck] = useToggle(localStorage.getItem('theme') === 'light' ? false : true)

  const { progress, finished, left } = useGetProgress().data?.data ?? { progress: 0, finished: 0, left: 0 }
  const { mutate: logoutMutation } = useLogout()
  const handleTheme = () => {
    setTheme(isChecked ? 'light' : 'dark')
    setCheck()
  }

  const user = useAtomValue(userCredentialAtom)

  return (
    <Card
      className={css({
        display: 'flex',
        flexDir: 'column',
        border: 'base',
        // w: '300px',
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-between'
      })}
    >
      <div>
        <CardHeader>
          <CardTitle>Todo Dashboard</CardTitle>
          <CardDescription>Here you can see your status</CardDescription>
        </CardHeader>
        <CardContent className={css({ pt: 5, spaceY: 4, justifyContent: 'space-between' })}>
          <div
            className={css({
              display: 'flex',
              flexDir: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'stretch'
            })}
          >
            <Label className={css({ fontWeight: 800 })}>User</Label>
            <p className={css({ fontSize: 'sm' })}>{user?.username}</p>
          </div>
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
            <Progress value={progress} />
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 })}>
            <Label className={css({ fontWeight: 800 })}>Finished</Label>
            <p className={css({ fontSize: 'sm' })}>{finished}</p>
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 })}>
            <Label className={css({ fontWeight: 800 })}>Left Todos</Label>
            <p className={css({ fontSize: 'sm' })}>{left}</p>
          </div>
        </CardContent>
      </div>
      <Button className={css({ marginX: 5 })} onClick={() => logoutMutation()}>
        Logout
      </Button>
      <CardFooter className={css({ gap: 10 })}>
        <UsedTools />
      </CardFooter>
    </Card>
  )
}

export default TodoDashBoard
