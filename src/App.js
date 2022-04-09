import React, { useEffect } from "react"

import { ThemeProvider, CssBaseline } from "@mui/material"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PublicRoute from "./Routes/PublicRoute"
import PrivateRoute from "./Routes/PrivateRoute"
import { theme } from "./CustomThemes"
import HomePage from "./Components/pages/HomePage"
import RegisterPage from "./Components/pages/RegisterPage"
import PublicLayout from "./Components/layouts/PublicLayout"
import DashboardLayout from "./Components/layouts/DashboardLayout"
import LoginPage from "./Components/pages/LoginPage"
import CarritoPage from "./Components/pages/CarritoPage"
import PerfilPage from "./Components/pages/PerfilPage"
import { login, loginInit } from "./Redux/Actions/AuthActions"
import { useDispatch, useSelector } from "react-redux"
import { Getall } from "./Redux/Actions/Products"

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.Auth)
  console.log(isAuthenticated)

  useEffect(() => {
    const userStorageData = localStorage.getItem("User")
    if (userStorageData) {
      dispatch(loginInit(JSON.parse(userStorageData)))
    } else {
      console.log("no login")
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(Getall())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {isAuthenticated ? <DashboardLayout /> : <PublicLayout />}
        <Switch>
          <PublicRoute
            exact
            auth={isAuthenticated}
            path="/login"
            component={LoginPage}
          />
          <PublicRoute
            exact
            auth={isAuthenticated}
            path="/register"
            component={RegisterPage}
          />
          <PrivateRoute
            exact
            auth={isAuthenticated}
            path="/carrito"
            component={CarritoPage}
          />
          <PrivateRoute
            exact
            auth={isAuthenticated}
            path="/perfil"
            component={PerfilPage}
          />
          <Route exact auth={isAuthenticated} path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
