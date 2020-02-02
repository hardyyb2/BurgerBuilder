import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey =>
      [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredients key={igKey + i} type={igKey} />
      ))
    )
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = 'Please start adding to your Burger .'
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type='bread-top' />
      {transformedIngredients}
      <BurgerIngredients type='bread-bottom' />
    </div>
  )
}
export default burger
