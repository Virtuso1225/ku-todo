import { z } from 'zod'

export const formSchema = z.object({
  todo: z
    .string()
    .min(2, {
      message: 'todo must be at least 2 characters.'
    })
    .max(50)
})
