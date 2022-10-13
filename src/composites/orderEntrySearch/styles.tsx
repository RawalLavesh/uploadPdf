import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 16px;
  position: relative;
`
export const SearchListItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: inset 0px -1px 0px #e5e5e5;
  padding: 16px 24px;
  :last-child(){
    box-shadow: none;
  }
`
export const ErrorMessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  p {
    padding-left: 10px;
    color: #c2410c;
  }
`
export const SearchListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //padding: 8px 8px 16px 8px;
  background: #ffffff;
  border: 1px solid #d0d7e2;
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  position: absolute;
  top: 85px;
  right: 40px;
  z-index: 1;
  width: 400px;
  gap: 8px;
  p {
    padding: 4px 8px;
  }

`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const RightWrapper = styled.div`
  display: flex;
`
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledDiv = styled.div`
  display: flex;
  span {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`
