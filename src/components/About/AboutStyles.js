import styled from 'styled-components'

export const AboutSection = styled.section`
  background-color: #fafafa;
  padding: 8rem 0;
  .me {
    max-width: 28rem;
    margin: 0 auto;
  }

  p {
    column-count: 2;
    column-gap: 6rem;
    /* text-align: justify; */
  }

  .resume-button {
    color: #000000;
    display: inline-block;
    margin-top: 3rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 100ms ease-in;
    border-bottom: 1px dashed transparent;
    box-shadow: 0 0.8rem 1rem rgba(0, 0, 0, 0.05);
    padding: 2rem 2rem;
    border-radius: 6px;

    svg {
      font-size: 20px;
      position: relative;
      top: 5px;
      margin-right: 8px;
    }
  }
`

export const AboutHeader = styled.div`
  text-align: center;
`
