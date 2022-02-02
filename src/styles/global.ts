import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#2f3136;
  }
  
  button {
    font-family: 'Montserrat', sans-serif;
    border: none;
    cursor:pointer;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }

  a:focus-visible,
  input:focus-visible,
  button:focus-visible{
    outline: 2px dotted #5865f2;
  }
`;
