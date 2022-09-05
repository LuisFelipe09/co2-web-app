import React from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>Project {params.tokenId}</div>
  )
}

export default Project
