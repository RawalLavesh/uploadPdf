import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

// import '@fontsource/source-sans-pro'

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

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${BodyStyles}
`
