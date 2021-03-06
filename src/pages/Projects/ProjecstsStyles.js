import styled from 'styled-components'

export const ProjectsSection = styled.section`
  text-align: center;
  padding: 8rem 0 0 0;

  h2 {
    margin: 5rem auto 0 auto;

    @media only screen and (max-width: 768px) {
      font-size: 3rem;
      margin-top: 0;
    }

    .icon {
      font-size: 3rem;
      margin-right: 2rem;
    }
  }

  h4 {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    margin-top: 0;

    .icon {
      margin-right: 2rem;
    }
  }

  .link {
    font-weight: 300;
    color: var(--dark);
    display: block;
    margin-bottom: 1rem;
    text-decoration: none;
    transition: all 300ms;

    &:hover {
      /* text-decoration: underline; */
      transform: translateX(5px);
      box-shadow: inset 60rem 0 0 var(--lightYellow);
    }
  }
`
export const BottomLinks = styled.section`
  /* background-color: #f1f1f1; */
  background-color: white;
  padding: 5rem;

  @media only screen and (max-width: 768px) {
    padding: 0rem;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .col {
    text-align: left;
    @media only screen and (max-width: 768px) {
      margin-bottom: 4rem;
    }
  }
`

export const LatestProjects = styled.section`
  padding: 3rem 0 6rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 6rem;
  grid-row-gap: 4rem;
  grid-auto-rows: minmax(100px, auto);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
`

export const Project = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  .header {
    margin-top: 2.5rem;

    h3 {
      font-size: 1.8rem;
      width: 60%;
      margin: 0 auto 0.5rem auto;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }

      a {
        text-decoration: none;
        color: var(--dark);

        &:hover {
          color: var(--blue);
        }
      }
    }
  }

  .img-wrapper {
    width: 100%;
    height: 20rem;
    border-radius: 0.8rem;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.1);
    transition: all 300ms ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      position: relative;
      top: -0.2rem;
      width: 100%;
      min-height: 22rem;
      object-fit: cover;
    }
  }

  /* Featured first item */
  &:nth-of-type(1) {
    grid-column: 1 / -1;
    margin-bottom: 4rem;

    .header {
      h3 {
        font-size: 3.2rem;
        width: 100%;

        @media only screen and (max-width: 768px) {
          font-size: 2rem;
        }
      }

      small {
        font-size: 1.5rem;
      }
    }

    .img-wrapper {
      width: 100%;
      height: 35rem;
      box-shadow: none;

      @media only screen and (max-width: 768px) {
        height: 20rem;
      }

      &:hover {
        transform: none;
      }
      img {
        position: relative;
        top: -0.2rem;
        width: 100%;
      }
    }
  }
`
