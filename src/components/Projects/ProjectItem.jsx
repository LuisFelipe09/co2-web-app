import React from 'react'
import { Container, ProjectItemContainer, StyledLink } from '../../styles/Projects/ProjectItem'

const ProjectItem = ({ project }) => {
  return (
    <Container>
      <StyledLink href="1">
        <ProjectItemContainer className='project-item'>
          <img className='project-item__img' src={project.image} alt="NFT-image" />
          <div className='project-item__text'>
            <h2 className='project-item__text--name'>{project.title}</h2>
            <p className='project-item__text--creator'>{project.creator}</p>
            <p className='project-item__text--supply'>Limit: {project.approved_credits}</p>
            <p className='project-item__text--supply'>T: {project.token}</p>
            <p className='project-item__text--supply'>NFTs: {project.NFTs}</p>
          </div>
        </ProjectItemContainer>
      </StyledLink>
    </Container>
  )
}

export default ProjectItem
