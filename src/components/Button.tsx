import { css, cva, type RecipeVariantProps } from '@styled-stytem/css'
import { SystemStyleObject } from '@styled-stytem/types'

const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2.5,
    cursor: 'pointer',
    rounded: 'md',
    fontSize: 'sm',
    fontWeight: 500
  },
  variants: {
    variant: {
      default: {
        bg: 'primary',
        color: 'primary.foreground',
        _hover: { transition: 'background 0.25s', bg: 'primary/90' }
      },
      outline: {
        bg: 'background',
        border: 'input',
        color: 'primary',
        _hover: { transition: 'background 0.25s', bg: 'accent', color: 'accent.foreground' }
      }
    },
    size: {
      default: { h: 10, px: 4, py: 2 },
      sm: { h: 9, px: 3 },
      lg: { h: 11, px: 8 },
      icon: { h: 10, w: 10 }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof buttonRecipe> & { css?: SystemStyleObject }

const Button = ({ variant, size, css: cssProps, ...props }: ButtonProps) => {
  return <button {...props} className={css(buttonRecipe.raw({ variant, size }), css.raw(cssProps))}></button>
}
export default Button
