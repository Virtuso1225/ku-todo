import { css, cx } from '@styled-stytem/css'
import { input } from '@styled-stytem/recipes'
import { RecipeVariantProps, SystemStyleObject } from '@styled-stytem/types'
import { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  RecipeVariantProps<typeof input> & { css?: SystemStyleObject }

const Input = forwardRef<HTMLInputElement, InputProps>(({ css: cssProps, type, ...props }, ref) => {
  return <input type={type} className={cx(input(), css(cssProps))} ref={ref} {...props} />
})
Input.displayName = 'Input'

export { Input }
