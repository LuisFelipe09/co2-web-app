import React, { useState, useEffect, useCallback } from 'react'
import Introduction from '../src/components/Projects/Introduction'
import { Main } from '../src/styles/GeneralStyles'
import ProjectList from '../src/components/Projects/ProjectList'
import useProjects from '../src/hooks/useProjects'

import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
`

const Projects = () => {
  const [search, setSearch] = useState('')
  const { projects, loading } = useProjects()
  const [projectsSearch, setProjectsSearch] = useState([])

  const handleProjects = useCallback(() => {
    let res = []
    if (search.length === 0) {
      res = [...projects]
    } else {
      res = projects.filter(elem => {
        return elem.title.contains(search)
      })
    }
    setProjectsSearch(res)
  }, [search, projects])

  useEffect(() => {
    handleProjects()
  }, [handleProjects])

  const handleInput = e => {
    setSearch(e.target.value)
  }

  return (
    <Main>
      <Container>
        <Introduction value={search} onChange={e => handleInput(e)}/>
        <ProjectList projects={projectsSearch}/>
      </Container>
    </Main>
  )
}

export default Projects
