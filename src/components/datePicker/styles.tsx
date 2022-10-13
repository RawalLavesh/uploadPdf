import styled from 'styled-components'

interface InputFunc {
  (value: string): void | string | boolean | number
}

export interface DatePickerProps {
  borderColor: string
  bgColor: string
  placeHolder: string
  padding: string
  onChange: InputFunc
  maxWidth: string
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 4px;
  max-width: ${(props: DatePickerProps) => props.maxWidth};
`

export const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: ${(props: DatePickerProps) => props.padding};
  outline: none;
  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  align-self: stretch;
`
