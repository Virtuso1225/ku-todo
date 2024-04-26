import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-stytem/css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Button from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/lib/zod/todo-form'

const TodoInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: ''
    }
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'flex-start',
        flexDir: 'column',
        gap: 6
      })}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={css({ display: 'flex', gap: 2, alignItems: 'center' })}>
          <FormField
            control={form.control}
            name="todo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={css({ fontWeight: 900 })}>Insert</FormLabel>
                <FormControl>
                  <div className={css({ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' })}>
                    <Input placeholder="Enter your todo!!" {...field} />
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
}

export default TodoInput
