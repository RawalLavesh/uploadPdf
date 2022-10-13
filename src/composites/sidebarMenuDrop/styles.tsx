import styled from 'styled-components'
import { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { SidebarDropProps } from './ISideBarMenuDrop'

import { Backgrounds, Colors } from '../../shared/styles'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  cursor: pointer;
  margin: 1rem 0rem 0rem 0rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${(props: SidebarDropProps) =>
    props.currentState ? Backgrounds.PrimaryBgStrongActive : Backgrounds.White};

  &:hover {
    background-color: ${(props: SidebarDropProps) =>
      props.currentState ? '' : Backgrounds.Gray10};
  }
`

export const StyledLabel = styled.div`
  order: 1;
  flex-grow: 1;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  order: 0;
  flex-grow: 0;
`

export const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  order: 2;
  flex-grow: 0;
  padding-right: 0.5rem;
  color: inherit;
`

export const StyledDropdownLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 8px;
`

export const DropdownLinkWrapper = styled.div`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: arrow;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 400;
  text-decoration: none;
  color: ${Colors.NeutralText};
  background-color: ${(props: SidebarDropProps) =>
    props.currentState ? Backgrounds.PrimaryBgStrongActive : Backgrounds.White};

  ${(props: SidebarDropProps) =>
    !props.currentState &&
    css`
      &:hover {
        background-color: ${Colors.Gray10};
      }
    `};
`

export const DropdownLink = styled(Link)`
  text-decoration: none;
`
