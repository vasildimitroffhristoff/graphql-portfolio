import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: relative;
  color: var(--dark);
  overflow: hidden;
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

    a:not(.git-link) {
      color: #000;
      text-decoration: none;
      padding: 0 1.5rem;
      line-height: 2rem;
      font-weight: 700;
      font-size: 1.2rem;
      text-transform: capitalize;
      font-family: 'Montserrat', sans-serif;

      &.selected {
        text-decoration: underline;
      }
    }
    .icon-git {
      font-size: 2rem;
      color: var(--dark);
      opacity: 0.8;
    }
  }
`
