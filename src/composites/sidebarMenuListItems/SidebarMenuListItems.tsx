import { useContext } from 'react'

import { Wrapper, IconWrapper, AvatarCircle } from './styles'

import Label from '../../components/label/Label'
import { SidebarMenuListItemsProps } from './ISideBarMenuListItems'

import { SvgQuotesSmall } from '../../components/svg/SvgQuotes'
import { SvgContactUsSmall } from '../../components/svg/SvgContactUs'
import { SvgSignOutSmall } from '../../components/svg/SvgSignOut'
import { ClientContext } from '../../services/clientContext/ClientContext'

import { Backgrounds } from '../../shared/styles'
import { COLORS } from '../../theme/Colors'
import {
  WDStyledAvatarLabel,
  WDStyledSidebarLabel,
} from '../../components/ui/WDTypography'
import SvgTradeSmall from '../../components/svg/SvgTrade'

/**
 * Creates a sidebar menu item with customizable icon and background color.
 */
const SidebarMenuListItems = ({
  label,
  onClick,
  clicked,
}: SidebarMenuListItemsProps) => {
  const clientCtx = useContext(ClientContext)
  const isMenuOpen = clientCtx?.isSideMenuOpen

  const getIcon = (key: string) => {
    switch (key) {
      case 'Trade':
        return (
          <SvgTradeSmall
            fillColor={clicked ? COLORS.UI.Tertiary : COLORS.UI.Quaternary}
          />
        )
      case 'Quotes & Charts':
        return (
          <SvgQuotesSmall
            fillColor={clicked ? COLORS.UI.Tertiary : COLORS.UI.Quaternary}
          />
        )

      case 'Contact Us':
        return (
          <SvgContactUsSmall
            fillColor={clicked ? COLORS.UI.Tertiary : COLORS.UI.Quaternary}
          />
        )

      case 'Sign Out':
        return (
          <SvgSignOutSmall
            fillColor={clicked ? COLORS.UI.Tertiary : COLORS.UI.Quaternary}
          />
        )

      default:
        return (
          <AvatarCircle>
            <WDStyledAvatarLabel>
              <Label>{clientCtx?.client.clientInitials}</Label>
            </WDStyledAvatarLabel>
          </AvatarCircle>
        )
    }
  }
  const backgroundColor = clicked
    ? Backgrounds.PrimaryBgStrongActive
    : Backgrounds.White

  return (
    <Wrapper
      className="profile-wrapper"
      onClick={onClick}
      bgColor={backgroundColor}
      clicked={clicked}
    >
      <IconWrapper>{getIcon(label)}</IconWrapper>
      {isMenuOpen && (
        <WDStyledSidebarLabel stateChange={clicked}>
          <Label>{label}</Label>
        </WDStyledSidebarLabel>
      )}
    </Wrapper>
  )
}

export default SidebarMenuListItems
