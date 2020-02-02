import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy your Delicious Burger</h1>
      <div>
        <Burger
          style={{ width: '100%', margin: 'auto' }}
          ingredients={props.ingredients}
        />
      </div>
      <Button BtnType='Danger' clicked={props.checkoutCancelHandler}>
        Cancel
      </Button>
      <Button BtnType='Success' clicked={props.checkoutContinueHandler}>
        Continue
      </Button>
    </div>
  )
}
export default checkoutSummary
