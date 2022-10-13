import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  RootContainer,
  StyledLogoContainer,
  StyledMenuListContainer,
  StyledBottomContainer,
  ProfileMenuContainer,
} from './styles'

import { MenuItem, ProfileMenuItem, FooterMenu } from './menuItem/MenuItem'

import Divider from '../../divider/Divider'
import { SvgWedbushLogo } from '../../svg/SvgWedbushLogo'
import { SvgIsoTypeSmall } from '../../svg/SvgIsoTypeSmall'

import { ClientContext } from '../../../services/clientContext/ClientContext'

const SidePaneContent = () => {
  const clientCtx = useContext(ClientContext)
  const isMenuOpen = clientCtx?.isSideMenuOpen

  useEffect(() => {
    window.onpopstate = () => {
      clientCtx?.setSelectedMenuItem({
        menuItemTitle: window.location.pathname?.toLowerCase().replace('/', ''),
        isSelected: true,
      })
      clientCtx?.setSelectedMenu({
        menuTitle:
          window.location.pathname === '/'
            ? ''
            : clientCtx?.selectedMenu.menuTitle,
        isSelected:
          window.location.pathname === '/'
            ? false
            : clientCtx?.selectedMenu.isSelected,
      })
    }
  }, [clientCtx])

  const handleLogoClick = () => {
    clientCtx?.setSelectedMenu({
      menuTitle: '',
      isSelected: false,
    })
    clientCtx?.setSelectedMenuItem({
      menuItemTitle: '',
      isSelected: false,
    })
  }

  return (
    <RootContainer>
      <StyledLogoContainer>
        <Link to={'/'} onClick={handleLogoClick}>
          {isMenuOpen ? <SvgWedbushLogo /> : <SvgIsoTypeSmall />}
        </Link>
      </StyledLogoContainer>

      <StyledMenuListContainer>
        <Divider thickness={'1px'} horizontal={true} bgColor={'#CBD5E1'} />
        <ProfileMenuContainer>
          <ProfileMenuItem />
        </ProfileMenuContainer>
        <Divider thickness={'1px'} horizontal={true} bgColor={'#CBD5E1'} />
        <MenuItem />
      </StyledMenuListContainer>
      <Divider thickness={'1px'} horizontal={true} bgColor={'#CBD5E1'} />

      <StyledBottomContainer>
        <FooterMenu />
      </StyledBottomContainer>
    </RootContainer>
  )
}

export default SidePaneContent
