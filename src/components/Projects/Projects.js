import React from 'react'
import { Link } from 'react-router-dom'

import project2 from '../../assets/project-1.png'
import project1 from '../../assets/project-2.jpg'
import { Wrapper } from '../../theme'
import { LatestProjects, Project, ProjectsSection } from './ProjecstsStyles'

function ProjectsComponent() {
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
            <Project>
              <div className="img-wrapper">
                <img src={project1} alt="" />
              </div>
              <div className="header">
                <Link to="project/1">
                  <h3>Budget app startup.</h3>
                </Link>
                <span>1</span>
              </div>
            </Project>

            <Project>
              <div className="img-wrapper">
                <img src={project2} alt="" />
              </div>
              <div className="header">
                <h3>Penguin Tribe</h3>
                <span>2</span>
              </div>
            </Project>

            <Project>
              <div className="img-wrapper">
                <img src={project1} alt="" />
              </div>
              <div className="header">
                <h3>Mentor App</h3>
                <span>3</span>
              </div>
            </Project>
            <Project>
              <div className="img-wrapper">
                <img src={project1} alt="" />
              </div>
              <div className="header">
                <h3>Penguin Academy Website</h3>
                <span>4</span>
              </div>
            </Project>
            <Project>
              <div className="img-wrapper">
                <img src={project1} alt="" />
              </div>
              <div className="header">
                <h3>Admin Page</h3>
                <span>5</span>
              </div>
            </Project>
          </LatestProjects>

          <section className="project-links">
            <div>
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
                CSS Animation
              </a>
              <a
                className="link"
                href="https://codepen.io/vasilhristov/pen/rNawwbe"
                target="__blank"
              >
                Typography coded animation
              </a>
            </div>

            <div>
              <h4>
                <i className="icon fas fa-archive"></i>Archive
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
              <a className="link" href="" target="__blank">
                Adtailor landing page
              </a>
              <a className="link" href="" target="__blank">
                Watch shop
                <small>
                  <b>(React, Redux)</b>
                </small>
              </a>
              <a className="link" href="" target="__blank">
                Quantity Sync
                <small>
                  <b>(Shopify, Node.js API)</b>
                </small>
              </a>
            </div>
          </section>
        </Wrapper>
      </ProjectsSection>
    </div>
  )
}

export default ProjectsComponent
