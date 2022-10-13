import { useContext, Fragment, useState } from 'react'

import { SiteMenuList } from './MenuListData'
import { StyledLink } from './styles'

import SidebarMenuListItems from '../../../../composites/sidebarMenuListItems/SidebarMenuListItems'
import SidebarDrop from '../../../../composites/sidebarMenuDrop/SidebarDrop'

import { ClientContext } from '../../../../services/clientContext/ClientContext'

export const ProfileMenuItem = () => {
  const profilerMenuList = SiteMenuList.filter(
    (item) => item.category === 'profile'
  )
  const clientCtx = useContext(ClientContext)
  const clientName =
    clientCtx?.client.firstName + ' ' + clientCtx?.client.lastName

  const handleProfileCLick = (title: string) => {
    clientCtx?.setSelectedMenu({
      menuTitle: '',
      isSelected: false,
    })
    clientCtx?.setSelectedMenuItem({
      menuItemTitle: title?.toLowerCase().replace(/\s/g, ''),
      isSelected: true,
    })
  }

  return (
    <>
      {profilerMenuList.map((item, index) => {
        const path = '/' + clientName?.toLowerCase().replace(/\s/g, '-')
        const currentState =
          clientCtx?.selectedMenuItem.menuItemTitle ===
          item.name?.toLowerCase().replace(/\s/g, '')

        return (
          <StyledLink to={path} key={index} className="profile-link">
            <SidebarMenuListItems
              label={clientName}
              onClick={() => handleProfileCLick(item.name)}
              clicked={currentState}
            />
          </StyledLink>
        )
      })}
    </>
  )
}

export const MenuItem = () => {
  const defaultMenuList = SiteMenuList.filter(
    (item) => item.category === 'default'
  )
  const [toggle, setToggle] = useState<number | null>()
  const clientCtx = useContext(ClientContext)

  const handleDropdownToggling = (index: number, title: string) => {
    clientCtx?.setSelectedMenu({
      menuTitle: title,
      isSelected: true,
    })
    setToggle((prev) => {
      return prev === index ? null : index
    })
    clientCtx?.setIsSideMenuOpen(true)
  }

  const handleMenuItemClick = (title: string) => {
    clientCtx?.setSelectedMenu({
      menuTitle: '',
      isSelected: false,
    })
    clientCtx?.setSelectedMenuItem({
      menuItemTitle: title?.toLowerCase().replace(/\s/g, '-'),
      isSelected: true,
    })
  }

  return (
    <>
      {defaultMenuList.map((item, index) => {
        const path = '/' + item.name?.toLowerCase().replace(/\s/g, '-')
        const currentState =
          clientCtx?.selectedMenuItem.menuItemTitle ===
          item.name?.toLowerCase().replace(/\s/g, '-')
        return (
          <Fragment key={index}>
            {item.hasSubMenu ? (
              <SidebarDrop
                label={item.name}
                items={item.dropdownItem}
                onClick={() => handleDropdownToggling(index, item.name)}
                clicked={toggle === index}
              />
            ) : (
              <StyledLink to={path}>
                <SidebarMenuListItems
                  label={item.name}
                  onClick={() => handleMenuItemClick(item.name)}
                  clicked={currentState}
                />
              </StyledLink>
            )}
          </Fragment>
        )
      })}
    </>
  )
}

export const FooterMenu = () => {
  const footerMenuList = SiteMenuList.filter(
    (item) => item.category === 'action'
  )
  const clientCtx = useContext(ClientContext)

  const handleFooterMenuItemClick = (title: string) => {
    clientCtx?.setSelectedMenu({
      menuTitle: '',
      isSelected: false,
    })
    clientCtx?.setSelectedMenuItem({
      menuItemTitle: title?.toLowerCase().replace(/\s/g, ''),
      isSelected: true,
    })
  }

  return (
    <>
      {footerMenuList.map((item, index) => {
        const path = '/' + item.name?.toLowerCase().replace(/\s/g, '-')
        const currentState =
          clientCtx?.selectedMenuItem.menuItemTitle ===
          item.name?.toLowerCase().replace(/\s/g, '')

        return (
          <StyledLink to={path} key={index}>
            <SidebarMenuListItems
              label={item.name}
              onClick={() => handleFooterMenuItemClick(item.name)}
              clicked={currentState}
            />
          </StyledLink>
        )
      })}
    </>
  )
}
