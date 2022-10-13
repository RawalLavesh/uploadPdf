import Select from 'react-select'
import { Wrapper } from './styles'
import { SelectDropdownProps } from './ISelectDropdown'
import { CSSObjectWithLabel } from 'react-select'

import { StyledSelect } from './styles'
import { COLORS } from '../../theme/Colors'

const SelectDropdown = ({
  onChange,
  defaultValue,
  value,
  isMulti,
  borderRadius,
  options,
  isDisabled,
  isSearchable,
  indicatorSeparator,
  width,
  height,
  name,
}: SelectDropdownProps) => {
  const handleOnChange = (newValue: any) => {
    onChange(newValue.value)
  }

  const customStyles = {
    control: (provided: any) => {
      return {
        ...provided,
        width: width,
        height: height,
        minHeight: height,
        borderRadius: borderRadius,
        display: 'flex',
        justifyContent: 'flex-start',
      }
    },
    valueContainer: (provided: any) => {
      return {
        ...provided,
        justifyContent: 'flex-start',
      }
    },
    menuList: (provided: any) => {
      return {
        ...provided,
        justifyContent: 'flex-start',
      }
    },
    indicatorsContainer: (provided: any) => {
      return {
        ...provided,
        height: '100%',
      }
    },
  }

  return (
    <>
      {!indicatorSeparator ? (
        <Wrapper width={width}>
          <Select
            options={options}
            onChange={handleOnChange}
            defaultValue={defaultValue}
            isMulti={isMulti}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            components={{
              IndicatorSeparator: () => null,
            }}
            name={name}
            value={value}
            styles={customStyles}
          />
        </Wrapper>
      ) : (
        <Wrapper width={width}>
          <Select
            options={options}
            onChange={handleOnChange}
            defaultValue={defaultValue}
            isMulti={isMulti}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            name={name}
            value={value}
            styles={customStyles}
          />
        </Wrapper>
      )}
    </>
  )
}

export default SelectDropdown

export const FilterHeadDropdown = ({
  onChange,
  defaultValue,
  options,
  isDisabled,
  isSearchable,
  value,
}: SelectDropdownProps) => {
  const customStyles = {
    control: () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4px 8px',
      borderRadius: '8px',
      border: '1px solid ' + COLORS.UI.Border,
      backgroundColor: COLORS.UI.Tertiary,
      cursor: 'pointer',
    }),

    option: (provided: CSSObjectWithLabel) => ({
      ...provided,
      display: 'flex',
      padding: '8px 16px',
      cursor: 'pointer',
    }),

    singleValue: (provided: CSSObjectWithLabel) => {
      const opacity = isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'
      const display = 'flex'
      const alignItems = 'center'
      const justifyContent = 'space-between'
      const color = COLORS.Text.NeutralTextWeak
      const padding = 0

      return {
        ...provided,
        opacity,
        transition,
        display,
        alignItems,
        justifyContent,
        color,
        padding,
      }
    },

    valueContainer: (provided: CSSObjectWithLabel) => ({
      ...provided,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      padding: 0,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    }),

    dropdownIndicator: () => {
      const color = COLORS.Icons.NeutralIcon
      const display = 'flex'
      const width = '24px'
      const height = '24px'
      const alignItems = 'center'
      const justifyContent = 'center'

      return { color, display, width, height, alignItems, justifyContent }
    },
  }

  return (
    <StyledSelect
      options={options}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      styles={customStyles}
      components={{
        IndicatorSeparator: () => null,
      }}
      value={value}
      onChange={(selectedOption: string) => onChange(selectedOption)}
    />
  )
}