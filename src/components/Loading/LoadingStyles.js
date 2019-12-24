import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  height: calc(100vh - 10rem);
  position: fixed;
  top: 10rem;
  left: 0;
  bottom: 0;
  width: 100vw;
  background-color: var(--light);
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: center;
`
