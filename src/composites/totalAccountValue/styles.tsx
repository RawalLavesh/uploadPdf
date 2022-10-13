import styled from 'styled-components'
import { TotalAccountValueProps } from './ITotalAccountValue'

export const Wrapper = styled.div`
  //flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: ${(props: TotalAccountValueProps) => props.gap};
  white-space: pre;
`

export const InnerWrapper = styled.div`
  p {
    :nth-child(1) {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      min-width: 156px;
    }

    :nth-child(2) {
      font-weight: 700;
      font-size: 20px;
      line-height: 32px;
      min-width: 156px;
    }
  }
`
