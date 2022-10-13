import styled from 'styled-components'

import { BorderColors, Backgrounds, Colors } from '../../shared/styles'

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

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  border-radius: 8px;
`

export const StyledTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  flex: 0 1 100%;
  background: ${Backgrounds.White};
  border: 1px solid ${BorderColors.Gray50};
  &:hover {
    border: 1px solid ${BorderColors.Primary5};
    color: ${Colors.Gray20};
  }
  &:active {
    border: 1px solid ${BorderColors.Primary60};
  }
  &:disabled {
    border: 1px solid ${BorderColors.Gray50};
    color: ${Colors.Gray};
    cursor: no-drop;
  }
  &:focus {
    border: 2px solid ${BorderColors.Primary50};
    color: ${Colors.Black};
  }
  &:required {
    border: 1px solid ${BorderColors.Danger};
  }
  &:required:valid {
    border: 1px solid ${BorderColors.Success2};
  }
  box-sizing: border-box;
  border-radius: 8px;
  font-family: SourceSansPro-Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #0f172a;
  outline: none;
`
