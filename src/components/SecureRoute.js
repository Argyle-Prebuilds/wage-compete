import React from 'react'
import { Route } from 'react-router-dom'

const SecureRoute = ({ component: Component, path, exact }) => {
  // const hasToken =
  //   !!localStorage.getItem('clientID') &&
  //   !!localStorage.getItem('clientSecret') &&
  //   !!localStorage.getItem('clientID').length

  // if (!hasToken) {
  //   return <Redirect to="/sign-in" />
  // }

  return (
    <Route
      path={path}
      exact={exact}
      render={props => <Component {...props} />}
    />
  )
}

export default SecureRoute
