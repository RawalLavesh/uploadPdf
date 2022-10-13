import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  gap: 8px;
  border-top: 1px solid #cbd5e1;
  padding: 16px 32px;
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  button {
    border: 1px solid #60a5fa;
    border-radius: 4px;
    padding: 8px 32px;
    background: transparent;
    &:active {
      border: 1px solid #60a5fa;
      background: #ffffff;
    }

    :last-child {
      color: #ffffff;
      background-color: #2563eb;
      :disabled {
        color: #a7afbc;
        background: #e2e8f0;
        border: 1px solid #E2E8F0;
        cursor: no-drop;
      }
    }
  }
`
