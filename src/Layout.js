import React from "react"

import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  createTheme,
  Toolbar,
  Typography,
} from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { makeStyles } from "@mui/styles"
import { ThemeProvider } from "@emotion/react"

import { useHistory } from "react-router-dom"
import { layout } from "./CustomThemes"

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    borderBottom: "0.5px solid white",
  },
  offset: theme.mixins.toolbar,
}))

export default function Layout() {
  let history = useHistory()
  const classes = useStyles()
  function handleComeback() {
    history.push("/")
  }
  function handleLogin() {
    history.push("/login")
  }
  function handleChange(event, newValue) {
    console.log(newValue)
    if (newValue === 0) {
      history.push("/")
    } else if (newValue === 1) {
      history.push("/")
    } else {
      history.push("/login")
    }
  }
  const theme = layout

  return (
    <>
      <AppBar color="primary" position="absolute">
        <Toolbar>
          <ThemeProvider theme={theme}>
            <div className={classes.title}>
              <Button onClick={handleComeback} color="inherit">
                <Typography variant="overline">Ecommerce</Typography>
              </Button>
            </div>
            <BottomNavigation
              showLabels
              style={{ backgroundColor: "#004d40" }}
              onChange={handleChange}
            >
              <BottomNavigationAction
                style={{ color: "#FFF" }}
                label="Mi Carrito"
                icon={<ShoppingCartIcon />}
              />
              <BottomNavigationAction
                style={{ color: "#FFF " }}
                label="Mi Cuenta"
                icon={<AccountCircleIcon />}
              />
              <BottomNavigationAction
                style={{ color: "#FFF " }}
                label="Login"
                icon={<LoginIcon />}
                onClick={handleLogin}
              />
            </BottomNavigation>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  )
}
