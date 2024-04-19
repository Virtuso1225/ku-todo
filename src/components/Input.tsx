import { css, cva } from '@styled-stytem/css'
import { RecipeVariantProps, SystemStyleObject } from '@styled-stytem/types'
import { forwardRef } from 'react'

const InputRecipe = cva({
  base: {
    display: 'flex',
    h: 10,
    w: 'full',
    rounded: 'md',
    border: 'input',
    bg: 'background',
    px: 3,
    py: 2,
    fontSize: 'sm',
    color: 'primary',
    ringOffset: 0.5,
    ringColor: 'ring',
    _file: { border: 0, bg: 'transparent', fontSize: 'sm', font: 'medium' },
    _placeholder: { color: 'muted.foreground' }
  }
})

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  RecipeVariantProps<typeof InputRecipe> & { css?: SystemStyleObject }

const Input = forwardRef<HTMLInputElement, InputProps>(({ css: cssProps, type, ...props }, ref) => {
  return <input type={type} className={css(InputRecipe.raw(), cssProps)} ref={ref} {...props} />
})
Input.displayName = 'Input'

export { Input }
