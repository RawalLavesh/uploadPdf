import { StyledButton } from './styles'
import { ButtonProps } from './IButton'

/**
 * creates customizable button
 */
const Button = ({
  type,
  bgColor,
  color,
  children,
  borderColor,
  padding,
  borderRadius,
  prefixedIcon,
  suffixedIcon,
  disabled,
  onClick,
  onBlur,
  hover,
  hasBorder = true,
  borderLessBgColor,
  hoverBgColor,
  hoverTextColor,
  activeBgColor,
  focusBrColor,
  
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      className="hover-button"
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
      hover={hover}
      hasBorder={hasBorder}
      borderLessBgColor={borderLessBgColor}
      hoverBgColor={hoverBgColor}
      hoverTextColor={hoverTextColor}
      activeBgColor={activeBgColor}
      focusBgColor={focusBrColor}
    >
      {prefixedIcon && prefixedIcon}
      {children}
      {suffixedIcon && suffixedIcon}
    </StyledButton>
  )
}

export default Button
