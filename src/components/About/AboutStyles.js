import styled from 'styled-components'

export const AboutSection = styled.section`
  text-align: center;
  background-color: #fafafa;
  padding: 8rem 0;

  header {
    position: relative;
    min-height: 33rem;
  }

  h2 {
    width: 27rem;
    margin: 3rem auto 5rem auto;
    display: flex;
    align-items: baseline;
    white-space: nowrap;

    .icon {
      font-size: 3rem;
      margin-right: 2rem;
    }
  }

  h3 {
    margin-top: 5rem;
    margin-bottom: 3rem;
    font-size: 3.6rem;
    text-align: center;
  }

  .me {
    /* max-width: 28rem; */
    height: 20rem;
    margin: 0 auto;
    display: block;
  }

  .git-commits {
    max-width: 100%;
    margin: 0 0 3rem 0;
    border-radius: 3px;
    box-shadow: none;
    filter: opacity(0.4) grayscale(1) blur(1px);
    transition: all 150ms ease-in-out;

    &:hover {
      filter: unset;
      box-shadow: none;
      box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.08);
    }
  }

  .resume-link {
    text-decoration: none;
    font-weight: 700;
    color: var(--dark);
    text-transform: capitalize;
    background-color: white;
    padding: 2rem;
    border-radius: 10rem;
    margin: 4rem auto 6rem auto;
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
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: left;

    svg {
      margin: 0 0.8rem;
    }

    &.two-cols {
      column-count: 2;
      column-gap: 5rem;
      text-align: justify;

      a {
        color: var(--dark);
      }
    }
  }
`

export const SocialLinks = styled.div`
  h3 {
    margin-top: 6rem;
  }
  .links-wrapper {
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  ul {
    columns: 3;
    margin-top: 0rem;
  }

  li {
    margin-bottom: 2rem;
    margin-right: 2rem;
    font-family: monospace;

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      i {
        margin-right: 0.8rem;
      }
    }
  }
`
