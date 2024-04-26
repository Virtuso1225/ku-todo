import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { css, cx } from '@styled-stytem/css'
import { checkbox } from '@styled-stytem/recipes'
import { Check } from 'lucide-react'
import { forwardRef } from 'react'

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cx('peer', checkbox(), className)} {...props}>
    <CheckboxPrimitive.Indicator
      className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'current' })}
    >
      <Check className={css({ w: 4, h: 4 })} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
