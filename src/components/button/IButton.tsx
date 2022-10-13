import { ReactNode } from 'react'

export interface ButtonProps {
  type: string
  bgColor?: string
  color?: string
  children?: ReactNode
  borderColor?: string
  padding?: string
  borderRadius?: string
  prefixedIcon?: JSX.Element | string
  suffixedIcon?: JSX.Element | string
  onClick?: () => void | undefined
  onBlur?: () => void
  disabled?: boolean
  hover?: boolean
  hasBorder?: boolean
  iconWidth?: string
  iconHeight?: string
  borderLessBgColor?: string
  hoverBgColor?: string
  hoverTextColor?: string
  activeBgColor?: string
  focusBrColor?: string
}
