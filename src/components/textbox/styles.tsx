import styled from 'styled-components'

import { Colors, Backgrounds, BorderColors } from './../../shared/styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  border-radius: 8px;
`
export const StyledError = styled.p`
  display: flex;
  color: red;
`
export const Main = styled.input`
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
  &:invalid {
    border: 1px solid ${BorderColors.Gray50};
  }
  &:focus {
    border: 2px solid ${BorderColors.Primary50};
    color: black;
  }
  &:required:valid {
    border: 2px solid ${BorderColors.Danger};
    background-color: #fef1ee;
  }
  box-sizing: border-box;
  border-radius: 8px;
  font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${Colors.NeutralText};
  outline: none;
`
