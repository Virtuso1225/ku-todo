import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { css, cx } from '@styled-stytem/css'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { forwardRef } from 'react'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cx(
      css({
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        rounded: 'sm',
        px: 2,
        py: 1.5,
        fontSize: 'sm',
        outline: 'none',
        _focus: { bg: 'accent' },
        _open: { bg: 'accent' }
      }),
      inset && css({ pl: 8 }),
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className={css({ ml: 'auto', h: 4, w: 4 })} />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cx(
      css({
        z: '50',
        minW: '8rem',
        overflow: 'hidden',
        rounded: 'md',
        bg: 'popover',
        p: 1,
        color: 'popover.foreground',
        shadow: 'lg',
        _open: { animation: 'slideDownAndFade' }
      }),
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(
        css({
          z: '50',
          minW: '8rem',
          overflow: 'hidden',
          rounded: 'md',
          bg: 'popover',
          p: 1,
          color: 'popover.foreground',
          shadow: 'lg',
          border: 'base',
          _open: { animation: 'slideDownAndFade' }
        }),
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cx(
      css({
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        alignItems: 'center',
        rounded: 'sm',
        px: 2,
        py: 1.5,
        fontSize: 'sm',
        outline: 'none',
        transition: 'colors',
        _focus: { bg: 'accent', color: 'accent.foreground' },
        _disabled: { pointerEvents: 'none', opacity: 0.5 }
      }),
      inset && css({ pl: 8 }),
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cx(
      css({
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        alignItems: 'center',
        rounded: 'sm',
        py: 1.5,
        pl: 8,
        pr: 2,
        fontSize: 'sm',
        outline: 'none',
        transition: 'colors',
        _focus: { bg: 'accent', color: 'accent.foreground' },
        _disabled: { pointerEvents: 'none', opacity: 0.5 }
      }),
      className
    )}
    checked={checked}
    {...props}
  >
    <span
      className={css({
        position: 'absolute',
        left: 2,
        display: 'flex',
        h: 3.5,
        w: 3.5,
        alignItems: 'center',
        justifyContent: 'center'
      })}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className={css({ h: 4, w: 4 })} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cx(
      css({
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        alignItems: 'center',
        rounded: 'sm',
        py: 1.5,
        pl: 8,
        pr: 2,
        fontSize: 'sm',
        outline: 'none',
        transition: 'colors',
        _focus: { bg: 'accent', color: 'accent.foreground' },
        _disabled: { pointerEvents: 'none', opacity: 0.5 }
      }),
      className
    )}
    {...props}
  >
    <span
      className={css({
        position: 'absolute',
        left: 2,
        display: 'flex',
        h: 3.5,
        w: 3.5,
        alignItems: 'center',
        justifyContent: 'center'
      })}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className={css({ h: 2, w: 2, fill: 'current' })} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx(css({ px: 2, py: 1.5, fontSize: 'sm', fontWeight: 'semibold' }), inset && css({ pl: 8 }), className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cx(css({ mx: -1, my: 1, h: '1px', bg: 'muted' }), className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cx(css({ ml: 'auto', fontSize: 'xs', letterSpacing: '0.1em', opacity: 0.6 }), className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
}
