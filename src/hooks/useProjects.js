import { useState, useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import useGreenTokens from './useGreenTokens'

import BaseTokenArtifacts from '../config/artifacts/BaseToken'
const { abi } = BaseTokenArtifacts

const useProjects = () => {
  const greenTokens = useGreenTokens()
  const [projects, setProjects] = useState([])
  const { active, library, account } = useWeb3React()

  // Señala si hay algun proceso ejecutandose
  const [loading, setLoading] = useState(false)

  // "Serializa las urls de los proyectos a su metada"
  const getProject = async (projectID) => {
    const projectAddress = await greenTokens.methods.project(projectID).call()
    const projectContract = new library.eth.Contract(abi, projectAddress.tokens)
    const uriToFetch = await projectContract.methods.uri(0).call()
    const responseMetaData = await fetch(
      uriToFetch.includes('data:application/json;base64,') ? uriToFetch : 'data:application/json;base64,' + uriToFetch
    )
    let metadata = await responseMetaData.json()
    let tokens = 0
    let NFTs = 0

    if (active && account.length > 0) {
      NFTs = await projectContract.methods.balanceOf(account, 0).call()
      tokens = await projectContract.methods.balanceOf(account, 1).call()
    }

    metadata = {
      ...metadata,
      // Si tienes tokens del projecto
      creator: projectAddress.creator,
      token_id: projectID,
      tokens,
      NFTs
    }

    return metadata
  }

  // Obtiene todos los proyectos y su metadata, así también como el saldo
  // del account con respecto al proyecto
  const getProjects = useCallback(async () => {
    if (greenTokens) {
      setLoading(true)
      const projectsInstancesPromises = []
      const limit = await greenTokens.methods._projectIdCounter().call()
      // c < limit porque el limit siempre va uno por delante
      for (let c = 0; c < limit; c++) {
        const projectMetadata = await getProject(c)

        projectsInstancesPromises.push(projectMetadata)
      }

      setProjects(projectsInstancesPromises)
      setLoading(false)
    }
  }, [greenTokens])

  const createProject = async ({ _projectName, _tokenSupply, urlJsonMetadata }) => {
    if (greenTokens) {
      setLoading(true)
      const response = await greenTokens.methods.createProject(_projectName, _tokenSupply, urlJsonMetadata)
        .send({ from: account })
        .on('error', () => {
          console.log('error')
        })
      setLoading(false)
    }
  }

  useEffect(() => {
    getProjects()
  }, [getProjects, greenTokens])

  return { projects, getProjects, createProject, loading }
}

export default useProjects
