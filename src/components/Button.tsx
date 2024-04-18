import { css, cva, type RecipeVariantProps } from '@styled-stytem/css'
import { SystemStyleObject } from '@styled-stytem/types/system-types'

const buttonRecipe = cva({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2.5,
    cursor: 'pointer',
    borderRadius: 'md',
    fontFamily: 'suite',
    fontSize: 'sm',
    fontWeight: 500
  },
  variants: {
    variant: {
      default: { bg: 'slate.950', color: 'white', _hover: { transition: 'background 0.25s', opacity: 0.9 } },
      outline: {
        bg: '#fff',
        border: '1px solid #E2E8F0',
        color: 'slat.900',
        _hover: { bg: 'slate.100', transition: 'background 0.25s' }
      }
    },
    size: {
      default: { h: 10, px: 4, py: 2 },
      sm: { h: 9, rounded: 'md', px: 3 },
      lg: { h: 11, rounded: 'md', px: 8 },
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
