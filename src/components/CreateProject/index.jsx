import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import { StyledForm } from '../../styles/CreateProject/CreateNewProject'

import { create } from 'ipfs-http-client'

const { REACT_APP_PROJECT_ID, REACT_APP_PROJECT_SECRET } = process.env
const authorization = 'Basic ' + btoa(REACT_APP_PROJECT_ID + ':' + REACT_APP_PROJECT_SECRET)

const client = create({
  url: 'https://ipfs.infura.io:5001/api/v0',
  headers: {
    authorization
  }
})

const CreateNewProject = () => {
  const [certified, setCertified] = useState()

  const formik = useFormik({
    initialValues: {
      projectName: '',
      projectSupply: '',
      url: ''
    },
    onSubmit: async (values) => {
      const added = await client.add(certified)
      const url = `https://infura-ipfs.io/ipfs/${added.path}`
      const objJsonStr = JSON.stringify({ ...values, image: url })
      const objJsonB64 = Buffer.from(objJsonStr).toString('base64')
      console.log('data:application/json;base64,' + objJsonB64)
      console.log(certified)
    }
  })

  const hiddenFileInput = useRef(null)
  const handleClick = e => {
    hiddenFileInput.current.click()
  }
  const handleChange = e => {
    const fileUploaded = e.target.files[0]
    setCertified(fileUploaded)
  }

  return (
    <StyledForm>
    <h1>Create a new Project</h1>
    <div className='instructions'>
      <h2>How to create a new Project</h2>
      <p>You have to be an authorized organization to publish your tokens</p>
      <p>if you have the authorized role, your contract will be added to the projects list</p>
    </div>

    <div className='input-container'>
      <span>Type your project Name</span>
      <input type="text" {...formik.getFieldProps('projectName') } />
    </div>
    <div className='input-container'>
      <span>Type the number of approved tokens</span>
      <input type="text" {...formik.getFieldProps('projectSupply') } />
    </div>
    <div className='input-container'>
      <span>Type the token URL</span>
      <input type="text" {...formik.getFieldProps('url') } />
    </div>
    <div className='input-container'>
      <span>Type the token URL</span>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
        multiple
      />
      <input type='button' onClick={handleClick} value='Upload certified' />
    </div>
    <button type="submit" onClick={formik.handleSubmit}>Send</button>
  </StyledForm>
  )
}

export default CreateNewProject
