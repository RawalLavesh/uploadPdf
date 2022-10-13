import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-top: 1.25rem;
  color: ${COLORS.UI.Black};
  gap: 1rem;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
  &:disabled {
    background-color: ${COLORS.Background.Gray10};
  }
`
