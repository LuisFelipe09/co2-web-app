import { useState, useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import useGreenTokens from './useGreenTokens'

import BaseTokenArtifacts from '../config/artifacts/BaseToken'
const { abi } = BaseTokenArtifacts

const useProjects = () => {
  const greenTokens = useGreenTokens()
  const [projects, setProjects] = useState([])
  const [projectsInstances, setProjectsInstances] = useState([])
  const { active, library, chainId } = useWeb3React()
  const [projectsUserInteract, setProjectsUserInteract] = useState([])

  const getProjects = useCallback(async () => {
    const projectsPromises = []
    const projectsInstancesPromises = []
    const limit = await greenTokens.methods._projectIdCounter().call()
    // c < limit porque el limit siempre va uno por delante
    for (let c = 0; c < limit; c++) {
      const projectRes = await greenTokens.methods.project(c)
      const projectContract = new library.eth.Contract(abi, projectRes.tokens)

      projectsPromises.push(projectRes)
      projectsInstancesPromises.push(projectContract)
    }

    console.log(projectsPromises)
    console.log(projectsInstancesPromises)

    setProjects(projectsPromises)
    setProjectsInstances(projectsInstancesPromises)
  }, [projects])

  const createProject = async ({ _projectName, _tokenSupply, urlJsonMetadata }) => {
    const response = greenTokens.methods.createProject(_projectName, _tokenSupply, urlJsonMetadata).call()
    console.log(response)
  }

  const getProjectsWhereUserInteract = async ({ userAddress }) => {
    const projectUser = []

    for (let contract = 0; contract < projectsInstances.length; contract++) {
      const NFT = await projectsInstances[contract].methods.balanceOf(userAddress, 0)
      const Token = await projectsInstances[contract].methods.balanceOf(userAddress, 1)

      if (NFT !== 0 || Token !== 0) {
        projectUser.push({
          NFT,
          Tokens: Token
        })
      }
    }
    console.log('getProjectsWhereUserInteract')
    console.log(projectsUserInteract)
    setProjectsUserInteract(projectUser)
  }

  useEffect(() => {
    getProjects()
  }, [getProjects])

  return { projects, getProjects, createProject, getProjectsWhereUserInteract }
}

export default useProjects
