import React from 'react'
import Introduction from '../../components/Projects/Introduction'
import { Main } from '../../styles/GeneralStyles'
import ProjectList from '../../components/Projects/ProjectList'

const Projects = () => {
  return (
    <Main>
      <Introduction/>
      <ProjectList/>
    </Main>
  )
}

export default Projects
