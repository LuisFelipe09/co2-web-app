import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden; 
    background-color: #d3d8c6;
  }
  body{
    font-size: 62.5%;
    padding: 25px;
    overflow-x: hidden; 
  }
`
export { GlobalStyles }
