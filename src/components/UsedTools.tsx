import { css } from '@styled-stytem/css'

import denoURL from '@/assets/deno.svg'
import pandaURL from '@/assets/panda.svg'
import reactQueryURL from '@/assets/react-query.svg'
import reactURL from '@/assets/react.svg'
const UsedTools = () => {
  return (
    <>
      <a href="https://panda-css.com">
        <img
          src={pandaURL}
          alt="panda logo"
          className={css({ cursor: 'pointer', _hover: { filter: 'drop-shadow(0 0 1em yellow)' } })}
        />
      </a>
      <a href="https://deno.com/">
        <img
          src={denoURL}
          alt="deno logo"
          className={css({ cursor: 'pointer', _hover: { filter: 'drop-shadow(0 0 1em rgb(151, 252, 182))' } })}
        />
      </a>
      <a href="https://tanstack.com/query/latest/docs/framework/react/overview">
        <img
          src={reactQueryURL}
          alt="react-query logo"
          className={css({ cursor: 'pointer', _hover: { filter: 'drop-shadow(0 0 1em rgb(204,76,70))' } })}
        />
      </a>
      <a href="https://react.dev/">
        <img
          src={reactURL}
          alt="react logo"
          className={css({ cursor: 'pointer', _hover: { filter: 'drop-shadow(0 0 1em #61dafbaa)' } })}
        />
      </a>
    </>
  )
}

export default UsedTools
