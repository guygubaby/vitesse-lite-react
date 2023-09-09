import { create } from 'zustand'

interface State {
  count: number
  inc: () => void
  dec: () => void
}

export const userStore = create<State>(
  set => ({
    count: 0,
    inc: () => set(state => ({ count: state.count + 1 })),
    dec: () => set(state => ({ count: state.count - 1 })),
  }),
)
