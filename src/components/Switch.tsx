import { css } from '@styled-stytem/css'

interface SwitchProps {
  checked: true | false
  onChange: (checked: true | false) => void
}

const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <button
      data-state={checked}
      className={css({
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
      })}
      onClick={() => onChange(checked)}
    >
      <div
        data-state={checked}
        className={css({
          pointerEvents: 'none',
          display: 'block',
          rounded: 'full',
          bg: 'background',
          h: 5,
          w: 5,
          shadow: 'lg',
          transition: 'transform',
          '&[data-state=true]': { transform: 'translate(20px)' }
        })}
      />
    </button>
  )
}

export default Switch
