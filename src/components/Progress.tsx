import { css, cva } from '@styled-stytem/css'
import { SystemStyleObject } from '@styled-stytem/types/system-types'

interface ProgressProps {
  value: number
  css?: SystemStyleObject
}

const defaultStyle = cva({
  base: {
    position: 'relative',
    h: 2,
    w: 'full',
    overflow: 'hidden',
    rounded: 'full',
    bg: 'secondary'
  }
})
const Progress = ({ value, css: cssProps }: ProgressProps) => {
  console.log('Progress')
  return (
    <div className={css(defaultStyle.raw(), cssProps)}>
      <div
        className={css({
          h: 'full',
          w: 'full',
          flex: 1,
          bg: 'primary',
          transition: 'all'
        })}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
}

export default Progress
