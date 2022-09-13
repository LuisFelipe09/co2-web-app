import React from 'react'
import { Container, ProjectItemContainer, StyledLink } from '../../styles/Projects/ProjectItem'

const ProjectItem = ({ project }) => {
  return (
    <Container>
      <StyledLink href={`/project/${project.token_id}`}>
        <ProjectItemContainer className='project-item'>
          <img className='project-item__img' src={project.image} alt="NFT-image" />
          <div className='project-item__text'>
            <h2 className='project-item__text--name'>{project.title}</h2>
            <p className='project-item__text--creator'>{project.creator}</p>
            <p className='project-item__text--supply'>Limit: {project.approved_credits}</p>
            <p className='project-item__text--supply'>Your Tokens: {project.tokens}</p>
            <p className='project-item__text--supply'>Your NFTs: {project.NFTs}</p>
          </div>
        </ProjectItemContainer>
      </StyledLink>
    </Container>
  )
}

export default ProjectItem
