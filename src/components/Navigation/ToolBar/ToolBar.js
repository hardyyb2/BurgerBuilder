import React from 'react'
import classes from './ToolBar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawerToggler from '../SideDrawer/SideDrawerToggler/SideDrawerToggler'

const toolbar = props => {
  return (
    <header className={classes.ToolBar}>
      <SideDrawerToggler clicked={props.clicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolbar
