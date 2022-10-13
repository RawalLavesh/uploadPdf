import styled from 'styled-components'

import { Backgrounds, BorderColors } from '../../shared/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  background: ${Backgrounds.White};
  border: 1px solid ${BorderColors.Gray50};
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
`

export const HeadingWrapper = styled.div`
  flex: 1;
  padding: 12px 0px 12px 0px;
`

export const InnerContainer = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px;
  gap: 24px;

  p {
    width: 100%;
    text-align: right;
  }
`

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
`

export const ValueChangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`

export const PctChangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
`
