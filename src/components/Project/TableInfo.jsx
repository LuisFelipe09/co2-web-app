import React from 'react'

const TableInfo = ({ title, rowTitles, rowText }) => {
  return (
    <div>
      <strong>{title}</strong>

      <div>
        {rowTitles.map((rowTitle, index) => (
          <strong key={rowTitle}>{rowTitle}</strong>
        ))}
      </div>

      <div>
        {rowText.map((text, index) => (
          <p key={text}>{text}</p>
        ))}
      </div>
  </div>
  )
}

export default TableInfo
