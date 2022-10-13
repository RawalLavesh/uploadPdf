import styled from 'styled-components'
export interface AccountProps {
  accountTitle: string
  totalAmount?: string
  valueChange?: string
  pctChange?: string
  isValueDown: boolean
  buttonTitle?: string
  onClick?: () => void
  chevronIcon?: string
  cashValue: string
  margin: string
  marketValue: string
}

export const Wrapper = styled.div``

export const AccountBalanceWrapperOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  width: 616px;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 24px;
  gap: 8px;
  background: #f8fafc;
  :last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`

export const InnerWrapper = styled.div`
  p {
    :nth-child(1) {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      min-width: 140px;
    }
    :nth-child(2) {
      font-weight: 700;
      font-size: 20px;
      line-height: 32px;
      min-width: 120px;
    }
  }
`
