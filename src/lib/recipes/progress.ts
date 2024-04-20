import { defineRecipe } from '@pandacss/dev'

export const progressRecipe = defineRecipe({
  className: 'progress',
  description: 'A progress bar',
  base: {
    position: 'relative',
    h: 2,
    w: 'full',
    overflow: 'hidden',
    rounded: 'full',
    bg: 'secondary'
  }
})

export const progressIndicatorRecipe = defineRecipe({
  className: 'progress-indicator',
  description: 'A progress bar indicator',
  base: {
    h: 'full',
    w: 'full',
    flex: 1,
    bg: 'primary',
    transition: 'all'
  }
})
