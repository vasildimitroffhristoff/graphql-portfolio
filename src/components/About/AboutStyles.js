import styled from 'styled-components'

export const AboutSection = styled.section`
  text-align: center;
  background-color: #fafafa;
  padding: 8rem 0;

  header {
    position: relative;
    min-height: 33rem;

    @media only screen and (max-width: 768px) {
      min-height: 25rem;
    }
  }

  h2 {
    width: 27rem;
    margin: 3rem auto 5rem auto;
    display: flex;
    align-items: baseline;
    white-space: nowrap;

    @media only screen and (max-width: 768px) {
      margin-bottom: 2rem;
      font-size: 3rem;
      justify-content: center;
    }

    .icon {
      font-size: 3rem;
      margin-right: 2rem;
      @media only screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  h3 {
    margin-top: 5rem;
    margin-bottom: 3rem;
    font-size: 3.6rem;
    text-align: center;

    @media only screen and (max-width: 768px) {
      margin-bottom: 2rem;
      font-size: 3rem;
    }
  }

  .me {
    height: 20rem;
    margin: 0 auto;
    display: block;

    @media only screen and (max-width: 768px) {
      height: 15rem;
    }
  }

  .git-commits {
    max-width: 100%;
    margin: 3rem 0 3rem 0;
    border-radius: 3px;
    box-shadow: none;
    filter: opacity(0.4) grayscale(1) blur(1px);
    transition: all 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

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
    transition: all 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

    .icon {
      margin-right: 1rem;
    }

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      background-color: var(--blue);
      color: white;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: left;

    svg {
      margin: 0 0.8rem;
      transition: transform 120ms ease-in 200ms;
      transform: scale(1.2)!important;

    }
    svg:hover {
      transform: scale(1.5)!important;
    }

    &.two-cols {
      column-count: 2;
      column-gap: 5rem;
      text-align: justify;
      p {
        justify-content: center;
      }
      @media only screen and (max-width: 768px) {
        column-count: 1;
        text-align: center;

        p {
          text-align: center;
        }
      }

      a {
        color: var(--dark);
      }
    }
  }
`

export const SocialLinks = styled.div`
  h3 {
    margin-top: 6rem;

    @media only screen and (max-width: 768px) {
      margin-bottom: 2rem;
      font-size: 3rem;
    }
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
    @media only screen and (max-width: 768px) {
      columns: 1;
    }
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
