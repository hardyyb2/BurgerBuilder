import React from 'react'
import './App.css'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route } from 'react-router-dom'
import Orders from './containers/Orders/Orders'

function App() {
  return (
    <div>
      <Layout>
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' exact component={Orders} />
        <Route path='/' exact component={BurgerBuilder} />
      </Layout>
    </div>
  )
}

export default App
