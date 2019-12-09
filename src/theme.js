import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #6066f0;
  }

  html {
    font-size: 10px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'PT Sans';
    font-size: 1.6rem;
    min-height: 100vh;
  }

  body * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  `
