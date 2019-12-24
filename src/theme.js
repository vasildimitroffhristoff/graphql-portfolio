import styled, { createGlobalStyle, css } from 'styled-components'

const transitionAnimation = css`
  .fade-enter {
    opacity: 0;
    z-index: 1;
    transform: translateY(-20px);
  }
  .fade-appear p,
  .fade-enter p {
    transform: translateY(-5px);
    opacity: 0;
  }
  .fade-appear-active,
  .fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms linear 150ms, transform 300ms ease-out 150ms;
  }
  .fade-appear-active p,
  .fade-enter.fade-enter-active p {
    transform: translateY(0);
    opacity: 1;
  }
  .fade-appear-active p:nth-child(2),
  .fade-enter.fade-enter-active p:nth-child(2) {
    transition: opacity 300ms linear 300ms, transform 300ms ease-out 300ms;
  }
  .fade-appear-active p:nth-child(3),
  .fade-enter.fade-enter-active p:nth-child(3) {
    transition: opacity 300ms linear 400ms, transform 300ms ease-out 400ms;
  }
  .fade-appear-active p:nth-child(4),
  .fade-enter.fade-enter-active p:nth-child(4) {
    transition: opacity 300ms linear 500ms, transform 300ms ease-out 500ms;
  }
  .fade-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 150ms linear, transform 150ms ease-in;
  }
`

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

  /* animation transition */
  ${transitionAnimation}
  /* end animation transition */
  `

export const Wrapper = styled.div`
  max-width: 104rem;
  margin: 0 auto;
  padding: 2rem;
`
