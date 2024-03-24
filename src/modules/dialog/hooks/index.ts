import { useContext } from 'react'
import { defaultState, DialogContext } from '../contexts'
import { DialogState } from '../types'

type DialogParams = Omit<DialogState, 'type'>

export function useDialog() {
  const dialog = useContext(DialogContext)

  return {
    confirm(config: DialogParams) {
      dialog.setState({
        ...config,
        type: 'confirm',
      })
    },
    warning(config: DialogParams) {
      dialog.setState({
        ...config,
        type: 'warning',
      })
    },
    success(config: DialogParams) {
      dialog.setState({
        ...config,
        type: 'success',
      })
    },
    close() {
      if (dialog.state.onClose) dialog.state.onClose()
      dialog.setState(defaultState)
    },
  }
}
