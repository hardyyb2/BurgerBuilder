import React, { useEffect, useState } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Auxiliary from '../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    let [error, setError] = useState(null)
    let [requestIntercept, setRequestIntercept] = useState(null)
    let [responseIntercept, setResponseIntercept] = useState(null)

    //Alternate to conponentDidMount and componentDidUpdate
    useEffect(() => {
      setRequestIntercept(
        axios.interceptors.request.use(req => {
          setError(null)
          return req
        })
      )

      setResponseIntercept(
        axios.interceptors.response.use(
          res => res,
          error => {
            setError({ error: error })
          }
        )
      )
    }, [])

    //Alternate to componentWillUnmount
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestIntercept)
        axios.interceptors.response.eject(responseIntercept)
      }
    }, [])

    const errorConfirmedHandler = () => {
      setError(null)
    }
    return (
      <Auxiliary>
        <Modal show={error} clicked={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxiliary>
    )
  }
}
export default withErrorHandler
