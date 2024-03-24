export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface ModalState {
  open: boolean
  title: string
  size?: ModalSize
  children: React.ReactNode
}
