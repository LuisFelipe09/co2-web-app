import React from 'react'
import Introduction from '../src/components/Projects/Introduction'
import { Main } from '../src/styles/GeneralStyles'
import ProjectList from '../src/components/Projects/ProjectList'

const Projects = () => {
  return (
    <Main>
      <Introduction/>
      <ProjectList/>
    </Main>
  )
}

export default Projects
