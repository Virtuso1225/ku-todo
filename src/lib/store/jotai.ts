import { atom } from 'jotai'

export const todoStatusAtom = atom({ progress: 0, finished: 0, left: 0 })

export const pageAtom = atom(1)

export const pageSizeAtom = atom(1)
