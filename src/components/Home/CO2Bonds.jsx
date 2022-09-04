import React from 'react'
import { CO2Styled } from '../../styles/Home/CO2bond'

const CO2Bonds = () => {
  return (
    <CO2Styled>
      <h2>But... What is a Green Bond?</h2>
      <div className='info-container'>
        <img src="https://climate.nasa.gov/system/resources/detail_files/240_Greenhouse_effect_revised_HD_English.jpg" alt="" />
        <div className='info-container__text'>
          <h3 className='info-container__text--title'>The Problem</h3>

          <p> There is scientific evidence that the earth is warming and the climate is changing. One of the causes of this climate change is the emissions of so-called greenhouse gases (GHG).
          </p>

          <p>The contribution that each individual, company or organization has regarding climate change is known as carbon footprint. This footprint can be measured by quantifying our main sources of energy consumption, such as transport or electricity.</p>

          <p>By purchasing a Carbon Credit, the emission into the atmosphere of one ton of carbon dioxide (CO2) is avoided</p>
        </div>
      </div>

      <div className='info-container'>
        <img src="https://www.iberdrola.com/documents/20125/41638/Bonos_Verdes_ENG.jpg/0fd301c0-9f0c-7868-4ebe-acbbb77adea4?t=1629699256631" alt="" />
        <div className='info-container__text'>
          <h3 className='info-container__text--title'>The projects</h3>
          <p>To ensure that these offsetting actions are happening, carbon sequestration projects have to demonstrate some basic elements. On the one hand, these projects have to be certified under some standard or follow some recognized methodology, which guarantees that the compensation actions are actually taking place.</p>

          <p>On the other hand, it has to be guaranteed that the removal of greenhouse gases is permanent. This means that a carbon credit does not expire. By financing the purchase of carbon credits in a certified project, it is guaranteed that the compensation of a certain carbon footprint will be permanent.</p>

          <p>Attending to the Kyoto Protocol that was created to reduce greenhouse gas (GHG) emissions that cause global warming. It is an instrument to put into practice what was agreed in the United Nations Framework Convention on Climate Change</p>

        </div>
      </div>
    </CO2Styled>
  )
}

export default CO2Bonds
