import { defineRecipe } from '@pandacss/dev'

export const checkboxRecipe = defineRecipe({
  className: 'checkbox',
  description: 'Checkbox component',
  base: {
    cursor: 'pointer',
    w: 4,
    h: 4,
    border: '1px solid',
    borderColor: 'primary',
    flexShrink: 0,
    rounded: 'sm',
    ringOffset: 'background',
    _focusVisible: {
      outline: 'none',
      ring: 2,
      ringColor: 'ring',
      ringOffset: 2
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 50
    },
    _checked: {
      bg: 'primary',
      color: 'primary.foreground'
    }
  }
})
