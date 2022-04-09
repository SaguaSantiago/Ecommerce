import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material"
import React from "react"
import provicionalImage from "./../../Images/ProvicionalImage.jpg"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  favoriteAction: {
    flexGrow: 1,
  },
})

export default function Products() {
  const classes = useStyles()
  return (
    <>
      <Card sx={{ marginTop: "20px", minWidth: "280px", minHeight: "350px" }}>
        <CardMedia
          component="img"
          height="194"
          image={provicionalImage}
          alt="product-image"
        />
        <CardContent>
          <Typography variant="body1">Prize</Typography>
          <Typography> prize 2 </Typography>
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
