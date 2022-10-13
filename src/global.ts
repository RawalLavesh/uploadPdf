import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'
import { COLORS } from './theme/Colors'

const BodyStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'SourceSansPro-Regular', 'Open Sans', sans-serif;
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
  flex: 5;
  min-height: 100vh;
`

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 75%;
  color: ${COLORS.UI.Black};
  background-color: ${COLORS.Background.OffWhite1};
`

export const ArticleWrapper = styled.div`
  flex: 3;
  min-height: 100%;
  color: ${COLORS.UI.White};
`
export const AsideWrapper = styled.div`
  flex: 1;
  color: ${COLORS.UI.White};
  background-color: ${COLORS.Background.OffWhite1};
`
