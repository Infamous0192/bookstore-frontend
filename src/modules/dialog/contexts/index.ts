import { createContext } from 'react'
import { DialogState, IDialogContext } from '../types'

export const defaultState: DialogState = {
  title: '',
  message: '',
  type: 'close',
  children: () => {
    return null
  },
}

export const DialogContext = createContext<IDialogContext>(null!)
