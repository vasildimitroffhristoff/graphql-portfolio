import styled from 'styled-components'

export const AboutSection = styled.section`
  text-align: center;
  background-color: #fafafa;
  padding: 8rem 0;

  h2 {
    width: 30rem;
    margin: 5rem auto;

    .icon {
      font-size: 3rem;
      margin-right: 2rem;
    }
  }

  .me {
    max-width: 28rem;
    margin: 0 auto;
  }

  .resume-link {
    text-decoration: none;
    font-weight: 700;
    color: var(--dark);
    text-transform: capitalize;
    background-color: white;
    padding: 2rem;
    border-radius: 10rem;
    margin: 6rem auto 6rem auto;
    max-width: 30rem;
    display: block;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    transition: all 300ms ease-in-out;

    .icon {
      margin-right: 1rem;
    }

    &:hover {
      opacity: 0.8;
      box-shadow: 0 4px 0px rgba(0, 0, 0, 0.03);
      transform: translateY(-4px);
    }
  }

  p {
    margin-bottom: 2rem;
    text-align: left;

    svg {
      margin: 0 0.8rem;
    }

    code {
      background-color: var(--lightYellow);
      padding: 0.5rem 1.5rem;
      font-family: monospace;
      display: block;
      transition: all 300ms ease-in-out;
      box-shadow: 0 0.8rem 1rem rgba(0, 0, 0, 0.02);
      border-radius: 1rem;

      &:hover {
        transform: translate(-5px, -10px);
        /* font-size: 2rem; */
      }
    }

    &.two-cols {
      column-count: 2;
      column-gap: 3rem;
      text-align: justify;
    }
  }
`
