import React from 'react'
import Link from 'next/link'
import { GoToProjectsSectionStyled } from '../../styles/Home/GoToProjects'

const GoToProjects = () => {
  return (
    <GoToProjectsSectionStyled>
    <h2>Start</h2>
      <Link href='/projects'>
        <button className='link-button'>Go to Projects</button>
      </Link>
    </GoToProjectsSectionStyled>
  )
}

export default GoToProjects
