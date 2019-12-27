import styled from 'styled-components'

export const ProjectPage = styled.div`
  h2 {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    margin: 3rem 0;
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
    margin-bottom: 8rem;
    padding-left: 0;

    i {
      background-color: var(--grey);
      height: 1.6rem;
      width: 1.6rem;
      line-height: 1.6rem;
      border-radius: 2px;
      margin-right: 1rem;
      color: #777;
    }
  }
/* 
  .block-reveal-animation {
    display: block;
    border-bottom: 1px solid #eee;
  } */

  .project-url {
    transition: all 300ms ease-in-out;
    display: inline-block;
    margin-top: 2rem;
    /* background-color: white; */
    /* padding: 0.5rem 2rem 0.5rem 1rem; */
    border-radius: 0.5rem;

    &:hover {
      transform: translateY(-4px);
    }

    a {
      text-decoration: none;
      color: var(--dark);
      font-size: 1.4rem;
    }

    .icon {
      display: inline-block;
      background-color: salmon;
      color: white;
      width: 2.6rem;
      height: 2.6rem;
      line-height: 2.6rem;
      border-radius: 2px;
      margin-right: 1rem;
      text-align: center;
      font-size: 1.2rem;
    }
  }
`
