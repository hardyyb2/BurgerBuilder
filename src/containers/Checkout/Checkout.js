import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

const Checkout = props => {
  const [ingredients, setIngredients] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const ingredients = queryString.parse(props.location.search, {
      parseNumbers: true
    })
    const totalPrice = ingredients.price
    delete ingredients.price
    setIngredients(ingredients)
    setTotalPrice(totalPrice)
    console.log(ingredients, totalPrice)
  }, [])

  const checkoutCancelHandler = () => {
    props.history.goBack()
  }
  const checkoutContinueHandler = () => {
    props.history.replace('/checkout/contact-data')
  }

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelHandler={checkoutCancelHandler}
        checkoutContinueHandler={checkoutContinueHandler}
      />
      <Route
        path={props.match.path + '/contact-data'}
        render={props => (
          <ContactData
            ingredients={ingredients}
            price={totalPrice}
            {...props}
          />
        )}
      />
    </div>
  )
}

export default Checkout
