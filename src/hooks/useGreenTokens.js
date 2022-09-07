import { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'

import GreenTokensArtifacts from '../config/artifacts/GreenTokens'
const { address, abi } = GreenTokensArtifacts

// Instancia basica al contrato GreenTokens, en la chain de Goerli
const useGreenTokens = () => {
  const { active, library, chainId } = useWeb3React()

  const greenTokens = useMemo(() => {
    if (active) {
      const key = chainId !== undefined ? chainId : 5
      return new library.eth.Contract(abi, address[key])
    }
  }, [active, chainId, library])

  return greenTokens
}

export default useGreenTokens
