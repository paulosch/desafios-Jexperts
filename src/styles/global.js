import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background: ${props =>
    props.blue ? 'rgba(36, 123, 160, 1)' : 'rgba(112, 193, 179, 1)'};
  font-family: 'Montserrat', sans-serif;
  color: #FFF;
}
`

export default GlobalStyle
