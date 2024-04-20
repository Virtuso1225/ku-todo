import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cx } from '@styled-stytem/css'
import { progress, progressIndicator } from '@styled-stytem/recipes'
import { forwardRef } from 'react'

const Progress = forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={cx(progress(), className)} {...props}>
    <ProgressPrimitive.Indicator
      className={progressIndicator()}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
