import { defineRecipe } from '@pandacss/dev'

export const switchRootRecipe = defineRecipe({
  className: 'switch',
  description: 'Switch component',
  base: {
    display: 'inline-flex',
    w: 11,
    h: 6,
    flexShrink: 0,
    cursor: 'pointer',
    alignItems: 'center',
    rounded: 'full',
    border: 2,
    transition: 'colors',
    p: 0.5,
    '&[data-state=true]': { bg: 'primary' },
    '&[data-state=false]': { bg: 'input' }
  }
})

export const switchThumbRecipe = defineRecipe({
  className: 'switch-thumb',
  description: 'Switch thumb component',
  base: {
    pointerEvents: 'none',
    display: 'block',
    rounded: 'full',
    bg: 'background',
    h: 5,
    w: 5,
    shadow: 'lg',
    transition: 'transform',
    '&[data-state=true]': { transform: 'translate(20px)' }
  }
})
