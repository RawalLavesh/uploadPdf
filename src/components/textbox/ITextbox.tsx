interface InputFunc {
  (value: string): void | string | boolean | number
}

export interface TextboxProps {
  backgroundColor?: string
  type?: string
  placeholder?: string
  disabled?: boolean
  value?: string
  defaultValue?: string
  onChange?: InputFunc
  reference?: React.RefObject<HTMLInputElement>
  onBlur?: () => void
  errorText?: string
  required?: boolean
  name?: string
  id?: string
  max?: string
  width?: string
}
