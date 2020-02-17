import styled from 'styled-components'

export const AboutSection = styled.section`
  text-align: center;
  padding: 8rem 0 3rem 0;

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
    margin-top: 0;
    font-size: 3rem;
    text-align: center;

    @media only screen and (max-width: 768px) {
      margin-bottom: 2rem;
      font-size: 3rem;
    }
  }

  .me {
    height: 19rem;
    margin: 0 auto;
    display: block;

    @media only screen and (max-width: 768px) {
      height: 15rem;
    }
  }

  .git-commits {
    max-width: 100%;
    margin: 2rem 0 4rem 0;
    border-radius: 3px;
    box-shadow: none;
    filter: opacity(0.4) grayscale(1) blur(1px);
    transition: all 150ms
      cubic-bezier(0.455, 0.03, 0.515, 0.955);

    &:hover {
      filter: unset;
      box-shadow: none;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.07);
    }
  }

  .resume-link {
    font-weight: 700;
    text-transform: capitalize;
    padding: 1.8rem 2.8rem;
    border-radius: 10rem;
    margin: 4rem auto 6rem auto;
    max-width: 30rem;
    display: inline-block;
    transition: all 150ms
      cubic-bezier(0.455, 0.03, 0.515, 0.955);
    font-size: 1.3rem;

    background-color: var(--blue);
    color: white;

    .icon {
      margin-right: 1rem;
    }

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      background-color: var(--blue);
    }
  }

  p {
    margin-top: 0;

    svg {
      margin: 0 0.8rem;
      transition: all 50ms ease-in 200ms;
      transform: scale(1.2) !important;
    }
    svg:hover {
      transform: scale(1.7) !important;
    }

    &.two-cols {
      column-count: 2;
      column-gap: 5rem;
      text-align: justify;
      p {
        text-align: justify;
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
      text-align: center;
    }
  }

  li {
    margin-bottom: 2rem;
    margin-right: 2rem;

    a {
      color: #000;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.5rem;

      &:hover {
        text-decoration: underline;
      }

      i {
        margin-right: 0.8rem;
      }
    }
  }
`
