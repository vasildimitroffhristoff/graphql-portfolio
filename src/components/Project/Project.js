import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation'
import { Link } from 'react-router-dom'

import { Wrapper } from '../../theme'
import { CURRENT_PROJECT } from './graphql'
import { ProjectPage } from './ProjectStyles'

export default function Project(props) {
  const { loading, error, data } = useQuery(CURRENT_PROJECT, {
    variables: {
      id: props.location.pathname.split('/')[2]
    }
  })

  if (loading || error || !data) return <div>...</div>

  const {
    project: {
      projectName,
      projectImg: { url: imgUrl },
      projectUrl,
      introParagraph,
      imageGallery,
      description
    }
  } = data

  const goBack = () => props.history.goBack()

  return (
    <div className="page">
      <ProjectPage>
        <Wrapper>
          <BlockRevealAnimation color="var(--lightYellow)">
            <button className="go-back-btn" onClick={goBack}>
              <i className="fas fa-chevron-left"></i>
              Return to projects
            </button>
            <h2>{projectName}</h2>
            {projectUrl !== null && (
              <p className="project-url">
                <i className="icon fas fa-external-link-alt"></i>
                <a href={projectUrl} target="__blank">
                  {projectUrl}
                </a>
              </p>
            )}
          </BlockRevealAnimation>
          <BlockRevealAnimation color="var(--lightBlue)">
            {introParagraph && <p>{introParagraph}</p>}
            <img src={imgUrl} alt="" />
            {description && (
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            )}
          </BlockRevealAnimation>

          {imageGallery.length
            ? imageGallery.map(img => <img key={img.url} src={img.url} />)
            : null}
        </Wrapper>
      </ProjectPage>
    </div>
  )
}
