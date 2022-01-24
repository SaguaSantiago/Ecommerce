import React from "react"

import { ThemeProvider } from "@mui/material"

import { BrowserRouter as Router, Switch } from "react-router-dom"
import PublicRoute from "./CustomComponents/Routes/PublicRoute"
import PrivateRoute from "./CustomComponents/Routes/PrivateRoute"
import { theme } from "./CustomThemes"
import HomePage from "./pages/HomePage"
import Layout from "./Layout"
import LoginPage from "./pages/LoginPage"

function App() {
  const auth = false
  return (
    <ThemeProvider theme={theme}>
      <Layout />
      <Router>
        <Switch>
          <PublicRoute exact auth={auth} path="/login" component={LoginPage} />
          <PublicRoute exact auth={auth} path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
