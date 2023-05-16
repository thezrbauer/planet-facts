import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-color:#070724

}

body {

  
    text-align:center;
    font-family: 'Antonio', sans-serif;
    font-family: 'League Spartan', sans-serif;
}
`

export default GlobalStyle 