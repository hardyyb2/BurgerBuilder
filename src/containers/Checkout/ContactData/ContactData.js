import React, { Component } from 'react'
import classes from './ContactData.module.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axiosorders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
  state = {
    name: '',
    address: {
      street: '',
      postalCode: ''
    },
    email: '',
    phone: '',
    loading: false
  }
  orderHandler = event => {
    event.preventDefault()
    this.setState({ loading: true })
    const options = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      credentials: {
        name: 'hardik',
        class: '1'
      }
    }
    axios
      .post('/orders.json', options)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(err => this.setState({ loading: false }))
  }

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Name...'
        />
        <input
          className={classes.Input}
          type='email'
          name='email'
          placeholder='Email...'
        />
        <input
          className={classes.Input}
          type='number'
          name='phone'
          placeholder='Phone...'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Street...'
        />
        <input
          className={classes.Input}
          type='text'
          name='postal'
          placeholder='Postal Code...'
        />
        <Button BtnType='Success' clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }

    return <div className={classes.ContactData}>{form}</div>
  }
}

export default ContactData
