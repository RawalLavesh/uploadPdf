import { Fragment, useContext } from 'react'

import {
  Wrapper,
  IconWrapper,
  StyledLabel,
  ChevronWrapper,
  StyledDropdownLinks,
  DropdownLink,
  DropdownLinkWrapper,
} from './styles'
import { SidebarDropProps } from './ISideBarMenuDrop'

import Label from '../../components/label/Label'

import { ClientContext } from '../../services/clientContext/ClientContext'

import { COLORS } from '../../theme/Colors'

import {
  SvgChevronDownSmall,
  SvgChevronUpSmall,
} from '../../components/svg/SvgChevron'
import { SvgAccountsSmall } from '../../components/svg/SvgAccounts'
import { SvgDocumentSmall } from '../../components/svg/SvgDocument'
import { WDStyledSidebarLabel } from '../../components/ui/WDTypography'

const SidebarDrop = ({ label, items, onClick, clicked }: SidebarDropProps) => {
  const clientCtx = useContext(ClientContext)
  const currentState = clientCtx?.selectedMenu.isSelected && clicked
  const isMenuOpen = clientCtx?.isSideMenuOpen
  const iconFill = currentState ? COLORS.UI.Tertiary : COLORS.UI.Quaternary
  const togglingState =
    (clientCtx?.selectedMenu.menuTitle === label ||
      clientCtx?.selectedMenu.isSelected) &&
    clicked &&
    isMenuOpen

  const getIcon = (key: string) => {
    switch (key) {
      case 'Account':
        return <SvgAccountsSmall fillColor={iconFill} />

      case 'Documents':
        return <SvgDocumentSmall fillColor={iconFill} />
    }
  }

  const getChevron = () =>
    currentState ? (
      <SvgChevronUpSmall fillColor={COLORS.UI.Tertiary} />
    ) : (
      <SvgChevronDownSmall fillColor={COLORS.UI.Quaternary} />
    )

  const handleMenuItemClick = (title: string) => {
    clientCtx?.setSelectedMenuItem({
      menuItemTitle: title?.toLowerCase().replace(/\s/g, '-'),
      isSelected: true,
    })
    clientCtx?.setSelectedMenu({
      ...clientCtx?.selectedMenu,
      isSelected: false,
    })
  }

  return (
    <>
      <Wrapper currentState={currentState} onClick={onClick}>
        <IconWrapper>{getIcon(label)}</IconWrapper>
        {isMenuOpen && (
          <Fragment>
            <StyledLabel>
              <WDStyledSidebarLabel stateChange={currentState}>
                <Label>{label}</Label>
              </WDStyledSidebarLabel>
            </StyledLabel>
            <ChevronWrapper>{getChevron()}</ChevronWrapper>
          </Fragment>
        )}
      </Wrapper>

      {togglingState && (
        <StyledDropdownLinks>
          {items?.map((item, index) => {
            const pathName =
              '/' + item.routeTitle.toLowerCase().replace(/\s/g, '-')
            const presentState =
              clientCtx?.selectedMenuItem.menuItemTitle ===
              item.routeTitle?.toLowerCase().replace(/\s/g, '-')

            return (
              <DropdownLink to={pathName} key={index}>
                <DropdownLinkWrapper
                  onClick={() => handleMenuItemClick(item.routeTitle)}
                  currentState={presentState}
                >
                  <WDStyledSidebarLabel stateChange={presentState}>
                    <Label>{item.routeTitle}</Label>
                  </WDStyledSidebarLabel>
                </DropdownLinkWrapper>
              </DropdownLink>
            )
          })}
        </StyledDropdownLinks>
      )}
    </>
  )
}

export default SidebarDrop
