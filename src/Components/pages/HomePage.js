import React from "react"
import { Grid, Typography } from "@mui/material"
import { Styles } from "./../../Styles"
import FlexCards from "../CustomComponents/Cards/FlexCards"
import { Logout } from "../../Redux/Actions/AuthActions"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import ProductsCard from "../Products/ProductsCard"

const useStyles = Styles.homeStyles

export default function HomePage() {
  const classes = useStyles()
  const { isAuthenticated } = useSelector((state) => state.Auth)
  const { products } = useSelector((state) => state.Products)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = () => {
    dispatch(Logout())
    history.push("/")
  }

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
          {isAuthenticated ? (
            <button onClick={() => handleClick()}> SignOff </button>
          ) : null}
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
      <FlexCards>
        {products
          ? products.map(({ image, price, title, id }) => (
              <ProductsCard
                id={id}
                key={id}
                image={image}
                price={price}
                title={title}
              />
            ))
          : null}
      </FlexCards>
    </>
  )
}
