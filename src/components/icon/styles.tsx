import styled from "styled-components";
import {IconProps} from './IIcon'

export const StyledIcon = styled.img<IconProps>`
  margin: 0px 0px 0px ${(IconProps: IconProps) => IconProps.margin};
  width: ${(IconProps: IconProps) => IconProps.width};
  height: ${(IconProps: IconProps) => IconProps.height};
  cursor: pointer;
`;
