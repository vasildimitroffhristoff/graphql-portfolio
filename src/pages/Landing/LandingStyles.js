import styled from 'styled-components'

import { Wrapper } from '../../theme'
import { NavLink } from 'react-router-dom'

export const LandingWrapper = styled.section`
  position: relative;
  color: var(--dark);
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  height: calc(100vh - 70px);
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 78px);
  }

  .wave {
    margin-top: auto;
    position: absolute;
    bottom: -12rem;

    @media only screen and (max-width: 768px) {
      bottom: 0;
    }
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

  small {
    padding: 1rem 0 0 0;
    display: block;
  }

  .sub-titles {
    margin-top: 1.5rem;
  }

  h3 {
    margin: 0 1rem 0 0rem;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  .animation {
    position: relative;
    display: inline-block;
  }

    .react-icon {
      margin: 1rem;
      border-radius: 3px;
      font-weight: 700;
      background: #fff; 
      color: #fff;
      font-size:5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0rem;
      right: 2rem;
      opacity: 0.8;
    }

  h4 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 300;
    max-width: 60rem;
    line-height: 3.2rem;
    font-weight: 300;
  }
`

export const FindMore = styled(NavLink)`
    margin-top: 3rem;
    opacity: 0.6;
    background: #e2e4ea;
    display: block;
    padding: 0.7rem 1.2rem;
    border-radius: 10rem;
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
    width: 18rem;
    margin: 2rem auto 0 auto;
`
