import React from 'react'
import { ParticipateStyled } from '../../styles/Home/Participate'

const Participate = () => {
  return (
    <ParticipateStyled>
      <h2>How to participate?</h2>

      <div className='how'>

        <div className='how__container'>
          <h3 className='how__subtitle'>Who?</h3>
          <p className='how__text'>Any person or organization that wants to contribute to the fight against climate change.</p>

          <div className='how-image-text--doble'>
            <div>
              <img className='how__image' src="https://cdn-icons-png.flaticon.com/512/2821/2821858.png" alt="" />
              <p className='how__text'>Organization</p>
            </div>
            <div>
              <img className='how__image' src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="" />
              <p className='how__text'>Individuals</p>
            </div>
          </div>

        </div>

        <div className='how__container'>
          <h3 className='how__subtitle'>Choose</h3>
          <div className='how__image-text'>
            <p className='how__text'>Choose the projects and choose the one that best suits with your cause.</p>
            <img className='how__image' src="https://cdn-icons-png.flaticon.com/512/2230/2230606.png" alt="" />
          </div>
        </div>

        <div className='how__container'>
          <h3 className='how__subtitle'>How it works?</h3>
          <div className='how__image-text'>
            <p className='how__text'>Using blockchain technology by the Etherum Virtual machine, the contract process your transaction sending your purchase to the project account.</p>
            <img className='how__image' src="https://cdn-icons-png.flaticon.com/512/5960/5960252.png" alt="" />
          </div>
        </div>

        <div className='how__container'>
          <h3 className='how__subtitle'>What do I get at the end?</h3>
          <div className='how__image-text'>
            <p className='how__text'>Your purchase gives you an NFT that represents a Green Bond of the project, your NFT has an unique ID and transaction that will be associate to you wallet.</p>
            <img className='how__image' src="https://cdn-icons-png.flaticon.com/512/6298/6298900.png" alt="" />
          </div>
        </div>

      </div>

    </ParticipateStyled>
  )
}

export default Participate
