import React, { useState, useEffect, useCallback } from 'react'
import Introduction from '../src/components/Projects/Introduction'
import { Main } from '../src/styles/GeneralStyles'
import ProjectList from '../src/components/Projects/ProjectList'
import useProjects from '../src/hooks/useProjects'

import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
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
        console.log(elem.title, search)
        return elem.title.toLowerCase().includes(search.toLowerCase())
      })
    }
    console.log(res)
    setProjectsSearch(res)
  }, [search, projects])

  useEffect(() => {
    handleProjects()
  }, [handleProjects, search])

  const handleInput = e => {
    console.log(e.target.value)
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
