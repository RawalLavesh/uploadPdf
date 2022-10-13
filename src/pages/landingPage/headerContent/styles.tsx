import styled from 'styled-components'
import { COLORS } from '../../../theme/Colors'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.UI.Black};
  background-color: ${COLORS.Background.Gray10};
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
`
