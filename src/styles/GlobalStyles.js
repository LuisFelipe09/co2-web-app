import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden; 
  }
  body{
    font-size: 62.5%;
    overflow-x: hidden; 
  }
`
export { GlobalStyles }
