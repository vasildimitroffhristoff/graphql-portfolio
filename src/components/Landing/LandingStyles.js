import styled from 'styled-components'

import { Wrapper } from '../../theme'

export const LandingWrapper = styled.section`
  position: relative;
  color: var(--dark);
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);

  .wave {
    margin-top: auto;
    position: absolute;
    bottom: -10rem;

    @media only screen and (max-width: 768px) {
      bottom: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 78px);
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
    letter-spacing: 0.6rem;
    margin: 0;
    text-transform: uppercase;
    position: relative;
    font-size: 3.8rem;
    font-weight: 600;
    word-spacing: 0.5rem;

    @media only screen and (max-width: 768px) {
      font-size: 2.6rem;
    }
  }

  .sub-titles {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }
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

    &.mobile {
      display: none;
    }

    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
      display: none;

      &.mobile {
        display: block;
        font-size: 1.7rem;

        b {
          display: block;

          &:nth-of-type(2) {
            font-size: 6rem;
            margin-top: 2rem;
            opacity: .1;
            font-weight: normal;
          }
        }
      }
    }

    span {
      font-size: 3.2rem;
      padding: 0 1.4rem;
      font-weight: 300;
      color: var(--salmon);
      position: relative;
      top: 0.3rem;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    b {
      font-weight: 700;
    }
  }
`
