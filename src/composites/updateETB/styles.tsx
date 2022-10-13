import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const SecondTextBox = styled.div`
  color: ${COLORS.UI.Black};
  padding: 0.5rem 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 0 1 50%;
  gap: 0.5rem;
`
export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin: 1rem 0rem 0.3125rem 0rem;
`
