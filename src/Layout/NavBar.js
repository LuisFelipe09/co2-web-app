import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/create-project">Create Project</Link>
    </nav>
  )
}

export default NavBar