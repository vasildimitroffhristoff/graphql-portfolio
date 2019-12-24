import styled from 'styled-components'

export const Header = styled.header`
  min-height: 65rem;
  position: relative;
  color: var(--dark);
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
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

export const Text = styled.div`
  padding-top: 20rem;
  text-align: center;
  position: relative;
  z-index: 1000;

  small {
    padding: 1rem 0 0 0;
    display: block;
  }

  h2 {
    font-size: 4.5rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2rem;
    margin: 0 0 1rem 0;
  }
`

export const TextRotator = styled.div`
  h3 {
    margin: 0;
    font-size: 1.5rem;
    padding-top: 1rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
  }
`
