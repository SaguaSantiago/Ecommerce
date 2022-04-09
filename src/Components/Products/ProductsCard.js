import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material"
import React from "react"
// import provicionalImage from "./../../Images/ProvicionalImage.jpg"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
  favoriteAction: {
    flexGrow: 1,
  },
  card: {
    marginTop: "20px",
    minWidth: "280px",
    maxWidth: "280px",
    minHeight: "350px",
    maxHeight: "350px",
  },
})

export default function ProductsCard({ image, price, title, id }) {
  const classes = useStyles()
  const urlLink = `/product/${id}`

  return (
    <>
      <Card className={classes.card}>
        <Link to={urlLink}>
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="product-image"
          />
        </Link>
        <CardContent>
          <Typography variant="body1" noWrap={true}>
            {title}
          </Typography>
          <Typography mt={1}> $ {price} </Typography>
        </CardContent>
        <CardActions>
          <div className={classes.favoriteAction}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </div>
          <IconButton aria-label="añadir a carrito">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton aria-label="Ver detalles">
            <MoreVertIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}
