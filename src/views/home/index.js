import { useWeb3React } from '@web3-react/core'
import React, { useCallback, useEffect, useState } from 'react'
import Web3 from 'web3'
import CO2Bonds from '../../components/Home/CO2Bonds'
import GoToProjects from '../../components/Home/GoToProjects'
import Introduction from '../../components/Home/Introduction'
import Participate from '../../components/Home/Participate'
import useSmartContract from '../../hooks/useSmartContract'
import { Main } from '../../styles/GeneralStyles'

const Home = () => {
  const smartContract = useSmartContract()
  const { active, account } = useWeb3React()
  const [imageSrc, setImageSrc] = useState('')

  const getSmartContractData = useCallback(async () => {
    if (smartContract) {
      const totalSupply = await smartContract.methods.totalSupply().call()
      console.log('total', totalSupply)
      const dnaPreview = await smartContract.methods
        .deterministicPseudoRandomDNA(totalSupply, account)
        .call()
      const image = await smartContract.methods.imageByDNA(dnaPreview).call()
      setImageSrc(image)
    }
  }, [smartContract, account])

  useEffect(() => {
    getSmartContractData()
  }, [getSmartContractData])

  console.log('imageSrc', smartContract)





  return (
    <Main>
      <Introduction/>
      <CO2Bonds/>
      <Participate/>
      <GoToProjects/>
    </Main>
  )
}

export default Home
