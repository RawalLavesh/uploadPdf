import styled, { css } from 'styled-components'
import { Colors } from './../../shared/styles'
import { ButtonProps } from './IButton'

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: ${(ButtonProps: ButtonProps) =>
    ButtonProps.hasBorder
      ? ButtonProps.bgColor
      : ButtonProps.borderLessBgColor};
  color: ${(ButtonProps: ButtonProps) =>
    ButtonProps.hasBorder ? ButtonProps.color : Colors.PrimaryText};
  border: ${(ButtonProps: ButtonProps) =>
    ButtonProps.hasBorder ? `1px solid ${ButtonProps.borderColor}` : `0`};
  border-radius: ${(props: ButtonProps) => props.borderRadius};
  cursor: pointer;
  outline: none;
  padding: ${(ButtonProps: ButtonProps) => ButtonProps.padding};
  &:disabled {
    cursor: no-drop;
  }

  ${(ButtonProps: ButtonProps) =>
    ButtonProps.hover &&
    css`
      &:hover {
        background-color: ${(ButtonProps: ButtonProps) =>
          ButtonProps.hoverBgColor};
        color: ${(ButtonProps: ButtonProps) => ButtonProps.hoverTextColor};
      }
    `};

  ${(ButtonProps: ButtonProps) =>
    ButtonProps.activeBgColor &&
    css`
      &:active {
        background-color: ${(ButtonProps: ButtonProps) =>
          ButtonProps.activeBgColor};
      }
    `};

  ${(ButtonProps: ButtonProps) =>
    ButtonProps.focusBrColor &&
    css`
      &:focus {
        border: ${(ButtonProps: ButtonProps) => ButtonProps.focusBrColor};
      }
    `};
`
