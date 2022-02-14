import React from "react"
import { makeStyles } from "@mui/styles"
import homeImage from "../../Images/homeImage.jpg"
import { Typography } from "@mui/material"

const gradient =
  "linear-gradient(108deg, rgba(136,164,161,0.6138830532212884) 27%, rgba(40,41,40,0.3617822128851541) 78%)"

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
  },
})
export default function HomePage() {
  const classes = useStyles()

  return (
    <>
      <div>
        <div className={classes.imagePresentation}>
          <div className={classes.contenedorSpan}>
            <span className={classes.isLogin}>¿Estas Registrado?</span>
          </div>
        </div>
        <div>
          <Typography> Permitenos saber lo que andas buscando </Typography>
        </div>
      </div>
    </>
  )
}
