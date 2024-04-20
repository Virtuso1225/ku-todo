import { defineRecipe } from '@pandacss/dev'

export const inputRecipe = defineRecipe({
  className: 'input',
  description: 'Input component',
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
