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
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#2f3136;
  }

  #root{
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: stretch;
    height: 100vh;
    overflow: hidden;
  }
  
  button {
    font-family: 'Ubuntu', sans-serif;
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
  button:focus-visible,
  select:focus-visible{
    outline: 3px dotted #5865f2;
  }

  ::selection {
    background-color: #5865f2a3;
    color:#fff;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-corner {
    background-color: #0c0c0c;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #0c0c0c;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #50535a;
  }
`;
