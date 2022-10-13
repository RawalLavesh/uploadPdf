import { useState } from 'react'

import { DatePickerProps, Wrapper, StyledInput } from './styles'

const DatePicker = ({
  borderColor,
  bgColor,
  placeHolder,
  padding,
  onChange,
  maxWidth,
}: DatePickerProps) => {
  const [inputDate, setInputDate] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value)
    onChange(inputDate)
  }
  console.log(inputDate)

  return (
    <Wrapper maxWidth={maxWidth}>
      <StyledInput
        type="text"
        name="date"
        id="date"
        placeholder={placeHolder}
        borderColor={borderColor}
        bgColor={bgColor}
        padding={padding}
        value={inputDate}
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default DatePicker
