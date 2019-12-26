import React from 'react'
import BlockRevealAnimation from 'react-block-reveal-animation'

import project1 from '../../assets/project-2.jpg'
import { Wrapper } from '../../theme'
import { ProjectPage } from './ProjectStyles'

export default function Project() {
  return (
    <div className="page">
      <ProjectPage>
        <Wrapper>
          <BlockRevealAnimation color="#ffa">
            <h2>Project 1</h2>
          </BlockRevealAnimation>
          <BlockRevealAnimation color="#6066f0">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              praesentium aliquid libero commodi, nobis quod amet numquam quo
              nam accusamus? Veniam, eum, veritatis quis excepturi pariatur
              ipsum aperiam est eaque fuga a esse distinctio explicabo enim.
              Modi facilis sapiente reiciendis magni repellendus eaque,
              excepturi hic sint iure quisquam distinctio corrupti adipisci
              incidunt quam architecto provident quia porro soluta
              exercitationem? Quidem sunt voluptas dolores doloribus corporis
              temporibus architecto, id animi quia beatae eligendi quae
              laboriosam adipisci dolor qui est saepe sapiente molestias
              consequuntur commodi. Ea nobis et id nam. Illo ad velit vitae sunt
              totam modi cum harum molestias mollitia fuga.
            </p>
            <img src={project1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              illo maiores quo corporis commodi possimus assumenda laborum
              incidunt fuga laudantium architecto enim tempore quisquam eos
              facilis ratione pariatur, vel natus.
            </p>
          </BlockRevealAnimation>
        </Wrapper>
      </ProjectPage>
    </div>
  )
}
