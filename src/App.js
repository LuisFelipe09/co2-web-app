import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import CreateProject from './views/CreateProject'
import Home from './views/home'
import Projects from './views/Projects'

function App () {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/projects" exact element={<Projects/>} />
        <Route path="/create-project" exact element={<CreateProject/>} />
      </Routes>
    </>
  )
}

export default App
