import { ReactNode } from 'react'

export interface LabelProps {
  fontFamily?: string
  fontSize?: string
  fontStyle?: string
  fontWeight?: number
  lineHeight?: string
  color?: string
  children: ReactNode
  bgColor?: string
  letterSpacing?: string
  className?: string
}
