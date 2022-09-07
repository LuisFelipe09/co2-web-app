import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'

import { Web3ReactProvider } from '@web3-react/core'

import { getLibrary } from './config/web3'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <App />
      </Layout>
    </Web3ReactProvider>
  </BrowserRouter>
)
