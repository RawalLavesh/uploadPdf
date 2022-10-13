import styled from 'styled-components'
import { Icons } from '../../shared/GlobalStyle'
import { COLORS } from '../../theme/Colors'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: stretch;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  justify-content: space-around;
  overflow-y: hidden;
`
export const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex: 0 1 35%;
  background-image: url(${Icons.ArtBoard});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px 30px 0px 40px;
`
export const Heading = styled.div`
  flex-wrap: wrap;
  padding-left: 4px;
`
export const SubHeading = styled.div`
  flex-wrap: wrap;
`
export const StyledContentWrapper = styled.div`
  flex: 0 1 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  background-color: ${COLORS.UI.MilkyWhite};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2.125rem 0rem;
`

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 30rem;
  width: 40%;
  padding-top: 1%;
`
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-bottom: 1.2rem;
`

export const LoginHeading = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const EmailFlex = styled.div`
  display: flex;
  flex-direction: column;
`
export const PasswordFlex = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40%;
`
