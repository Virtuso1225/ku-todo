import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { usePostTodo } from '@/api/hooks/to-do'
import Button from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/lib/zod/todo-form'

const TodoInput = memo(() => {
  const { mutate: addTodo } = usePostTodo()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: ''
    }
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    addTodo(values.todo, {
      onSuccess: () => console.log('success')
    })
  }
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'flex-start',
        flexDir: 'column',
        gap: 6,
        alignSelf: 'stretch'
      })}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 2,
            alignItems: 'center',
            alignSelf: 'stretch'
          })}
        >
          <FormField
            control={form.control}
            name="todo"
            render={({ field }) => (
              <FormItem className={css({ display: 'flex', flexDir: 'column', alignSelf: 'stretch' })}>
                <FormLabel className={css({ fontWeight: 900 })}>Insert</FormLabel>
                <FormControl>
                  <div
                    className={css({
                      display: 'flex',
                      gap: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch'
                    })}
                  >
                    <Input placeholder="Enter your todo!!" {...field} css={{ alignSelf: 'stretch' }} />
                    <Button type="submit">Submit</Button>
                  </div>
                </FormControl>
                <FormDescription>This is will be added to the DenoKV</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
})

export default TodoInput
