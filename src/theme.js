import styled, {
  createGlobalStyle,
  css
} from 'styled-components'

const transitionAnimation = css`
  div.transition-group {
    position: relative;
  }
  section.route-section {
    /* position: absolute; 
    width: 100%;
    top: 0;
    left: 0; */
  }

  .fade-enter,
  .fade-appear {
    opacity: 0;
    z-index: 1;
  }

  .fade-appear-active,
  .fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in 150ms,
      transform 200ms ease-in 150ms;
  }

  .fade-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 150ms linear,
      transform 150ms ease-in;
  }

  .fade-appear .landing-subtitle,
  .fade-enter .landing-subtitle {
    transform: translateY(-5px);
    opacity: 0;
  }

  .fade-appear-active .landing-subtitle,
  .fade-enter-active .landing-subtitle {
    opacity: 1;
    transition: opacity 600ms linear 2000ms,
      transform 300ms ease-in 2000ms;
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
    --blue: #0898fa;
    --dark: #111111;
    --lightBlue: #e7f6ff;
    --lightYellow: #ffa;
    --grey: #d6d6d6;
    --light: #f5f6fa;
    --lightSalmon: #ffd5c9;
    --salmon: salmon;
    --greyIsh: #f0f1f6;
  }

  html {
    font-size: 10px;
  }

  * {
    -webkit-font-smoothing: antialiased
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat',sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
  }

  body * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  h2 {
    font-size: 4rem;
    height: 4rem;
    line-height: 4rem;
    margin: 0;
    position: relative;
    font-size: 3.5rem;
    font-weight: 600;
    word-spacing: 0.5rem;
    display: inline-block;
  }

  a {
    color: var(--dark);
    text-decoration: none;
  }

  p {
    font-size: 1.6rem;
    line-height: 3.2rem;
    letter-spacing: 0.01rem;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .page {
    &--projects, &--project {
      background-color: var(--light);
    }
  }

  /* animation transition */
  ${transitionAnimation}
  /* end animation transition */

  .Typist{
    display: inline-block;
  }
  `

export const Wrapper = styled.div`
  max-width: 104rem;
  margin: 0 auto;
  padding: 2rem;
`
