import gql from 'graphql-tag'

export const PROJECTS = gql`
  query Projects {
    projects {
      id
      projectImg {
        url
      }
      projectName
      techStack
    }
  }
`
