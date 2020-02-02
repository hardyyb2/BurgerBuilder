import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button'

const ordersummary = props => {
  const orders = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      {igKey} : {props.ingredients[igKey]}
    </li>
  ))
  return (
    <Auxiliary>
      <p className={classes.Header}> Your order summary </p>
      <ul className={classes.OrderList}>{orders}</ul>
      <p className={classes.Checkout}>Do you want to Checkout?</p>
      <p>Total Price : {props.totalPrice.toFixed(2)}</p>
      <div>
        <Button clicked={props.cancelled} BtnType='Danger'>
          Cancel
        </Button>
        <Button clicked={props.continued} BtnType='Success'>
          Continue
        </Button>
      </div>
    </Auxiliary>
  )
}

export default ordersummary
