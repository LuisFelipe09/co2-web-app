import React from 'react'
import ProjectItem from './ProjectItem'

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectItem project={project} key={index}/>
      ))}
    </>
  )
}

export default ProjectList
