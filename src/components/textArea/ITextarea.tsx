interface InputFunc {
  (value: string): void | string | boolean | number
}

export interface TextareaProps {
  id: string
  name: string
  placeholder: string
  onChange: InputFunc
  onBlur?: () => void
  ref?: void
  value: string
  border?: string
  disabled?: boolean
  required?: boolean
}
