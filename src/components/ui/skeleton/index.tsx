import { css, cx } from '@styled-stytem/css'

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx(css({ animation: 'pulse', rounded: 'md', bg: 'muted' }), className)} {...props} />
}

export { Skeleton }
