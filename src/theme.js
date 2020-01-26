import styled, { createGlobalStyle, css } from 'styled-components'

const transitionAnimation = css`
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .fade-enter,
  .fade-appear {
    opacity: 0;
    z-index: 1;
  }

  .fade-appear-active,
  .fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in 150ms, transform 200ms ease-in 150ms;
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

  .fade-appear .landing-subtitle,
  .fade-enter .landing-subtitle {
    transform: translateY(-5px);
    opacity: 0;
  }

  .fade-appear-active .landing-subtitle,
  .fade-enter-active .landing-subtitle {
    opacity: 1;
    transition: opacity 600ms linear 2000ms, transform 300ms ease-in 2000ms;
    transform: translateY(0);
  }

  .fade-appear .me,
  .fade-enter .me {
    opacity: 0;
  }

  .fade-appear-active .me,
  .fade-enter-active .me {
    opacity: 1;
    transition: opacity 600ms linear;
  }
`

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #6066f0;
    --blue: #0099ff;
    --dark: #121212;
    --lightBlue: #e7f6ff;
    --lightYellow: #ffa;
    --grey: #d6d6d6;
    --light: #fafafa;
    --lightSalmon: #ffd5c9;
    --salmon: salmon;
    --greyIsh: #f0f1f6;
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
    line-height: 4rem;
    letter-spacing: 0.01rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* animation transition */
  ${transitionAnimation}
  /* end animation transition */

  .Typist{
    display: inline-block;
  }

  .block-reveal-animation {
    display: block !important;
  }
  `

export const Wrapper = styled.div`
  max-width: 104rem;
  margin: 0 auto;
  padding: 2rem;
`
