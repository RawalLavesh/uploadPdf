import React from 'react'

import {
  StyledGridContainer,
  StyledHeader,
  StyledSideNav,
  StyledMain,
  StyledFooter,
} from './styles'

import { GlobalStyles } from '../../../styles/globals'
interface ChildrenProps {
  isSideMenuOpen: boolean | undefined
  header?: React.ReactNode
  sideNav?: React.ReactNode
  footer?: React.ReactNode
  main?: React.ReactNode
}

const DefaultLayout = ({
  isSideMenuOpen = true,
  header,
  sideNav,
  footer,
  main,
}: ChildrenProps) => {
  return (
    <>
      <GlobalStyles />
      <StyledGridContainer isSideMenuOpen={isSideMenuOpen}>
        <StyledHeader>{header}</StyledHeader>
        <StyledSideNav>{sideNav}</StyledSideNav>
        <StyledMain>{main}</StyledMain>
        <StyledFooter>{footer}</StyledFooter>
      </StyledGridContainer>
    </>
  )
}

export default DefaultLayout
