import React from "react"
import { makeStyles } from "@mui/styles"
import { Grid, Typography } from "@mui/material"

const gradient =
  "linear-gradient(108deg, rgba(136,164,161,0.40379901960784315) 27%, rgba(40,41,40,0.28335084033613445) 78%)"

const imageURL =
  "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

const useStyles = makeStyles({
  imagePresentation: {
    background: `${gradient},url("${imageURL}"), no-repeat`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    width: "60vw",
    height: "85vh",
    color: "white",
    boxShadow: "6px 2px 16px 0px rgba(82,76,76,0.56)",
    WebkitBoxShadow: "6px 2px 16px 0px rgba(82,76,76,0.56)",
    mozBoxShadow: "6px 2px 16px 0px rgba(82,76,76,0.56)",
  },
  isLogin: {
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.08333em",
    fontSize: "1.2rem",
    width: "100%",
    textAlign: "center",
  },
  Search: {
    margin: "0 auto",
  },
})

export default function HomePage() {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} sm={7.5} className={classes.imagePresentation}>
        <div container className={classes.contenedorSpan}>
          <Typography
            variant="outline"
            textAlign="center"
            className={classes.isLogin}
          >
            ¿Estas Registrado?
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={4.5}>
        <Grid container alignItems="center">
          <div className={classes.Search}>
            <Typography mt={10} color="primary.dark" variant="overline">
              Permitenos saber lo que estas buscando
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}
