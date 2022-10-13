import { Container } from './styles'
import Button from '../../components/button/Button'
import Label from '../../components/label/Label'
import { ButtonRowProps } from './IButtonRow'

export const ButtonRow = ({
  buttons,
  bgColor,
  color,
  borderColor,
  padding,
  borderRadius,
  hasBorder,
  fontSize,
  fontWeight,
  lineHeight,
  iconWidth,
  iconHeight,
  borderLessBgColor,
}: ButtonRowProps) => {
  return (
    <Container>
      {buttons.map((item, i) => (
        <Button
          key={i}
          type={'button'}
          bgColor={bgColor}
          color={color}
          borderColor={borderColor}
          padding={padding}
          borderRadius={borderRadius}
          hasBorder={hasBorder}
          prefixedIcon={item.prefixedIcon}
          suffixedIcon={item.suffixedIcon}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          onClick={item.onClick}
          onBlur={item.onBlur}
          borderLessBgColor={borderLessBgColor}
        >
          <Label
            fontWeight={fontWeight}
            fontSize={fontSize}
            lineHeight={lineHeight}
          >
            {item.children}
          </Label>
        </Button>
      ))}
    </Container>
  )
}
