import styled from 'styled-components'
import { LabelProps } from './ILabel'

export const StyledLabel = styled.p<LabelProps>`
  font-family: ${(props: LabelProps) => props.fontFamily};
  font-style: ${(props: LabelProps) => props.fontStyle};
  font-weight: ${(props: LabelProps) => props.fontWeight};
  font-size: ${(props: LabelProps) => props.fontSize};
  line-height: ${(props: LabelProps) => props.lineHeight};
  color: ${(props: LabelProps) => props.color};
  letter-spacing: ${(props: LabelProps) => props.letterSpacing};
  margin: 0;
`
