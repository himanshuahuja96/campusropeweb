import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    line-height: 1.5;
    background-color: #f6f2ef;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app {
    min-height: 100%;
    min-width: 100%;
    margin: 0;
    line-height: 1.5;
    background-color: #f6f2ef;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  .link-no-decoration {
    text-decoration: none
  }
`;

export default GlobalStyle;
