import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
import { ToastProps } from './IToast'

const handleBgColor = (type: string) => {
  switch (type) {
    case 'success':
      return `background:${COLORS.Background.OffWhite4}; border:1px solid ${COLORS.Border.SuccessStrong};`
    case 'danger':
      return `background:${COLORS.Background.OffWhite5}; border:1px solid ${COLORS.Border.Salmon1}`
    case 'warning':
      return `background:${COLORS.Background.OffWhite6}; border:1px solid ${COLORS.Border.Orange}`
    default:
      return `background:${COLORS.Background.Primary}; border:1px solid ${COLORS.Border.PrimaryBorderStrong}`
  }
}
export const Master = styled.div<ToastProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Main = styled.div<ToastProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  animation: fadeOut ease 12s;
  padding: 8px 16px;
  width: 470px;
  ${(Props: { type: string }) => handleBgColor(Props.type)};
  gap: 8px;
  box-shadow: 0px 2px 6px -2px ${COLORS.BoxShadow.Shadow1};
  border-radius: 4px;
`
export const ToastWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const ToastIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ToastTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 400px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 8px;
`
export const ToastImage = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 15px;
  height: 15px;
  cursor: pointer;
`
export const ToastText = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: flex-start;
  margin-top: 8px;
  word-break: break-all;
`
