import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectItemInfo from '../../components/Project/ProjectItemInfo'
import { Main } from '../../styles/GeneralStyles'

const Project = () => {
  const params = useParams()
  return (
    <Main>
      <ProjectItemInfo tokenId={params.tokenId}/>
    </Main>
  )
}

export default Project
