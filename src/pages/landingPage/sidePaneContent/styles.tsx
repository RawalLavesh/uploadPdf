import styled from 'styled-components'
import { COLORS } from '../../../theme/Colors'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${COLORS.UI.Gray70};
  padding: 16px 12.71px 24px 24px;
  background-color: ${COLORS.UI.White};
  border-radius: 10px;
  margin-top: 24px;
  margin-left: 24px;
`

export const StyledLogoContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-left: -8px;
  padding-right: 10px;
`

export const StyledMenuListContainer = styled.div`
  flex: 1 1 100%;
  min-height: 100%;
  cursor: pointer;
`

export const StyledBottomContainer = styled.div`
  flex: 0 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
`
