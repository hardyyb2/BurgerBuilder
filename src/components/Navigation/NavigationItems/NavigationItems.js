import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem.js'
import classes from './NavigationItems.module.css'

const navigationitems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
  )
}

export default navigationitems
