import React from 'react'
import { IntroductionStyled } from '../../styles/Projects/IntroductionStyled'

const Introduction = () => {
  return (
    <IntroductionStyled>
      <img className='introduction-img' src="https://cryptologos.cc/logos/ethereum-classic-etc-logo.png" alt="Introduction"/>
      <div>
        <h1 className='introduction-title'>Green Bonds Projects</h1>
        <h2 className='introduction-subtitle'>Welcome!!, you can support your favorite projects</h2>
      </div>
    </IntroductionStyled>
  )
}

export default Introduction
