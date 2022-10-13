import styled from 'styled-components'
import { Colors } from '../../shared/styles'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LabelHeader = styled.div`
  flex: 5;
  order: 1;
  text-align: left;
  color: ${Colors.White};
  order: 0;
  white-space: pre;
`

export const LabelAmount = styled.div`
  flex: 1;
  order: 2;
  color: ${Colors.White};
  text-align: right;
  white-space: pre;
`
export const ChevronWrapper = styled.div`
  display: flex;
  order: 3;
  justify-content: flex-end;
  cursor: pointer;
  padding-left: 1rem;
`
