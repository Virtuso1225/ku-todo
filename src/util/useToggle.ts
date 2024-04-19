import { useCallback, useState } from 'react'

export const useToggle = (defaultValue: boolean = false) => {
  const [value, setValue] = useState(defaultValue)
  const toggle = useCallback(() => setValue(v => !v), [])
  return [value, toggle] as const
}
