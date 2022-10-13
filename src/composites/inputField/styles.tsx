import styled from 'styled-components'
interface InputFunc {
  (value: string): void | string | boolean | number
}
export interface InputFieldProps {
  disabled?: boolean
  label: string
  type?: string
  textboxPlaceholder?: string
  textboxValue?: string
  textboxDefaultValue?: string
  id?: string
  name?: string
  max?: string
  onChange: InputFunc
  value: string
}

export const InputWrapper = styled.div`
  width: 100%;
`

export const TextBoxWrap = styled.div``

export const LabelWrap = styled.div`
  padding: 0.25rem 0rem;
`
