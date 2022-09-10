import React from 'react'
import { IntroductionStyled, Background } from '../../styles/Home/Introduction'

const Introduction = () => {
  return (
    <IntroductionStyled>
      <Background src='/assets/forest2.jpg' alt="background" />
      <img src="https://cryptologos.cc/logos/ethereum-classic-etc-logo.png" alt="Introduction"/>
      <h1>CO2 WEB3</h1>
      <h2>The Green Bonds decentralized marketplace</h2>
    </IntroductionStyled>
  )
}

export default Introduction
