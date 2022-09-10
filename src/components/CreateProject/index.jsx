import { useFormik } from 'formik'
import React, { useRef, useState, useEffect } from 'react'
import { StyledForm } from '../../styles/CreateProject/CreateNewProject'

import { create } from 'ipfs-http-client'
import useProjects from '../../hooks/useProjects'

import json from '../../hooks/data.json'

const authorization = 'Basic ' + btoa(process.env.PROJECT_ID + ':' + process.env.PROJECT_SECRET)

const client = create({
  url: 'https://ipfs.infura.io:5001/api/v0',
  headers: {
    authorization
  }
})

const CreateNewProject = () => {
  const [certified, setCertified] = useState()
  const { createProject } = useProjects()

  const formik = useFormik({
    initialValues: {
      _projectName: '',
      _tokenSupply: '',
      urlJsonMetadata: ''
    },
    onSubmit: async (values) => {
      const added = await client.add(certified)
      const url = `https://infura-ipfs.io/ipfs/${added.path}`
      const objJsonStr = JSON.stringify({ ...values, image: url })
      const objJsonB64 = Buffer.from(objJsonStr).toString('base64')
      const res = await createProject({
        _projectName: values._projectName,
        _tokenSupply: values._tokenSupply,
        urlJsonMetadata: 'data:application/json;base64,' + objJsonB64
      })
      // loadJson()
    }
  })

  useEffect(() => {
    // loadJson()
  }, [])

  const loadJson = async () => {
    json.data.map(async (elem, index) => {
      console.log(index)
      const jselem = elem
      jselem.approved_credits = jselem.approved_credits.replace('.', '').replace('.', '')
      const url = 'https://infura-ipfs.io/ipfs/QmY7QQERBMcCgjmaYkptiBh5164es43aNpLgHTQXU2ZrPj'
      const objJsonStr = JSON.stringify({ ...jselem, image: url })
      const objJsonB64 = Buffer.from(objJsonStr).toString('base64')
      const res = await createProject({
        _projectName: jselem.title,
        _tokenSupply: jselem.approved_credits,
        urlJsonMetadata: 'data:application/json;base64,' + objJsonB64
      })
    })
  }

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
