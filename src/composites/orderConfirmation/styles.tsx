import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
export const OrderConformationPopUp = styled.div`
  background: ${COLORS.Background.NeutralBackground};
  // position: fixed;
  left: 0;
  height: auto;
  position: relative;
  width: 60%;
  top: 0;
  padding: 46px 0;
  z-index: 999;
`
export const OrderTitle = styled.div`
  font-size: 24px;
  line-height: 32px;
  color: #0f172a;
  font-weight: 700;
  margin: 0 0 16px;
`

export const OrderSubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  color: #0f172a;
  font-weight: 700;
  margin: 0;
`
export const OrderSubTitleShort = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #0f172a;
  font-weight: 400;
  margin: 0;
`
export const ModelHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-flow: column;
  margin: 0 auto 16px;
  max-width: 532px;
  width: 100%;
  svg {
    margin: 0 auto 22.74px;
  }
`

export const ModelContent = styled.div``
export const ModelBody = styled.div`
  // height: 250px;
  // overflow: hidden;
  // overflow-y: scroll;
  max-width: 550px;
  margin: 0 auto 16px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
export const ButtonCenter = styled.div`
  text-align: center;
  width: 100%;
  justify-content: center;
  display: flex;
  button {
    font-weight: 600;
    font-size: 16px;
    margin: 0 5px;
  }
`
export const ClosePopUp = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`
export const PopCard = styled.div`
  border: ${(props: any) => (props.popup ? '1px solid #cbd5e1' : 'none')};
  padding: ${(props: any) => (props.popup ? '40px 40px 24px' : '0')};
  max-width: 532px;
  margin: 0 auto 16px;
  border-radius: 8px;
  width: 100%;
  &:last-child {
    margin: 0 auto 0;
  }
`
export const List = styled.div`
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  justify-content: space-between;
  padding: 0 25px 15px;
  margin: 0 auto 16px;
  font-size: 16px;
  line-height: 24px;
  color: #0f172a;
  max-width: 408px;
  width: 100%;
  align-items: end;
  &:last-child {
    border-bottom: none;
  }
`

export const Strong = styled.strong`
  display: block;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`
