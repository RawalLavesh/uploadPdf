import styled from 'styled-components'
import { ChildrenProps } from './IDefaultLayout'

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-columns: ${({ isSideMenuOpen }: ChildrenProps) =>
    isSideMenuOpen ? '240px 1fr' : '80px 1fr'};
  /* grid-template-rows: 40px 1fr 80px; */
  grid-template-rows: 40px 1fr 40px;
  grid-template-areas:
    'sideNav header'
    'sideNav main'
    'sideNav footer';
  height: 100vh;
`

export const StyledHeader = styled.div`
  grid-area: header;
  background-color: #f8fafc;
`

export const StyledSideNav = styled.div`
  grid-area: sideNav;
`

export const StyledMain = styled.div`
  grid-area: main;
  /* margin-top: 40px; */
  background-color: #f8fafc;
`

export const StyledAside = styled.div`
  grid-area: aside;
`

export const StyledFooter = styled.div`
  grid-area: footer;
  padding-top: 44px;
  background-color: #f8fafc !important;
`
