import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const MasterWrapper = styled.div`
  display: flex;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  flex: 0 1 100%;
  flex-flow: column nowrap;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 4%;
  width: 100%;
`
export const SubWrapper = styled.div`
  display: flex;
  flex: 0 1 100%;
  flex-flow: column nowrap;
  box-sizing: border-box;
  border-radius: 8px;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`
export const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.UI.White};
  width: 100%;
  padding: 1rem 0;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const DownloadWrapper = styled.div`
  flex: 0 1 80%;
  padding-left: 0.5rem;
  a {
    display: flex;
    flex-direction: row;
    gap: 0.575rem;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-end;
  padding: 0.5rem 0.5rem;
  &:disabled {
    background-color: ${COLORS.Background.Gray10};
  }
`
