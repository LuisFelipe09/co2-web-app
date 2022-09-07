import React from 'react'
import { TextFieldContainer } from '../../styles/Project/TextField'

const TextField = ({ title, text }) => {
  return (
    <TextFieldContainer>
      <strong>{title}</strong>
      <p>{text}</p>
    </TextFieldContainer>
  )
}

export default TextField
