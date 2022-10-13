import styled, { css } from 'styled-components'

import { Backgrounds, Colors } from '../../shared/styles'
import { AnchorTagProps, Visited } from './IAnchorTag'

export const StyledAnchor = styled.a<AnchorTagProps>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: baseline;
  color: ${(props: AnchorTagProps) => props.color};
  pointer-events: ${(props: AnchorTagProps) => props.pointer};
  cursor: ${(props: AnchorTagProps) => props.cursor};
  line-height: ${(props: AnchorTagProps) => props.lineHeight};
  text-decoration: ${(props: AnchorTagProps) => props.textDecoration};
  /* ${({ visited }: Visited) =>
    visited &&
    css`
      color: gray;
    `} */
  &:active {
    color: ${(props: AnchorTagProps) => props.color};
    text-decoration: ${(props: AnchorTagProps) => props.textDecoration};
  }
  &:visited {
    color: ${(props: AnchorTagProps) => props.color};
    text-decoration: ${(props: AnchorTagProps) => props.textDecoration};
  }
  &:disabled {
    color: ${(props: AnchorTagProps) => props.color};
  }
  &:hover {
    color: ${(props: AnchorTagProps) => props.color};
    text-decoration: ${(props: AnchorTagProps) => props.textDecoration};
  }
`
