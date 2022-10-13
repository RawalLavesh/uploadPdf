interface InputFunc {
  (value: string): void | string | number | boolean
}

export interface SearchBarProps {
  placeHolder: string
  borderColor?: string
  onChange: InputFunc
  maxWidth?: string
  handleSearch: () => void
}
