import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useLogin } from '@/api/hooks/auth'
import Button from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormProps } from '@/lib/types/form'
import { loginFormSchema } from '@/lib/zod/login-form'

const LoginForm = ({ isFlipped, handleFlip }: FormProps) => {
  const { mutate: loginMutation } = useLogin()
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    loginMutation(values)
  }
  useEffect(() => {
    form.reset()
  }, [form, isFlipped])
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 5,
          alignItems: 'center',
          alignSelf: 'stretch'
        })}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
              <FormLabel className={css({ fontWeight: 900 })}>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} css={{ alignSelf: 'stretch' }} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
              <FormLabel className={css({ fontWeight: 900 })}>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} css={{ alignSelf: 'stretch' }} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={css({ display: 'flex', w: 'full', gap: 4 })}>
          <Button type="submit" className={css({ flex: 1, alignSelf: 'stretch' })}>
            Login
          </Button>
          <Button type="button" className={css({ flex: 1, alignSelf: 'stretch' })} onClick={() => handleFlip()}>
            Register
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
