import React from "react"
import {
  AppBar,
  createTheme,
  makeStyles,
  Toolbar,
  Typography,
} from "@mui/material"
import { ThemeProvider } from "@emotion/react"

export default function Layout() {
  const typography = createTheme({
    typography: {
      overline: {
        letterSpacing: "0.18em",
        fontSize: "1rem",
        fontWeight: 500,
      },
    },
  })
  return (
    <AppBar color="primary" position="absolute">
      <Toolbar>
        <ThemeProvider theme={typography}>
          <div>
            <Typography variant="overline">Ecommerce</Typography>
          </div>
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  )
}
