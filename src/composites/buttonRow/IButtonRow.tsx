import { ReactNode } from 'react'

export interface IndividualButtonProps {
  children: ReactNode
  prefixedIcon?: JSX.Element | string
  suffixedIcon?: JSX.Element | string
  onClick?: () => void
  onBlur?: () => void
}

export interface ButtonRowProps {
  buttons: IndividualButtonProps[]
  bgColor?: string
  color: string
  borderColor?: string
  padding: string
  borderRadius?: string
  hasBorder?: boolean
  fontWeight: number
  fontSize: string
  lineHeight: string
  iconWidth?: string
  iconHeight?: string
  onClick?: () => void
  borderLessBgColor?: string
}
