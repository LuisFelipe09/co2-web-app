import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import useProjects from '../../hooks/useProjects'

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
        <h4>{project.title}</h4>
    </EachProject>
  )
}

const Projects = () => {
  const { projects, getProjects } = useProjects()

  return (
        <ProjectsContainer>
            <h2>Projects we believe in</h2>
            <ProjectsGrid>
                {projects.map((elem, key) => (
                  <Link href={`/project/${key}`} key={key}>
                    <ProjectStructure project={elem}/>
                  </Link>
                ))}
            </ProjectsGrid>
        </ProjectsContainer>
  )
}

export default Projects
