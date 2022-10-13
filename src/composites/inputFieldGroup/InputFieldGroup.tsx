import { FlexItem, InputFieldGroupProps, Wrapper } from './styles'

import { InputField } from '../inputField/InputField'
import { useState } from 'react'

export const InputFieldGroup = ({
  label1,
  textboxPlaceholder1,
  textboxValue1,
  textboxDefaultValue1,
  type1,
  disabled1,
  id1,
  max1,
  label2,
  textboxPlaceholder2,
  textboxValue2,
  textboxDefaultValue2,
  type2,
  disabled2,
  id2,
  max2,
}: InputFieldGroupProps) => {
  const [valueOne, setValueOne] = useState('')
  const [valueTwo, setValueTwo] = useState('')
  console.log('**Value One** ' + valueOne)
  console.log('**Value Two** ' + valueTwo)

  return (
    <Wrapper>
      <FlexItem>
        <InputField
          label={label1}
          type={type1}
          textboxPlaceholder={textboxPlaceholder1}
          textboxValue={textboxValue1}
          textboxDefaultValue={textboxDefaultValue1}
          disabled={disabled1}
          value={valueOne}
          id={id1}
          max={max1}
          onChange={(value: string) => setValueOne(value)}
        />
      </FlexItem>
      <FlexItem>
        <InputField
          label={label2}
          type={type2}
          textboxPlaceholder={textboxPlaceholder2}
          textboxValue={textboxValue2}
          textboxDefaultValue={textboxDefaultValue2}
          disabled={disabled2}
          value={valueTwo}
          id={id2}
          max={max2}
          onChange={(value: string) => setValueTwo(value)}
        />
      </FlexItem>
    </Wrapper>
  )
}
