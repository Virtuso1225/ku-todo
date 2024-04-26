import { defineConfig } from '@pandacss/dev'

import {
  switchRootRecipe,
  switchThumbRecipe,
  buttonRecipe,
  progressRecipe,
  progressIndicatorRecipe,
  inputRecipe,
  paginationRecipe,
  paginationContentRecipe,
  paginationEllipsisRecipe,
  checkboxRecipe,
  labelRecipe
} from './src/lib/recipes'
import { semanticTokens } from './src/lib/semantic-tokens'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/preset-panda'],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        switchRoot: switchRootRecipe,
        switchThumb: switchThumbRecipe,
        button: buttonRecipe,
        progress: progressRecipe,
        progressIndicator: progressIndicatorRecipe,
        input: inputRecipe,
        pagination: paginationRecipe,
        paginationContent: paginationContentRecipe,
        paginationEllipsis: paginationEllipsisRecipe,
        checkbox: checkboxRecipe,
        label: labelRecipe
      },
      tokens: {
        fonts: {
          suite: { value: 'var(--font-suite), sans-serif' }
        }
      }
    },
    semanticTokens
  },
  globalCss: {
    html: {
      h: 'full'
    },
    body: {
      fontFamily: 'suite',
      bg: { base: 'white', _dark: 'background' }
    }
  },
  jsxFramework: 'react',
  // Optional: Emit artifacts to `node_modules` as a package.
  // The copy-paste component examples use `@shadow-panda/styled-system` as the import path of the generated files.
  // If you choose not to use this option, you should rewrite your component imports as needed.
  // @see https://panda-css.com/docs/references/config#emitpackage
  outdir: 'styled-system'
})
