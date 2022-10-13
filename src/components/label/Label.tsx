import { StyledLabel } from './styles'
import { FC } from 'react'
import { LabelProps } from './ILabel'

const Label: FC<LabelProps> = ({
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  color,
  children,
  className,
}: LabelProps) => (
  <StyledLabel
    fontSize={fontSize}
    fontStyle={fontStyle}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    color={color}
    className={className}
  >
    {children}
  </StyledLabel>
)

export default Label
