import { lazy, useDeferredValue, useState } from 'react'
import { defaultState, DialogContext } from '../contexts'
import { DialogState } from '../types'

const ConfirmDialog = lazy(() => import('./ConfirmDialog'))
const WarningDialog = lazy(() => import('./WarningDialog'))
const SuccessDialog = lazy(() => import('./SuccessDialog'))

interface Props {
  children: React.ReactNode
}

function renderDialog(state: DialogState) {
  switch (state.type) {
    case 'warning':
      return <WarningDialog {...state} />
    case 'confirm':
      return <ConfirmDialog {...state} />
    case 'success':
      return <SuccessDialog {...state} />
    default:
      return null
  }
}

const DialogProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<DialogState>(defaultState)

  const dialog = useDeferredValue(renderDialog(state))

  return (
    <DialogContext.Provider value={{ state, setState }}>
      {children}
      {dialog}
    </DialogContext.Provider>
  )
}

export default DialogProvider
