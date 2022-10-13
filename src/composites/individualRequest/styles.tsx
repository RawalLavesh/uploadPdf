import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const ButtonWrapper = styled.div`
  :hover + .ToolTip {
    position: absolute;
    visibility: visible;
    margin-left: 7rem;
    margin-bottom: 1.25rem;
    z-index: 10;
  }
`
export const ToolTipWrapper = styled.div`
  position: absolute;
  visibility: hidden;
`
export const RequestRowWrapper = styled.div`
  width: 100%;
`
export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
