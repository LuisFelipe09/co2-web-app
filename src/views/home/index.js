import React from 'react'
import CO2Bonds from '../../components/Home/CO2Bonds'
import Introduction from '../../components/Home/Introduction'
import Participate from '../../components/Home/Participate'
import { Main } from '../../styles/Layout/GeneralStyles'

const Home = () => {
  return (
    <Main>
      <Introduction/>
      <CO2Bonds/>
      <Participate/>
    </Main>
  )
}

export default Home
