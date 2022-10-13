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
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.UI.White};
  width: 100%;
  padding: 1rem 0;
`
export const SearchTerm = styled.div`
  display: flex;
  border-radius: 8px 0 0 8px;
  outline: none;
  color: ${COLORS.UI.FaintGreen};
  height: 2rem;
  position: relative;
  input {
    width: 10rem;
    padding-right: 2rem;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const FlexItem = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 2.8125rem;
`
export const AnchorWrapper = styled.div`
  flex: 0 1 20%;
  padding-top: 0.625rem;
`

export const Bulk = styled.div`
  padding: 2.8125rem 10.625rem 1.25rem 9.375rem;
`
export const DivWrapper = styled.div`
  &.relative-position {
    position: relative;
  }
`
export const DropdownWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 1.4rem;
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