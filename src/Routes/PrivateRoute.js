import React from "react"
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"

export default function PrivateRoute({ auth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}
