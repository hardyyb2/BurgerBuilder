import React from 'react'
import LogoImage from '../../assets/Images/logo.png'
import classes from './Logo.module.css'

const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={LogoImage} alt='MyBurger' />
    </div>
  )
}

export default logo
