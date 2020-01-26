import '../../../node_modules/video-react/dist/video-react.css'

import { useQuery } from '@apollo/react-hooks'
import React, { useCallback, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'
import { Player } from 'video-react'

import { Wrapper } from '../../theme'
import Loading from '../Loading'
import { CURRENT_PROJECT } from './graphql'
import { ProjectPage } from './ProjectStyles'

export default function Project(props) {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((_, { __, index }) => {
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

  if (loading || error || !data || data.project === null) return <Loading />

  const {
    project: {
      projectName,
      projectImg: { url: imgUrl },
      projectUrl,
      introParagraph,
      imageGallery,
      description,
      video
    }
  } = data

  const photos = imageGallery.map(img => ({
    src: img.url
  }))

  return (
    <div className="page">
      <ProjectPage>
        <div className="project">
          <Wrapper>
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

            {introParagraph && <p>{introParagraph}</p>}

            {video ? (
              <Player playsInline>
                <source src={video.url} type="video/mp4" />
              </Player>
            ) : (
              <img src={imgUrl} alt="" />
            )}

            {description && (
              <>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
              </>
            )}

            {/* Image gallery */}
            {imageGallery.length ? (
              <>
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
              </>
            ) : null}
          </Wrapper>
        </div>
      </ProjectPage>
    </div>
  )
}
