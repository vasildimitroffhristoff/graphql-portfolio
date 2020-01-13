import styled from 'styled-components'

export const ProjectPage = styled.div`
  background-color: var(--greyIsh);

  h2 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    list-style-position: inside;
    padding-left: 2rem;
  }

  img {
    max-width: 100%;
  }

  .go-back-btn {
    display: block;
    box-shadow: none;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 6rem;
    margin-top: 4rem;
    padding-left: 0;

    i {
      background-color: var(--grey);
      height: 1.6rem;
      width: 1.6rem;
      line-height: 1.6rem;
      border-radius: 2px;
      margin-right: 1rem;
      color: var(--dark);
    }
  }

  .project-url {
    transition: all 300ms ease-in-out;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 2rem;
    /* background-color: white; */
    /* padding: 0.5rem 2rem 0.5rem 1rem; */
    border-radius: 0.5rem;

    &:hover {
      transform: translateX(4px);
      text-decoration: underline;
    }

    a {
      text-decoration: none;
      color: var(--dark);
      font-size: 1.4rem;
    }

    .icon {
      display: inline-block;
      background-color: var(--salmon);
      color: white;
      width: 2.2rem;
      height: 2.2rem;
      line-height: 2.2rem;
      border-radius: 2px;
      margin-right: 1rem;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`
