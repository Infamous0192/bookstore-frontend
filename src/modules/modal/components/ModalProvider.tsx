import { useState } from 'react'
import { defaultState, ModalContext } from '../contexts'
import Modal from './Modal'

interface Props {
  children: React.ReactNode
}

const ModalProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(defaultState.state)

  function closeModal() {
    setState({ ...state, open: false })
  }

  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
      <Modal {...state} onClose={closeModal} />
    </ModalContext.Provider>
  )
}

export default ModalProvider
