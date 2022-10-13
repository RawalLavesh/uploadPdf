import { TooltipProps } from './ITooltip'
import {
  TooltipText,
  TooltipBox,
  TooltipArrow,
  ToolTipWrapper,
} from './styles'


const TooltipTop = ({ label, height, width }: TooltipProps) => {
  return (
    <ToolTipWrapper>
      <TooltipBox height={height} width={width}>
        <TooltipText>{label}</TooltipText>
      </TooltipBox>
      <TooltipArrow></TooltipArrow>
    </ToolTipWrapper>
  )
}

export default TooltipTop
