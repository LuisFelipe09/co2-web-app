import React from 'react'
import {
  IntroductionStyled, Input
} from '../../styles/Projects/IntroductionStyled'

const Introduction = ({ value, onChange }) => {
  return (
    <IntroductionStyled>
      <Input type="text" value={value} onChange={onChange} />
    </IntroductionStyled>
  )
}

export default Introduction
