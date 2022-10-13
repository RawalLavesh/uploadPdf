import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
import { TooltipProps } from './ITooltip'

export const ToolTipWrapper = styled.div``

export const TooltipText = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: ${COLORS.UI.Black};
`
export const TooltipBox = styled.div<TooltipProps>`
  background: ${COLORS.Background.Primary};
  padding: 1rem;
  box-sizing: border-box;
  height: ${(Props: TooltipProps) => Props.height};
  width: ${(Props: TooltipProps) => Props.width};
  border: 1px solid ${COLORS.Border.PrimaryBorderStrong};
  box-shadow: 0px 2px 6px -2px ${COLORS.BoxShadow.Shadow1} ;
  border-radius: 0.5rem;
`
export const TooltipArrow = styled.div`
  box-sizing: border-box;
  width: 0.7956rem;
  height: 0.7956rem;
  left: calc(50% - 12.73px / 2 - 25.14px);
  border: 1px solid ${COLORS.Border.PrimaryBorderStrong};
  background: ${COLORS.Background.Primary};
  border-bottom: transparent;
  border-right: transparent;
  border-radius: 2px 0px 2px 0px;
  transform: rotate(-45deg);
  margin: -35px 0px 0px -5.8px;
`
