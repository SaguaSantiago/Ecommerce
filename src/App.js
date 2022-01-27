import React from "react"

import { ThemeProvider } from "@mui/material"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PublicRoute from "./Routes/PublicRoute"
import PrivateRoute from "./Routes/PrivateRoute"
import { theme } from "./CustomThemes"
import HomePage from "./Components/pages/HomePage"
import PublicLayout from "./Components/layouts/PublicLayout"
import DashboardLayout from "./Components/layouts/DashboardLayout"
import LoginPage from "./Components/pages/LoginPage"
import CarritoPage from "./Components/pages/CarritoPage"
import PerfilPage from "./Components/pages/PerfilPage"

function App() {
  const auth = false
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {auth ? <DashboardLayout /> : <PublicLayout />}
        <Switch>
          <PublicRoute exact auth={auth} path="/login" component={LoginPage} />
          <PrivateRoute
            exact
            auth={auth}
            path="/carrito"
            component={CarritoPage}
          />
          <PrivateRoute
            exact
            auth={auth}
            path="/perfil"
            component={PerfilPage}
          />
          <Route exact auth={auth} path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
