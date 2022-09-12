import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Layout from './Layout'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './config/web3'
import { HashRouter } from "react-router-dom";


ReactDOM.render(
  <HashRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <App />
      </Layout>
    </Web3ReactProvider>
  </HashRouter>, document.getElementById('root')
)
