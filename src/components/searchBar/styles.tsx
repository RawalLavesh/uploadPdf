import styled from 'styled-components'
import { Backgrounds, Colors } from '../../shared/styles'
import { SearchBarProps } from './ISearchBar'

export const Wrapper = styled.div`
  align-self: stretch;
  flex-grow: 1;
  max-width: ${(props: SearchBarProps) => props.maxWidth};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 16px;

  background: ${Backgrounds.White};
  mix-blend-mode: normal;

  border: 1px solid ${(props: SearchBarProps) => props.borderColor};
  border-radius: 4px;
`

export const StyledSearchBox = styled.input`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  border: none;
  box-sizing: border-box;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${Colors.Gray};
  outline: none;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 8px;
`
