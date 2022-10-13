import styled, { css } from 'styled-components'

import { Colors } from '../../shared/styles'
import { SidebarMenuListItemsProps } from './ISideBarMenuListItems'
import { COLORS } from './../../theme/Colors'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${(props: SidebarMenuListItemsProps) => props.bgColor};

  ${(props: SidebarMenuListItemsProps) =>
    !props.clicked &&
    css`
      &:hover {
        background-color: ${Colors.Gray10};
      }
    `};
`

export const StyledLabel = styled.div`
  overflow: hidden;
  letter-spacing: 0.02em;
  order: 1;
  flex-grow: 1;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  color: inherit;
`

export const AvatarCircle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${COLORS.Background.Primarytext};
`
