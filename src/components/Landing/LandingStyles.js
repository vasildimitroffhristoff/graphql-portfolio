import styled from 'styled-components'

import { Wrapper } from '../../theme'

export const LandingWrapper = styled.header`
  /* min-height: 65rem; */
  position: relative;
  color: var(--dark);
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;

  .wave {
    margin-top: auto;
    position: relative;
    bottom: -7rem;
  }
`

export const HeaderContent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: relative;

  nav {
    display: flex;
    align-items: center;
    a {
      color: #000;
      text-decoration: none;
      padding: 0 1.5rem;
      line-height: 2rem;
      font-weight: 700;
      font-size: 1.2rem;
      text-transform: capitalize;
      font-family: 'Montserrat', sans-serif;

      .icon-git {
        font-size: 3rem;
        color: var(--grey);
      }
    }
  }
`

export const Text = styled(Wrapper)`
  text-align: center;
  position: relative;
  z-index: 1000;
  margin-top: 20rem;

  small {
    padding: 1rem 0 0 0;
    display: block;
  }

  h2 {
    margin-bottom: 1rem;
    height: 5rem;
    line-height: 5rem;
    letter-spacing: 0.7rem;
    margin: 0;
    text-transform: uppercase;
    position: relative;
    font-size:4.7rem;
    font-weight: 700;
    word-spacing: 0.5rem;
  }

  .sub-titles {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }

  h3 {
    margin: 0 1rem 0 0rem;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
  }

  h4 {
    margin: 0;
    font-size: 1.8rem;
    letter-spacing: 0.08rem;
    font-weight: 700;
    font-family: monospace;
    color: var(--blue);
    background-color: var(--lightBlue);
  }
`
