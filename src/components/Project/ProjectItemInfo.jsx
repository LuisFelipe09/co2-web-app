import React, { useState, useEffect } from 'react'
import { ProjectItemInfoContainer, Section } from '../../styles/Project/ProjectItemInfo'
import TableInfo from './TableInfo'
import TextField from './TextField'

import { GoogleMap, LoadScript } from '@react-google-maps/api'

const ProjectItemInfo = ({ project, transferToken }) => {
  const [mockTableData] = useState({
    titles: ['Country', 'State', 'Municipality'],
    text: [
      project.ubication.country,
      project.ubication.department,
      project.ubication.municipality
    ]
  })
  const [mockTableData2] = useState({
    titles: ['Token Id', 'Green Bonds Issued'],
    text: [project.token_id, project?.approved_credits]
  })

  const [address, setAddress] = useState('')
  const [tokenType, setTokenType] = useState('')
  const [tokenCount, setTokenCount] = useState('')
  const [coordinates, setCoordinates] = useState({})

  useEffect(() => {
    (async () => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${project.ubication.country}+${project.ubication.department}+${project.ubication.municipality}&key=${process.env.GOOGLE_KEY}`)
        .then(r => r.json())
        .then(data => {
          console.log(data.results[0])
          setCoordinates({
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng
          })
        })
    })()
  }, [project])

  const sendTokens = () => {
    console.log('transfering tokens...')
    console.log({
      address,
      tokenType,
      tokenCount
    })
    transferToken(project.token_id, address, tokenType, tokenCount)
  }

  return (
    <ProjectItemInfoContainer>
      <div className='titles'>
        <img className='titles-img' src="https://cdn-icons-png.flaticon.com/512/6298/6298900.png" alt="NFT-image" />
        <h1 className='titles-title'>Carbono Agroporvanda</h1>
        <button className='titles-button'>
          <img className='titles-button__button' src="https://cdn-icons-png.flaticon.com/512/5968/5968321.png" alt="" />
          Support this Project
        </button>
      </div>

        <Section>
          <div className='info-address'>
          <LoadScript
            googleMapsApiKey={process.env.GOOGLE_KEY}
          >
            <GoogleMap
              mapContainerStyle={{
                width: '400px',
                height: '400px'
              }}
              center={coordinates}
              zoom={10}
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
            </GoogleMap>
          </LoadScript>

          </div>

          <div className='info-fields'>
            <TextField title="ProjectID: " text={project.token_id} />
            <TextField title="Registration date: " text={project.register_date} />
            <TextField title="Accreditation period: " text={project.acreditation_date} />
            <TextField title="Validator: " text={project.validator} />
            <TextField title="Checker: " text={project.verificator} />
            <TextField title="Project Stage: " text={project.project_state} />
            <TextField title="Sector: " text={project.sector} />
            <TextField title="Evaluation criteria: " text={project.evaluation_criteria} />
            <TextField title="Quantification methodology: " text={project.quantification_methodology} />

            <TableInfo title='Ubicación' rowTitles={mockTableData.titles} rowText={mockTableData.text} />
            <TableInfo title={''} rowTitles={mockTableData2.titles} rowText={mockTableData2.text} />
          </div>

          <div className='info-description'>
            <h2>Your balance</h2>
            <p>Tokens: {project.tokens}</p>
            <p>NFTs: {project.NFTs}</p>

            <h2>Transfer Bonds</h2>
            <p>Address</p>
            <input type="text" value={address} onChange={ e => setAddress(e.target.value) } />
            <label htmlFor="html">Token</label>
            <input type="radio" id="html" name="fav_language" value="Token" onClick={() => setTokenType('1')}/>
            <label htmlFor="html">NFT</label>
            <input type="radio" id="css" name="fav_language" value="NFT" onClick={() => setTokenType('0')}/>
            <p>Cantidad</p>
            <input type="text" value={tokenCount} onChange={ e => setTokenCount(e.target.value) }/>
            <button onClick={sendTokens}>Send</button>
          </div>
        </Section>
    </ProjectItemInfoContainer>
  )
}

export default ProjectItemInfo
