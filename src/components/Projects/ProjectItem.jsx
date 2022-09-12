import React from 'react'
import { Container, ProjectItemContainer, StyledLink } from '../../styles/Projects/ProjectItem'

const ProjectItem = () => {
  return (
    <Container>
      <StyledLink to="./projects/1">
        <ProjectItemContainer className='project-item'>
          <img className='project-item__img' src="https://cdn-icons-png.flaticon.com/512/6298/6298900.png" alt="NFT-image" />
          <div className='project-item__text'>
            <h2 className='project-item__text--name'>Project Name</h2>
            <p className='project-item__text--supply'>1/50 Green Bonds Purchase</p>
            <p className='project-item__text--creator'>Creator/Organization</p>
          </div>
        </ProjectItemContainer>
      </StyledLink>
    </Container>
  )
}

export default ProjectItem
