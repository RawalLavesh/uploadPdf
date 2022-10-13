import { CheckboxProps } from './ICheckBox'
import { Wrapper, StyledCheckbox, StyledLabel } from './styles'

const Checkbox = ({ bgColor, title, checkBoxId }: CheckboxProps) => {
  return (
    <Wrapper>
      <StyledCheckbox bgColor={bgColor} type="checkbox" id={checkBoxId} />
      {title && <StyledLabel htmlFor={checkBoxId}>{title}</StyledLabel>}
    </Wrapper>
  )
}

export default Checkbox
