import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  padding: 1rem 1.5rem;
`
export const InnerContainer = styled.div`
  padding-bottom: 0.75rem;
`

export const AnchorWrapper = styled.div`
  display: flex;
  white-space: pre;
  gap: 0.25rem;
  a {
    padding-right: 6px;
    padding-left: 2px;
    border-right: 1.5px solid ${COLORS.Text.NeutralTextWeak};
    font-size: 12px;
    color: ${COLORS.Text.Primary};

    :first-child {
      padding-left: 0px;
    }

    :last-child {
      border-right: 0px;
    }
    &:active {
      color: #1e40af;
    }
    &:visited {
      color: #1e40af;
    }
    &:disabled {
      color: #a7afbc;
    }
    &:hover {
      color: #1e40af;
    }
  }
`
