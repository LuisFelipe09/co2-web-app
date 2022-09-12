import { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import ContractArtifact from '../../config/web3/artifacts/Contract'

const { address, abi } = ContractArtifact

const useSmartContract = () => {
  const { active, library, chainId } = useWeb3React()

  const smartContract = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId])
  }, [active, chainId, library?.eth?.Contract])

  return smartContract
}

export default useSmartContract
