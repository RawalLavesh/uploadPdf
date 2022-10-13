import { useState } from 'react'
import Image from '../image/Image'

import Label from '../label/Label'

import {
  DropdownBtn,
  DropdownContent,
  DropdownList,
  DropdownWrapper,
  IconWrapper,
  TextWrapper,
  ListIconWrapper,
  DropdownContentTextWrap,
} from './styles'

interface DropdownProps {
  label: string
  items: string[]
  borderColor?: string
  bgColor?: string
  height?: string
  borderRadius?: string
  chevronRight?: boolean
}

/* 
  This is a dropdown component. It has one value and an icon on the main field.

  The value in the field should be passed through "label" props and the 
  drop down values through "items" array as props.
*/

export const Dropdown = ({ label, items, chevronRight }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <DropdownWrapper>
      <DropdownBtn onClick={() => setIsActive(!isActive)}>
        <TextWrapper>
          <Label
            fontSize={'1rem'}
            fontStyle={'normal'}
            fontWeight={400}
            lineHeight={'1.5rem'}
            color={'#374253'}
          >
            {label}
          </Label>
        </TextWrapper>
        <IconWrapper>
          <Image
            image={require('../../assets/icons/ChevronDown.png')}
            alt={''}
          />
        </IconWrapper>
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {items.map((item, index) => {
            return (
              <DropdownList key={index}>
                <DropdownContentTextWrap>
                  <Label
                    fontSize={'1rem'}
                    fontStyle={'normal'}
                    fontWeight={400}
                    lineHeight={'1.5rem'}
                    color={'#192638'}
                  >
                    {item}
                  </Label>
                </DropdownContentTextWrap>
                {chevronRight && (
                  <ListIconWrapper>
                    <Image
                      image={require('../../assets/icons/ChevronRight.png')}
                      alt={''}
                    />
                  </ListIconWrapper>
                )}
              </DropdownList>
            )
          })}
        </DropdownContent>
      )}
    </DropdownWrapper>
  )
}
