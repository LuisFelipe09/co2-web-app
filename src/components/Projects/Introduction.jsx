import React from 'react'
import { IntroductionStyled } from '../../styles/Projects/IntroductionStyled'

const Introduction = ({ value, onChange }) => {
  return (
    <IntroductionStyled>
      <form>
        <input type="text" value={value} onChange={onChange} />
        <p>Lupita</p>
      </form>
    </IntroductionStyled>
  )
}

export default Introduction
