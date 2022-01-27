import React from "react"
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"

function PublicRoute({ auth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}
export default PublicRoute
