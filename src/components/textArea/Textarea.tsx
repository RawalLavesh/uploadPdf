import { TextareaProps, Wrapper, StyledTextarea } from './styles'

export const Textarea = ({
  placeholder,
  onChange,
  id,
  name,
  value,
  ref,
  onBlur,
  border,
  disabled,
  required,
}: TextareaProps) => {
  return (
    <Wrapper>
      <StyledTextarea
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onBlur={onBlur}
        ref={ref}
        value={value}
        border={border}
        disabled={disabled}
        required={required}
      />
    </Wrapper>
  )
}
