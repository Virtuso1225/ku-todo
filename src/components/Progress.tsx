import { css, cva } from '@styled-stytem/css'
import { SystemStyleObject } from '@styled-stytem/types/system-types'

interface ProgressProps {
  value: number
  css?: SystemStyleObject
}

const defaultStyle = cva({
  base: {
    position: 'relative',
    h: 4,
    w: 'full',
    overflow: 'hidden',
    rounded: 'full',
    bg: 'slate.100'
  }
})
export const Progress = ({ value, css: cssProps }: ProgressProps) => {
  return (
    <div className={css(defaultStyle.raw(), cssProps)}>
      <div
        className={css({
          h: 'full',
          w: 'full',
          flex: 1,
          bg: 'slate.950',
          transition: 'all'
        })}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
}
