import { useState, useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import useGreenTokens from './useGreenTokens'

import BaseTokenArtifacts from '../config/artifacts/BaseToken'
const { abi } = BaseTokenArtifacts

const useProjects = () => {
  const greenTokens = useGreenTokens()
  const [projects, setProjects] = useState([])
  const [projectsInstances, setProjectsInstances] = useState([])
  const { active, library, account, chainId } = useWeb3React()
  const [projectsUserInteract, setProjectsUserInteract] = useState([])

  const getProjects = useCallback(async () => {
    if (greenTokens) {
      const projectsPromises = []
      const projectsInstancesPromises = []
      const limit = await greenTokens.methods._projectIdCounter().call()
      // c < limit porque el limit siempre va uno por delante
      for (let c = 0; c < limit; c++) {
        const projectRes = await greenTokens.methods.project(c).call()
        const projectContract = new library.eth.Contract(abi, projectRes.tokens)

        projectsPromises.push(projectRes)
        projectsInstancesPromises.push(projectContract)
      }

      setProjects(projectsPromises)
      setProjectsInstances(projectsInstancesPromises)
    }
  }, [greenTokens])

  const createProject = async ({ _projectName, _tokenSupply, urlJsonMetadata }) => {
    if (greenTokens) {
      const response = await greenTokens.methods.createProject(_projectName, _tokenSupply, urlJsonMetadata)
        .send({ from: account })
        .on('error', () => {
          console.log('error')
        })
    }
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
    setProjectsUserInteract(projectUser)
  }

  useEffect(() => {
    getProjects()
  }, [getProjects, greenTokens])

  return { projects, getProjects, projectsInstances, createProject, getProjectsWhereUserInteract }
}

export default useProjects
