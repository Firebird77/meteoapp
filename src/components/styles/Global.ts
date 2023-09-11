import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after {
  box-sizing:inherit;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  font-family: 'Belanosima', sans-serif;
    background-color: white;
    box-sizing: border-box !important;
    -ms-box-sizing: border-box !important;
    color: #767676;
    font-size: 17px;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
  }

  a{
    text-decoration: none;
   color: #767676;
  }

  p{
    margin: 0;
  }
`

export default GlobalStyles
