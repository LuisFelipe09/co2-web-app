import React from 'react'
import CO2Bonds from '../src/components/Home/CO2Bonds'
import GoToProjects from '../src/components/Home/GoToProjects'
import Introduction from '../src/components/Home/Introduction'
import Participate from '../src/components/Home/Participate'
import Projects from '../src/components/Home/Projects'
import { Main } from '../src/styles/GeneralStyles'

const Home = () => {
  return (
    <Main>
      <Introduction/>
      <CO2Bonds/>
      <Projects/>
      <Participate/>
      <GoToProjects/>
    </Main>
  )
}

export default Home
