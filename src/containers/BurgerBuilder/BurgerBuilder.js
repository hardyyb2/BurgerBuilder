import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'
import axios from '../../axiosorders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENTS_PRICE = {
  meat: 1.4,
  bacon: 0.9,
  cheese: 0.7,
  salad: 0.2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    axios
      .get('https://burger-builder-7e15b.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data })
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  updatePurchasable(ingredients) {
    const totalSum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((arr, el) => arr + el, 0)
    const isPurchasable = totalSum > 0
    this.setState({ purchasable: isPurchasable })
  }

  purchaseIngredient = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    const queryParams = []

    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i])
      )
    }
    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  }

  addIngredient = type => {
    const oldCount = this.state.ingredients[type]
    const newCount = oldCount + 1
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = newCount
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + INGREDIENTS_PRICE[type]
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchasable(updatedIngredients)
  }

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) return
    const newCount = oldCount - 1
    const updatedIngredients = { ...this.state.ingredients }
    updatedIngredients[type] = newCount
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - INGREDIENTS_PRICE[type]
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.updatePurchasable(updatedIngredients)
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let burger = this.state.error ? (
      <p>Ingredients cannot be loaded</p>
    ) : (
      <Spinner />
    )
    let ordersummary = null

    if (this.state.ingredients) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.state.ingredients} />
          <Modal
            show={this.state.purchasing}
            clicked={this.purchaseCancelHandler}
          >
            {ordersummary}
          </Modal>
          <BuildControls
            ingredientAdded={this.addIngredient}
            ingredientRemoved={this.removeIngredient}
            disabled={disabledInfo}
            currentPrice={this.state.totalPrice}
            purchasable={this.state.purchasable}
            purchasing={this.purchaseIngredient}
          />
        </Auxiliary>
      )
      ordersummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancelled={this.purchaseCancelHandler}
          continued={this.purchaseContinueHandler}
          totalPrice={this.state.totalPrice}
        />
      )
    }

    if (this.state.loading) {
      ordersummary = <Spinner />
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {ordersummary}
        </Modal>
        {burger}
      </Auxiliary>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)
