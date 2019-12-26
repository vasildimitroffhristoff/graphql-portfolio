import React from 'react'

import me from '../../assets/me.svg'
import { Wrapper } from '../../theme'
import { ProjectsSection } from './ProjecstsStyles'

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
                ShopSophea <small><b>(Liquid, SASS)</b></small>
              </a>
              <a className="link" href="" target="__blank">
                Adtailor landing page
              </a>
              <a className="link" href="" target="__blank">
                Watch shop <small><b>(React, Redux)</b></small>
              </a>
              <a className="link" href="" target="__blank">
                Quantity Sync <small><b>(Shopify, Node.js API)</b></small>
              </a>
            </div>
          </section>
        </Wrapper>
      </ProjectsSection>
    </div>
  )
}

export default ProjectsComponent
