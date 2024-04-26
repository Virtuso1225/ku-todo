import { css } from '@styled-stytem/css'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={css({ display: 'flex', h: 140, alignItems: 'center', gap: 27 })}>{children}</div>
}

export default Wrapper
