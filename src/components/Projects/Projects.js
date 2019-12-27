import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from '../../theme'
import { PROJECTS } from './graphql'
import {
  BottomLinks,
  LatestProjects,
  Project,
  ProjectsSection
} from './ProjecstsStyles'

function ProjectsComponent() {
  const { loading, error, data } = useQuery(PROJECTS)

  if (loading || error || !data) return <div>...</div>

  const { projects } = data

  return (
    <div className="page">
      <ProjectsSection>
        <Wrapper>
          <h2>What I've been up to?</h2>
          <p>
            I am currently working as <b>front-end developer</b>. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatibus quasi a
            mollitia molestias cupiditate odit consequuntur, reprehenderit
            adipisci itaque non perferendis blanditiis ratione eum eveniet error
            est odio qui et.
          </p>

          <LatestProjects>
            {projects.map(project => (
              <Project key={project.id}>
                <div className="img-wrapper">
                  <Link to={`project/${project.id}`}>
                    <img src={project.projectImg.url} alt="" />
                  </Link>
                </div>
                <div className="header">
                  <h3>
                    <Link to={`project/${project.id}`}>{project.projectName}</Link>
                  </h3>

                  <small>
                    <b>Tech: </b>
                    {project.techStack}
                  </small>
                </div>
              </Project>
            ))}
          </LatestProjects>
        </Wrapper>
        <BottomLinks>
          <Wrapper>
            <div className="wrapper">
              <div className="col">
                <h4>
                  <i className="icon fab fa-codepen"></i>Codepen
                </h4>
                <a
                  className="link"
                  href="https://codepen.io/vasilhristov/pen/rNawwbe"
                  target="__blank"
                >
                  Mobile first Template using CSS Grid
                </a>

                <a
                  className="link"
                  href="https://codepen.io/vasilhristov/pen/rNawwbe"
                  target="__blank"
                >
                  Typography coded animation
                </a>
              </div>

              <div className="col">
                <h4>
                  <i className="icon fas fa-archive"></i>Archive demos
                </h4>
                <a className="link" href="" target="__blank">
                  Portfolio 1
                </a>
                <a className="link" href="" target="__blank">
                  ShopSophea
                  <small>
                    <b>(Liquid, SASS)</b>
                  </small>
                </a>
              </div>
            </div>
          </Wrapper>
        </BottomLinks>
      </ProjectsSection>
    </div>
  )
}

export default ProjectsComponent
