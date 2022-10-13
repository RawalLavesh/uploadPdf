import { MouseEventHandler } from 'react'

interface InputFunc {
  (value: string): void | string | boolean | number
}
export interface FilterHeadProps {
  disabled?: boolean
  label: string
  type?: string
  placeholder?: string
  textboxValue?: string
  defaultValue?: string
  id?: string
  name?: string
  max?: string
  onChange: InputFunc
  value: string
}
