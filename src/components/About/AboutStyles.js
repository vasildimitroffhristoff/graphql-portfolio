import styled from 'styled-components'

export const AboutSection = styled.section`
  text-align: center;
  background-color: #fafafa;
  padding: 8rem 0;

  header {
    position: relative;
  }

  h2 {
    width: 27rem;
    margin: 3rem auto 5rem auto;
    display: flex;
    align-items: baseline;

    .icon {
      font-size: 3rem;
      margin-right: 2rem;
    }
  }

  h3 {
    margin-top: 0rem;
    margin-bottom: 3rem;
    font-size: 3.6rem;
    text-align: center;
  }

  .me {
    max-width: 28rem;
    margin: 0 auto;
    display: block;
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
    }
  }
`

export const Code = styled.code`
  text-align: left;
  background-color: white;
  /* padding: 1.5rem 4.5rem 1.5rem 3rem; */
  display: inline-block;
  font-family: monospace;
  transition: all 300ms ease-in-out;
  box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.03);
  border-radius: 1rem;
  margin-bottom: 2rem;
  position: absolute;
  top: -5rem;
  left: 10rem;
  overflow: hidden;

  span {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: salmon;
    padding: 1rem;
    margin-bottom: 1rem;
    i {
      display: block;
      height: 8px;
      width: 8px;
      border-radius: 2rem;
      background-color: var(--lightYellow);
      margin-right: 1rem;
    }
  }

  p {
    margin: 0;
    padding: 0 2.5rem 1.5rem 2rem;
    font-size: 1.7rem;
    line-height: 3rem;

    b {
      text-transform: uppercase;
      line-height: 3.5rem;
    }
  }

  &:hover {
    transform: translate(-5px, -10px);
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
