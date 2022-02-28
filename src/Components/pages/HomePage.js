import React from "react"
import { Grid, Typography } from "@mui/material"
import { Styles } from "./../../Styles"
import Products from "../Products/Index"

const useStyles = Styles.homeStyles

export default function HomePage() {
  const classes = useStyles()

  return (
    <>
    <Grid container>
      <Grid item xs={12} sm={7.5} className={classes.imagePresentation}>
        <div className={classes.contenedorSpan}>
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
    <Products/>
    </>
  )
}
