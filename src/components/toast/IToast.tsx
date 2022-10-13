export interface ToastProps {
  title?: string
  icon?: string
  image?: string
  text?: string
  Height?: string
  Width?: string
  type?: string
  span?: string
  openStatusCallback: (status: boolean) => void
}
