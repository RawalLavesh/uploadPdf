import { useState, Dispatch } from 'react'

import { StyledAnchor } from './styles'

import Image from '../image/Image'
import { AnchorTagProps, Visited } from './IAnchorTag'

export const AnchorTag = ({
  title,
  href,
  icon,
  color,
  fontSize,
  fontWeight,
  disabled,
  pointer,
  target,
  cursor,
  textDecoration,
  lineHeight,
}: AnchorTagProps) => {
  const [visited, setVisited] = useState<Visited>({ visited: false })

  const clickHandler = (stateSetter: Dispatch<Visited>) =>
    stateSetter({ visited: true })

  return (
    <StyledAnchor
      href={href}
      onClick={() => clickHandler(setVisited)}
      visited={visited}
      icon={icon}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      disabled={disabled}
      pointer={pointer}
      target={target}
      cursor={cursor}
      textDecoration={textDecoration}
      lineHeight={lineHeight}
    >
      {title}
      {icon && <Image image={icon} alt={'AnchorTagImage icon'} />}
    </StyledAnchor>
  )
}
