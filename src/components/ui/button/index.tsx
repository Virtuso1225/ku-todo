import { css, cx, type RecipeVariantProps } from '@styled-stytem/css'
import { button } from '@styled-stytem/recipes'
import { SystemStyleObject } from '@styled-stytem/types'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof button> & { css?: SystemStyleObject }

const Button = ({ variant, size, css: cssProps, ...props }: ButtonProps) => {
  return <button {...props} className={cx(button({ variant, size }), css(cssProps))}></button>
}
export default Button
