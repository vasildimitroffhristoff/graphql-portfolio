import styled from 'styled-components'

import { Wrapper } from '../../theme'

export const LandingWrapper = styled.header`
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
    height: 5rem;
    line-height: 5rem;
    letter-spacing: 0.5rem;
    margin: 0;
    text-transform: uppercase;
    position: relative;
    font-size: 4rem;
    font-weight: 600;
    word-spacing: 0.5rem;
  }

  .sub-titles {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
  }

  h3 {
    margin: 0 1rem 0 0rem;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  h4 {
    margin: 0;
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: 0.08rem;
    font-weight: 300;
    font-family: monospace;

    span {
      font-size: 3.2rem;
      padding: 0 0.5rem;
      font-weight: 300;
      color: var(--salmon);
      position: relative;
      top: 0.4rem;
    }

    b {
      font-weight: 700;
    }
  }
`
