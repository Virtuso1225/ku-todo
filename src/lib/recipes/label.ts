import { defineRecipe } from '@pandacss/dev'

export const labelRecipe = defineRecipe({
  className: 'label',
  description: 'Label component',
  base: {
    fontSize: 'sm',
    fontWeight: 'medium',
    lineHeight: 1,
    _peerDisabled: { cursor: 'not-allowed', opacity: 70 }
  }
})
