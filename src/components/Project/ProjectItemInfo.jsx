import React from 'react'
import TableInfo from './TableInfo'
import TextField from './TextField'

const mockTableData = {
  titles: ['Country', 'State', 'Municipality'],
  text: ['Colombia', 'Cordoba', 'Planeta Rica']
}

const mockTableData2 = {
  titles: ['Token Id', 'Green Bonds Issued'],
  text: ['1', '50']
}

const ProjectItemInfo = ({ tokenId }) => {
  return (
    <div>
      <div className='titles'>
        <img className='titles-img' src="https://cdn-icons-png.flaticon.com/512/6298/6298900.png" alt="NFT-image" />
        <h1 className='titles-title'>Carbono Agroporvanda</h1>
        <button className='titles-back'>Volver</button>
      </div>

      <section className='info'>
        <div className='info-address'>
          <img className='info-address-img' src="" alt="map img" />
        </div>

        <div className='info-fields'>
          <TextField title="ProjectID: " text={tokenId} />
          <TextField title="Registration date: " text={tokenId} />
          <TextField title="Accreditation period: " text={tokenId} />
          <TextField title="Validator: " text={tokenId} />
          <TextField title="Checker: " text={tokenId} />
          <TextField title="Project Stage: " text={tokenId} />
          <TextField title="Sector: " text={tokenId} />
          <TextField title="Evaluation criteria: " text={tokenId} />
          <TextField title="Quantification methodology: " text={tokenId} />

          <TableInfo title='Ubicación' rowTitles={mockTableData.titles} rowText={mockTableData.text} />
          <TableInfo title={''} rowTitles={mockTableData2.titles} rowText={mockTableData2.text} />

          <h2>Project Description</h2>
          <p>Descripción</p>
        </div>
      </section>
    </div>
  )
}

export default ProjectItemInfo
