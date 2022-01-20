import React from "react"

import { ThemeProvider } from "@mui/material"

import { BrowserRouter as Router, Switch } from "react-router-dom"
import PublicRoute from "./CustomComponents/Routes/PublicRoute"
import PrivateRoute from "./CustomComponents/Routes/PublicRoute"
import { theme } from "./CustomTheme"
import HomePage from "./pages/HomePage"
import Layout from "./Layout"

function App() {
  const auth = false
  return (
    <ThemeProvider theme={theme}>
      <Layout/>
      <Router>
        <Switch>
          <PublicRoute auth={auth} path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
