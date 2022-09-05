import React from 'react'
import CO2Bonds from '../../components/Home/CO2Bonds'
import GoToProjects from '../../components/Home/GoToProjects'
import Introduction from '../../components/Home/Introduction'
import Participate from '../../components/Home/Participate'
import { Main } from '../../styles/GeneralStyles'

const Home = () => {
  return (
    <Main>
      <Introduction/>
      <CO2Bonds/>
      <Participate/>
      <GoToProjects/>
    </Main>
  )
}

export default Home
