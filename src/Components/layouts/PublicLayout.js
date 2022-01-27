import React from "react"

import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { ThemeProvider } from "@emotion/react"

import { NavLink } from "react-router-dom"
import { layout } from "../../CustomThemes"
import { PublicNavButtons } from "../../objects"

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    borderBottom: "0.5px solid white",
  },
  offset: theme.mixins.toolbar,
  NavLink: {
    textDecoration: "none",
    color: "white",
  },
}))

export default function Layout() {
  const classes = useStyles()
  const theme = layout

  return (
    <>
      <AppBar color="primary" position="absolute">
        <Toolbar>
          <ThemeProvider theme={theme}>
            <div className={classes.title}>
              <Button color="inherit">
                <Typography variant="overline">
                  <NavLink className={classes.NavLink} to="/">
                    Ecommerce
                  </NavLink>
                </Typography>
              </Button>
            </div>
            {PublicNavButtons.map(({ name, startIcon, to, key }) => (
              <Button
                className={classes.Buttons}
                size="small"
                variant="outlined"
                style={{ color: "white", marginLeft: "10px" }}
                startIcon={startIcon}
                key={key}
              >
                <NavLink className={classes.NavLink} to={to}>
                  {name}
                </NavLink>
              </Button>
            ))}
          </ThemeProvider>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  )
}
