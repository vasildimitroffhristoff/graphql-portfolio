import styled from 'styled-components'

export const ProjectsSection = styled.section`
  text-align: center;
  background-color: #fafafa;
  padding: 8rem 0;

  h2 {
    margin: 5rem auto;

    .icon {
      font-size: 3rem;
      margin-right: 2rem;
    }
  }

  h4 {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;

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
      box-shadow: inset -30rem 0 0 var(--lightYellow)
    }
  }

  .project-links {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    div {
      text-align: left;
    }
  }
`

export const LatestProjects = styled.section`
  padding: 3rem 0 6rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`
export const Project = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  .header {
    /* display: flex;
    flex-direction: row;
    align-items: center; */
    margin-top: 2.5rem;
    
    > span {
      font-size: 5rem;
      color: var(--dark);
      font-weight: 300;
      display: none;
    }

    h3 {
      font-size: 2.2rem;
      /* font-weight: 400; */
      width: 60%;
      margin: 0 auto;
      line-height: 3.2rem;
      height: 7rem;
    }
  }

  .img-wrapper {
    width: 40rem;
    height: 20rem;
    border-radius: 0.4rem;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    img {
      /* opacity: 0.2; */
      /* max-width: 100%; */
      position: relative;
      /* height: 40rem; */
      top: -0.2rem;
      width: 40rem;
    }
  }
`
