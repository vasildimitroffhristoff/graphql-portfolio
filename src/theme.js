import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #6066f0;
    --dark: #121212;
    --grey: #d6d6d6;
    --light: #fafafa;
  }

  html {
    font-size: 10px;
  }


  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
    background-color: var(--light);
  }

  body * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 4rem;
  }
  `

export const Wrapper = styled.div`
  max-width: 104rem;
  margin: 0 auto;
  padding: 2rem;
`
