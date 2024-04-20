import * as SwitchPrimitives from '@radix-ui/react-switch'
import { switchRoot, switchThumb } from '@styled-stytem/recipes'
import { forwardRef } from 'react'

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ ...props }, ref) => (
  <SwitchPrimitives.Root data-state={props.checked ?? false} className={switchRoot()} {...props} ref={ref}>
    <SwitchPrimitives.Thumb data-state={props.checked ?? false} className={switchThumb()} />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
