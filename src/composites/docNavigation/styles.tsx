import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const RootContainer = styled.nav`
  background-color: ${COLORS.UI.White};
  width: 100%;
`
export const LeftContainer = styled.div`
  flex: 0 1 15%;
  padding-bottom: 0.5rem;
  background-color: ${COLORS.UI.White};
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  flex: 0 1 35%;
  padding-bottom: 0.5rem;
  color: ${COLORS.UI.Gray60};
  background-color: ${COLORS.UI.White};
`
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const MiddleContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex: 1 0 50%;
  background-color: ${COLORS.UI.White};
  flex-flow: row wrap;
  flex-direction: row;
  a.nav-link {
    display: flex;
    color: ${COLORS.UI.NeutralText};
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    padding: 0.375rem 0.75rem;
    &.selected {
      border-bottom: 2px solid ${COLORS.UI.PrimaryText};
      color: ${COLORS.UI.PrimaryText};
    }
  }
`
export const NavbarInnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.5rem 3.5rem 0 3.5rem;
  gap: 2rem;
`
