import { useContext } from 'react'
import { ModalContext, defaultState } from '../contexts'
import { ModalState } from '../types'

type ModalConfig = Omit<ModalState, 'open'>

export function useModal() {
  const { state, setState } = useContext(ModalContext)

  return {
    show(config: ModalConfig) {
      setState({ ...defaultState.state, ...config, open: true })
    },
    close() {
      setState({ ...state, open: false })
    },
  }
}
