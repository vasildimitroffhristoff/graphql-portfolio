import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #6066f0;
    --dark: #121212;
  }

  html {
    font-size: 10px;
  }


  body {
    padding: 0;
    margin: 0;
    font-family: 'PT Sans';
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
  }

  body * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  `

export const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem;
`
