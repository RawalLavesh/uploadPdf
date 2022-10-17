import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'
import { COLORS } from '../../../theme/Colors'

const BodyStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
  }
  #root {
    margin: 0 auto;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${BodyStyles}
`

export const MainPane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5 1 auto;
  min-height: 100vh;
`

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 32px;
  padding-left: 32px;
  gap: 8px;
  padding-top: 16px;
`

export const MainContentWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #ffffff;
  padding-bottom: 16px;
`
