import { MouseEventHandler } from 'react'
export interface CardHeaderProps {
  accordionHandler?: (e: MouseEventHandler<HTMLDivElement>) => void
  label: string
  amountValue?: string
  icon?: boolean
  isCollapsed?: boolean
  rotateIcon?: boolean
}
