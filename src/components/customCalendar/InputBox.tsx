import { Icons } from '../../shared/GlobalStyle'
import Button from '../button/Button'
import { Icon } from '../icon/Icon'
import { InputBoxProps } from './ICustomCalendar'
import { InputWrapper, StyledInput } from './styles'

const InputBox = ({ name, placeholder, value, onClick }: InputBoxProps) => {
  return (
    <InputWrapper>
      <StyledInput
        readOnly
        onClick={onClick}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={() => value}
      />
      <Button
        bgColor={'transparent'}
        color={'transparent'}
        type="button"
        borderColor={'transparent'}
        prefixedIcon={<Icon icon={Icons.Calendar} />}
        onClick={onClick}
      />
    </InputWrapper>
  )
}

export default InputBox
