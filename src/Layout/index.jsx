import React from 'react'
import NavBar from './NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <div style={{ height: '80px', backgroundColor: '#d3d8c6' }} />
      {children}
    </>
  )
}

export default Layout
