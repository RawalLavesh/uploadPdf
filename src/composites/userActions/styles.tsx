import styled from 'styled-components'

export const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0px 8px;
  cursor: pointer;
  &:hover {
    background-color: #dbeafe;
    border-radius: 4px;
    svg path {
      fill: #1e40af;
    }
    p {
      color: #1e40af;
    }
  }
  &:active {
    background-color: #bfdbfe;
    border-radius: 4px;
    svg path {
      fill: #1e3a8a;
    }
    p {
      color: #1e3a8a;
    }
  }
`
