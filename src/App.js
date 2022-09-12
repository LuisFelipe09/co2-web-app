import React from 'react'
import { Route } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import CreateProject from './views/CreateProject'
import Home from './views/home'
import Project from './views/Project'
import Projects from './views/Projects'

function App () {


  return (
    <>
      <GlobalStyles/>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects}/>
        <Route path="/projects/:tokenId" component={Project } />
        <Route path="/create-project" exact component={CreateProject} />
    </>
  )
}

export default App
