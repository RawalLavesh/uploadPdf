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
export const ReviewLocate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`
export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 90%;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const ReviewTopContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.Background.NeutralMedium};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;
`
export const FormContainer = styled.form`
  display: flex;
  width: 100%;
`
export const DownloadContainer = styled.div`
  display: flex;
  flex: 0 1 10%;
  align-items: center;
  justify-content: flex-end;
`

export const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.UI.Black};
`
export const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.UI.Black};
  height: 4rem;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.UI.White};
  width: 100%;
  min-height: 6rem;
  padding: 1rem 0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: ${COLORS.Background.White};
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.Background.Primary5};
    border-radius: 4px;
  }
`
export const DownloadButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const SearchButtonWrapper = styled.div`
  right: 0.5rem;
  position: absolute;
  display: flex;
  align-items: center;
  height: inherit;
`
export const FlexItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const DownloadWrapper = styled.div`
  padding-left: 0.5rem;
  a {
    display: flex;
    flex-direction: row;
    gap: 0.575rem;
  }
`
export const SearchTerm = styled.div`
  display: flex;
  border-radius: 8px 0 0 8px;
  color: ${COLORS.UI.FaintGreen};
  height: 100%;
  position: relative;
  input {
    width: 10rem;
    padding-right: 2rem;
  }
`
export const DropdownWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0.5rem;
  top: -2rem;
  padding: 0.5rem;
  width: 13rem;
  z-index: 999;
  background: ${COLORS.UI.White};
  border: 0.0625rem solid ${COLORS.UI.Gray50};
  box-shadow: 0rem 0.125rem 0.375rem -0.125rem ${COLORS.BoxShadow.Shadow1};
  border-radius: 0.5rem;
  cursor: pointer;
`
export const DropdownList = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${COLORS.UI.Black};
`
export const MoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const ButtonContainer = styled.div`
  background-color: ${COLORS.UI.White};
  border: none;
  button {
    border: none;
    background-color: transparent;
  }
`
export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
`
