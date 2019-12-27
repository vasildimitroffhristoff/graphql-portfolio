import { useQuery } from '@apollo/react-hooks'
import React, { useCallback, useState } from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'

import { Wrapper } from '../../theme'
import { CURRENT_PROJECT } from './graphql'
import { ProjectPage } from './ProjectStyles'

export default function Project(props) {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  const { loading, error, data } = useQuery(CURRENT_PROJECT, {
    variables: {
      id: props.location.pathname.split('/')[2]
    }
  })

  const goBack = () => props.history.goBack()

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

  const photos = imageGallery.map(img => ({
    src: img.url,
    width: 3,
    height: 2
  }))

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

          {imageGallery.length ? (
            <BlockRevealAnimation color="var(--lightBlue)">
              <Gallery photos={photos} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </BlockRevealAnimation>
          ) : null}
        </Wrapper>
      </ProjectPage>
    </div>
  )
}
