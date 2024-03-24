import React from 'react'
import { ModalState } from '../types'

interface IModalContext {
  state: ModalState
  setState: React.Dispatch<ModalState>
}

export const defaultState: IModalContext = {
  state: {
    open: false,
    title: '',
    size: 'sm',
    children: null,
  },
  setState: () => {},
}

export const ModalContext = React.createContext<IModalContext>(defaultState)
