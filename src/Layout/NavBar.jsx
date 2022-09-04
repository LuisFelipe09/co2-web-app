import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarList } from '../styles/LayOut/NavBar'

const NavBar = () => {
  return (
    <nav>
      <NavBarList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/create-project">Create Project</Link>
        </li>
        <p>
          Connect
        </p>
      </NavBarList>
    </nav>
  )
}

export default NavBar
