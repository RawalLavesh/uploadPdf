import React from 'react'
import { TextboxProps } from './ITextbox'

import { Main, Wrapper } from './styles'

export const Textbox = ({
  disabled,
  type,
  placeholder,
  required,
  onChange,
  onBlur,
  defaultValue,
  name,
  id,
  max,
  value,
  reference,
  width,
}: TextboxProps) => {
  return (
    <Wrapper>
      <Main
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange && onChange(e.target.value)
        }
        required={required}
        obBlur={onBlur}
        max={max}
        ref={reference}
        width={width}
      ></Main>
    </Wrapper>
  )
}
