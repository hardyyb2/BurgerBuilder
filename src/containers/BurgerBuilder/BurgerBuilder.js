import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxiliary>
        <Burger />
        <div>burger dteails</div>
      </Auxiliary>
    )
  }
}

export default BurgerBuilder
