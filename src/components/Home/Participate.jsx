import React from 'react'
import { ParticipateStyled } from '../../styles/Home/Participate'

const Participate = () => {
  return (
    <ParticipateStyled>
      <h2>How to participate?</h2>

      <div className='how'>

        <div className='how__who'>
          <h3 className='how_subtitle'>Who?</h3>
          <p>Any person or organization that wants to contribute to the fight against climate change.</p>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2821/2821858.png" alt="" />
            <p>Organization</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="" />
            <p>Individuals</p>
          </div>
        </div>

        <div className='how_container'>
          <h3 className='how_subtitle'>Choose</h3>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2230/2230606.png" alt="" />
            <p>Choose the projects and choose the one that best suits with your cause.</p>
          </div>
        </div>

        <div className='how_container'>
          <h3 className='how_subtitle'>How it works?</h3>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/5960/5960252.png" alt="" />
            <p>Using blockchain technology by the Etherum Virtual machine, the contract process your transaction sending your purchase to the project account</p>
          </div>
        </div>

        <div className='how_container'>
          <h3 className='how_subtitle'>What do I get at the end?</h3>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/6298/6298900.png" alt="" />
            <p>Your purchase gives you an NFT that represents a Green Bond of the project, your NFT has an unique ID and transaction that will be associate to you wallet</p>
          </div>
        </div>

      </div>

    </ParticipateStyled>
  )
}

export default Participate
