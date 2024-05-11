import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import { UserCredential } from '@/api/types/user'

export const todoStatusAtom = atom({ progress: 0, finished: 0, left: 0 })

export const pageAtom = atom(1)

export const pageSizeAtom = atom(1)

export const loginAtom = atomWithStorage<boolean>(
  'loginState',
  false,
  createJSONStorage(() => localStorage),
  { getOnInit: true }
)

export const userCredentialAtom = atomWithStorage<UserCredential | null>(
  'userCredential',
  null,
  createJSONStorage(() => localStorage),
  { getOnInit: true }
)
