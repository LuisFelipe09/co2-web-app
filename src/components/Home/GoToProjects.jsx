import React from 'react'
import { Link } from 'react-router-dom'
import { GoToProjectsSectionStyled } from '../../styles/Home/GoToProjects'

const GoToProjects = () => {
  return (
    <GoToProjectsSectionStyled>
    <h2>Start</h2>
    <button className='link-button'>
      <Link to={'/projects'}>Go to Projects</Link>
    </button>
    </GoToProjectsSectionStyled>
  )
}

export default GoToProjects
