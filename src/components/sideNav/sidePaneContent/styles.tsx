import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Backgrounds } from '../../../shared/styles'
import { Colors } from './../../../shared/styles'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #374253;
  height: 100%;
  padding: 16px;
`

export const StyledLogoContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;

  padding-top: 8px;
  padding-bottom: 16px;
  /* margin-left: 12px; */
  width: 100%;
`

export const StyledMenuListContainer = styled.div`
  flex: 1 1 100%;
  width: 100%;
`
export const ProfileMenuContainer = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  img:nth-child(1) {
    width: 32px;
    height: 32px;
  }

  .profile-wrapper {
    padding: 0px;
    margin-left: 8px;
    margin-right: 8px;
    height: fit-content;
  }

  .profile-link {
    margin-top: 0px;
  }
`

export const StyledBottomContainer = styled.div`
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  align-self: baseline;
  width: 100%;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  margin: 1rem 0rem 0rem 0rem;
  width: 100%;
  border-radius: 0.5rem;

  &:focus {
    font-weight: 700;
    background-color: ${Backgrounds.PrimaryBgStrongActive};
    color: ${Colors.White};
  }

  &:hover {
    background-color: ${Colors.Gray10};
  }
`
