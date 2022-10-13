export interface OptionProps {
  value: string
  label: string
}
export interface DefaultProps {
  value: string
  label: string
}

interface InputFunc {
  (value: string): void | string | boolean | number
}
export interface SelectDropdownProps {
  options: OptionProps[]
  onChange: InputFunc
  defaultValue?: DefaultProps
  value?: DefaultProps
  isMulti?: boolean
  icon?: string
  image?: string
  borderColor?: string
  borderRadius?: string
  isDisabled?: boolean
  isSearchable?: boolean
  indicatorSeparator?: boolean
  width?: string
  height?: string
  name?: string
}
