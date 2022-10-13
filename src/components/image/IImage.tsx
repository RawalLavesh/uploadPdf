import { ReactElement } from 'react'

export interface ImageProps {
  image?: string | SVGElement | ReactElement
  alt: string
  width?: string
  height?: string
}
