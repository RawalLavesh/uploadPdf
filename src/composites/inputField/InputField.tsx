import { useState } from 'react'

/** Internal imports - which are coming from within the current directory */
import { InputFieldProps, InputWrapper, LabelWrap, TextBoxWrap } from './styles'

/** external imports - which are coming from outside of the current directory */
import Label from '../../components/label/Label'
import { Textbox } from '../../components/textbox/Textbox'

/** Here goes the global files imports - shared/styles.ts. These comments are only for the reference purpose. No need of
 * giving these comments for imports.
 */

/**
 * Every component must contain some description commented which states about the functionality of the
 * component and also about the properties that it takes.
 */
export const InputField = ({
  disabled,
  label,
  type,
  textboxPlaceholder,
  textboxDefaultValue,
  name,
  id,
  max,
  value,
  onChange,
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <LabelWrap>
        <Label color={''}>{label}</Label>
      </LabelWrap>
      <TextBoxWrap>
        <Textbox
          placeholder={textboxPlaceholder}
          type={type}
          value={value}
          disabled={disabled}
          defaultValue={textboxDefaultValue}
          name={name}
          id={id}
          max={max}
          onChange={onChange}
        />
      </TextBoxWrap>
    </>
  )
}
