import { useFormik } from 'formik'
import React from 'react'
import { StyledForm } from '../../styles/CreateProject/CreateNewProject'

const CreateNewProject = () => {
  const formik = useFormik({
    initialValues: {
      projectName: '',
      projectSupply: '',
      url: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

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

    <button type="submit" onClick={formik.handleSubmit}>Send</button>
  </StyledForm>
  )
}

export default CreateNewProject
