import gql from 'graphql-tag'

export const PROJECTS = gql`
  query Projects {
    projects {
      id
      status
      projectImg {
        url
      }
      projectName
      techStack
    }
  }
`
