import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'

export const bodyStyles = css``

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    ${bodyStyles}
  }
 `
