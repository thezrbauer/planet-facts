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

h2 {
  font-family: 'Antonio', sans-serif;
  font-size:40px;
  line-height:52px;
  letter-spacing: -1.5px;
  text-shadow: 2px 2px #ff00;
}

body {
    text-align:center;
    font-family: 'Antonio', sans-serif;
    font-family: 'League Spartan', sans-serif;
}
`

export default GlobalStyle 