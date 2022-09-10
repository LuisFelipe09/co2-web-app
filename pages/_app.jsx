import React from 'react'
import { GlobalStyles } from '../src/styles/GlobalStyles'

import Layout from '../src/Layout'

import { Web3ReactProvider } from '@web3-react/core'

import { getLibrary } from '../src/config/web3'

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <>
        <GlobalStyles />
        <Web3ReactProvider getLibrary={getLibrary}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ Web3ReactProvider>
    </>
  )
}

export default MyApp
