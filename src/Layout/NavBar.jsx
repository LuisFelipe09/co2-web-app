import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarList, NavStyled } from '../styles/Layout/NavBar'
import WalletData from '../Layout/WalletData'

const NavBar = () => {
  return (
    <NavStyled>
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
        <li>
          <WalletData/>
        </li>
      </NavBarList>
    </NavStyled>
  )
}

export default NavBar
