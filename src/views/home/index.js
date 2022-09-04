import React from 'react'
import CO2Bonds from '../../components/Home/CO2Bonds'
import Introduction from '../../components/Home/Introduction'
import { Main } from '../../styles/Layout/GeneralStyles'

const Home = () => {
  return (
    <Main>
      <Introduction/>
      <CO2Bonds/>
    </Main>
  )
}

export default Home
