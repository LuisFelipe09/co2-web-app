import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import CreateProject from './views/CreateProject'
import Home from './views/home'
import Project from './views/Project'
import Projects from './views/Projects'
import Web3 from 'web3'

function App () {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    window.ethereum.enable()
  }

  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/projects" exact element={<Projects/>}/>
        <Route path="/projects/:tokenId" element={<Project></Project> } />
        <Route path="/create-project" exact element={<CreateProject/>} />
      </Routes>
    </>
  )
}

export default App
