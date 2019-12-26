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
