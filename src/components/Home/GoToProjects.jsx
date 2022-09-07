import React from 'react'
import { Link } from 'react-router-dom'
import { GoToProjectsSectionStyled } from '../../styles/Home/GoToProjects'

const GoToProjects = () => {
  return (
    <GoToProjectsSectionStyled>
    <h2>Start</h2>
      <Link to={'/projects'}>
        <button className='link-button'>Go to Projects</button>
      </Link>
    </GoToProjectsSectionStyled>
  )
}

export default GoToProjects
