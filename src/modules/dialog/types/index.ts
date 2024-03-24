export type DialogType = 'warning' | 'confirm' | 'success' | 'close'

export type DialogChildren = (props: { close: VoidFunction }) => React.ReactNode

export interface DialogState {
  title: string
  message: string
  type: DialogType
  onClose?: VoidFunction
  children: DialogChildren
}

export interface IDialogContext {
  state: DialogState
  setState: React.Dispatch<DialogState>
}
