import React from 'react'
import { TableInfoContainer } from '../../styles/Project/TableInfo'

const TableInfo = ({ title, rowTitles, rowText }) => {
  return (
    <TableInfoContainer>
      <strong>{title}</strong>

      <div className='table-info titles'>
        {rowTitles.map((rowTitle, index) => (
          <strong key={rowTitle}>{rowTitle}</strong>
        ))}
      </div>

      <div className='table-info'>
        {rowText.map((text, index) => (
          <p key={text}>{text}</p>
        ))}
      </div>
  </TableInfoContainer>
  )
}

export default TableInfo
