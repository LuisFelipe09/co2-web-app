import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/forest.jpg'

import {
  ProjectsContainer, ProjectsGrid,
  EachProject
} from '../../styles/Home/Projects'

const ProjectStructure = ({ project }) => {
  return (
    <EachProject>
        <figure>
            <img src={project.image} alt="project image"/>
        </figure>
        <h4>{project.name}</h4>
    </EachProject>
  )
}

const Projects = () => {
  const data = [1, 2, 3, 4, 5, 6]
  const project = {
    image,
    name: 'Protocolo Kyoto'
  }
  return (
        <ProjectsContainer>
            <h2>Projects we believe in</h2>
            <ProjectsGrid>
                {data.map((elem, key) => (
                    <ProjectStructure project={project} key={key}/>
                ))}
            </ProjectsGrid>
        </ProjectsContainer>
  )
}

export default Projects
