import {
  LeftContainer,
  MiddleContainer,
  NavbarInnerContainer,
  RootContainer,
  RightContainer,
  DateWrapper,
} from './styles'
import { FooterMenu } from '../pages/landingPage/sidePaneContent/menuItem/MenuItem'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/LoginAuthContext'
import { Icons } from '../shared/GlobalStyle'
import Label from '../components/label/Label'
import { WDLabelUser } from '../components/ui/WDLabel'

const Navigation = () => {
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return month.concat('/').concat(day).concat('/').concat(year)
  }

  const loginContext = useContext(AuthContext)
  const [showInventory, setShowInventory] = useState(false)

  useEffect(() => {
    loginContext.user.roleName === 'Admin'
      ? setShowInventory(true)
      : setShowInventory(false)
  }, [])

  return (
    <RootContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavLink to="/submit">
            <img src={Icons.WedbushLogo} alt="Wedbush Logo" />
          </NavLink>
        </LeftContainer>
        <MiddleContainer>
          <NavLink
            to="/submit"
            className={(isActive) =>
              'nav-link' + (isActive.isActive ? ' selected' : '')
            }
          >
            Coverage List
          </NavLink>
          <NavLink
            to="/submit"
            className={(isActive) =>
              'nav-link' + (isActive.isActive ? ' selected' : '')
            }
          >
            Valtable
          </NavLink>
          <NavLink
            to="/submit"
            className={(isActive) =>
              'nav-link' + (isActive.isActive ? ' selected' : '')
            }
          >
            Equity Research Directory
          </NavLink>
          <NavLink
            to="/docupload"
            className={(isActive) =>
              'nav-link' + (isActive.isActive ? ' selected' : '')
            }
          >
            Market Maker List
          </NavLink>
          <NavLink
            to="/reviewlocate"
            className={(isActive) =>
              'nav-link' + (isActive.isActive ? ' selected' : '')
            }
          >
            Upcoming Events
          </NavLink>
        </MiddleContainer>
        <RightContainer>
          <DateWrapper>{`Today is ${formatDate(new Date())}`}</DateWrapper>
          <WDLabelUser>
            <Label>{loginContext.user.userName}</Label>
          </WDLabelUser>
          <FooterMenu />
        </RightContainer>
      </NavbarInnerContainer>
    </RootContainer>
  )
}

export default Navigation
