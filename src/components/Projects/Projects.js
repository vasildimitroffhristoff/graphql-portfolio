import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from '../../theme'
import Loading from '../Loading'
import { PROJECTS } from './graphql'
import {
  BottomLinks,
  LatestProjects,
  Project,
  ProjectsSection
} from './ProjecstsStyles'

function ProjectsComponent() {
  const { loading, error, data } = useQuery(PROJECTS)

  if (loading || error || !data) return <Loading />

  const { projects } = data

  return (
    <div className="page">
      <ProjectsSection>
        <Wrapper>
          <h2>What I've been up to?</h2>
          <p>
            Here you can find out more about the projects I've been involved
            into during my professional career, personal projects, demos...
          </p>

          <LatestProjects>
            {projects.map(
              project =>
                project.status === 'PUBLISHED' && (
                  <Project key={project.id}>
                    <div className="img-wrapper">
                      <Link to={`project/${project.id}`}>
                        <img src={project.projectImg.url} alt="" />
                      </Link>
                    </div>
                    <div className="header">
                      <h3>
                        <Link to={`project/${project.id}`}>
                          {project.projectName}
                        </Link>
                      </h3>

                      <small>
                        <b>Tech: </b>
                        {project.techStack}
                      </small>
                    </div>
                  </Project>
                )
            )}
          </LatestProjects>
        </Wrapper>
        <BottomLinks>
          <Wrapper>
            <div className="wrapper">
              <div className="col">
                <h4>
                  <i className="icon fas fa-archive"></i>Archive
                </h4>

                <a
                  className="link"
                  href="https://vasillabs.bitbucket.io/"
                  target="__blank"
                >
                  Old portfolio
                </a>
                <a
                  className="link"
                  href="https://blooming-earth-56740.herokuapp.com/"
                  target="__blank"
                >
                  Quantity Sync
                  <small>
                    <b> / Shopify API, Polaris React, Express.js</b>
                  </small>
                </a>
                <a
                  className="link"
                  href="https://shopsophea.com/"
                  target="__blank"
                >
                  ShopSophea
                  <small>
                    <b> / Liquid, SASS</b>
                  </small>
                </a>
                <a
                  className="link"
                  href="https://polar-eyrie-50062.herokuapp.com/"
                  target="__blank"
                >
                  WatchMe
                  <small>
                    <b> / React, Redux</b>
                  </small>
                </a>
                <a
                  className="link"
                  href="https://thawing-caverns-24436.herokuapp.com/"
                  target="__blank"
                >
                  Adtailor
                  <small>
                    <b> / JavaScript, jQuery</b>
                  </small>
                </a>
                <a
                  className="link"
                  href="https://frozen-ravine-82393.herokuapp.com/"
                  target="__blank"
                >
                  Adtailor CRM
                  <small>
                    <b> / JavaScript, jQuery</b>
                  </small>
                </a>
              </div>
              <div className="col">
                <h4>
                  <i className="icon fab fa-codepen"></i>Demo
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
                  href="https://codesandbox.io/s/serene-wright-chzr5?fontsize=14&hidenavigation=1&theme=dark"
                  target="__blank"
                >
                  Time log chart (React, TypeScript, Chart.js)
                </a>
                <a
                  href="https://codesandbox.io/s/frosty-brattain-7482r?fontsize=14&hidenavigation=1&theme=dark"
                  className="link"
                  target="__blank"
                >
                  Experience points chart (React, TypeScript, Chart.js)
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
