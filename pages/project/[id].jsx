import React from 'react'
import { useRouter } from 'next/router'
import ProjectItemInfo from '../../src/components/Project/ProjectItemInfo'
import { Main } from '../../src/styles/GeneralStyles'

const Project = () => {
  const { query: { id } } = useRouter()
  return (
    <Main>
      <ProjectItemInfo tokenId={id}/>
    </Main>
  )
}

export default Project
