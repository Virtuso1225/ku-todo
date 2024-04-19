import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: {
        base: '{colors.gray.50}',
        _dark: '#09090b'
      }
    },
    foreground: {
      value: {
        base: '{colors.gray.950}',
        _dark: '{colors.gray.50}'
      }
    },
    muted: {
      DEFAULT: {
        value: {
          base: '{colors.gray.100}',
          _dark: '{colors.gray.800}'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.500}',
          _dark: '{colors.gray.400}'
        }
      }
    },
    card: {
      DEFAULT: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.gray.950}'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.950}',
          _dark: '{colors.gray.50}'
        }
      }
    },
    popover: {
      DEFAULT: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.gray.950}'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.950}',
          _dark: '{colors.gray.50}'
        }
      }
    },
    border: {
      value: {
        base: '{colors.gray.200}',
        _dark: '{colors.gray.800}'
      }
    },
    input: {
      value: {
        base: '{colors.gray.200}',
        _dark: 'rgba(39,39,42)'
      }
    },
    primary: {
      DEFAULT: {
        value: {
          base: '#09090b',
          _dark: '{colors.gray.50}'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.gray.900}'
        }
      }
    },
    secondary: {
      DEFAULT: {
        value: {
          base: '{colors.gray.100}',
          _dark: 'rgba(39,39,42)'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.900}',
          _dark: '{colors.gray.50}'
        }
      }
    },
    accent: {
      DEFAULT: {
        value: {
          base: '{colors.gray.100}',
          _dark: 'rgba(39,39,42)'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.900}',
          _dark: '{colors.gray.50}'
        }
      }
    },
    destructive: {
      DEFAULT: {
        value: {
          base: '{colors.red.500}',
          _dark: '{colors.red.700}'
        }
      },
      foreground: {
        value: {
          base: '{colors.gray.50}',
          _dark: '{colors.red.50}'
        }
      }
    },
    ring: {
      value: {
        base: '{colors.gray.400}',
        _dark: '{colors.gray.300}'
      }
    }
  },
  borders: {
    base: { value: '1px solid {colors.border}' },
    input: { value: '1px solid {colors.input}' },
    primary: { value: '1px solid {colors.primary}' },
    destructive: { value: '1px solid {colors.destructive}' }
  },
  //   radii: {
  //     xl: { value: `calc({radii.radius} + 4px)` },
  //     lg: { value: `{radii.radius}` },
  //     md: { value: `calc({radii.radius} - 2px)` },
  //     sm: { value: 'calc({radii.radius} - 4px)' }
  //   },
  animations: {
    'accordion-down': { value: 'accordion-down 0.2s ease-out' },
    'accordion-up': { value: 'accordion-up 0.2s ease-out' }
  }
})
