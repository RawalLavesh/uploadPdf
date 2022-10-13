import styled from 'styled-components'
export const Wrapper = styled.span`
  position: absolute;
  z-index: 1;
  bottom: 50px;
  right: 32px;

  &::before {
    position: absolute;
    content: '';
    border-top: 10px solid #60a5fa;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    left: 47%;
    bottom: -9px;
    z-index: 1;
  }
  &::after {
    position: absolute;
    content: '';
    border-top: 10px solid #eff6ff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    left: 47%;
    bottom: -8px;
    z-index: 6;
  }
`
export const ImageWrapper = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
`
export const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  width: 274px;
  background: #eff6ff;
  border: 1px solid #60a5fa;
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  span {
    font-weight: 600;
  }
`
export const TooltipImageWrapper = styled.div`
  position: absolute;
  width: 12.73px;
  height: 12.73px;
  left: calc(50% - 12.73px / 2 + 6.36px);
  top: 8.5px;
  border: 1px solid #60a5fa;
  border-radius: 2px;
  transform: rotate(-135deg);
`
