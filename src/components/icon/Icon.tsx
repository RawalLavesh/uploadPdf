import { StyledIcon } from './styles'
import { IconProps } from './IIcon'
export const Icon = ({ icon, margin, width, height }: IconProps) => {
  return (
    <StyledIcon
      src={icon}
      alt="Icon"
      margin={margin}
      width={width}
      height={height}
    ></StyledIcon>
  )
}
