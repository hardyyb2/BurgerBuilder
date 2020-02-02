import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

const sidedrawer = props => {
  let SidedrawerClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    SidedrawerClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <Auxiliary>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={SidedrawerClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  )
}

export default sidedrawer
