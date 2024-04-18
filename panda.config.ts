import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          suite: { value: 'var(--font-suite), sans-serif' }
        }
      }
    }
  },

  jsxFramework: 'react',
  // Optional: Emit artifacts to `node_modules` as a package.
  // The copy-paste component examples use `@shadow-panda/styled-system` as the import path of the generated files.
  // If you choose not to use this option, you should rewrite your component imports as needed.
  // @see https://panda-css.com/docs/references/config#emitpackage
  outdir: 'styled-system'
})
