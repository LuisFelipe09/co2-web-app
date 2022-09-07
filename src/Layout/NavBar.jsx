import React, { useCallback, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavBarList, NavStyled, Wallet } from '../styles/Layout/NavBar'

import { connector } from '../config/web3'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import useTruncatedAddress from '../hooks/useTruncatedAddress'

const NavBar = () => {
  const [balance, setBalance] = useState(0)
  const { active, activate, deactivate, account, error, library } =
    useWeb3React()

  const isUnsupportedChain = error instanceof UnsupportedChainIdError

  const connect = useCallback(() => {
    activate(connector)
    console.log('conectado ?')
    localStorage.setItem('previouslyConnected', 'true')
  }, [activate])

  const disconnect = () => {
    deactivate()
    localStorage.removeItem('previouslyConnected')
  }

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') connect()
  }, [connect])

  const truncatedAddress = useTruncatedAddress(account)

  return (
    <NavStyled>
      <NavBarList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/create-project">Create Project</Link>
        </li>
      </NavBarList>
      <Wallet>
        {active
          ? (
          <><p>
              {truncatedAddress} ~ {balance} Ξ
            </p><p onClick={disconnect}>x</p></>
            )
          : (
            <p onClick={connect}>{isUnsupportedChain ? 'Red no soportada' : 'Conectar wallet'}</p>
            )
        }
      </Wallet>
    </NavStyled>
  )
}

export default NavBar
