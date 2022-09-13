import React from 'react'
import { useRouter } from 'next/router'
import ProjectItemInfo from '../../src/components/Project/ProjectItemInfo'
import { Main } from '../../src/styles/GeneralStyles'
import { useProject } from '../../src/hooks/useProjects'

const Project = () => {
  const { query: { id } } = useRouter()
  const { project, loading, transferToken } = useProject(id)

  if (loading) return <h1>Loading...</h1>

  return (
    <Main>
      <ProjectItemInfo project={project} transferToken={transferToken}/>
    </Main>
  )
}

export default Project
