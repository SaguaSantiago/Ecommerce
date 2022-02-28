import { makeStyles } from "@mui/styles"

const gradient =
  "linear-gradient(108deg, rgba(136,164,161,0.40379901960784315) 27%, rgba(40,41,40,0.28335084033613445) 78%)"

const imageURL =
  "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

const loginStyles = makeStyles({
  paper: {
    boxSizing: "border-box",
    maxWidth: "50%",
    height: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "40px",
  },
  textfield: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
  },
  button: {
    // width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  Typography: {
    marginBottom: "40px",
  },
})
const homeStyles = makeStyles({
  imagePresentation: {
    background: `${gradient},url("${imageURL}"), no-repeat`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    width: "60vw",
    height: "85vh",
    color: "white",
    boxShadow: "6px 7px 13px 0px rgba(0,0,0,0.65)",
    webkitBoxShadow: "6px 7px 13px 0px rgba(0,0,0,0.65)",
    mozBoxShadow: "6px 7px 13px 0px rgba(0,0,0,0.65)",
  },
  isLogin: {
    fontFamily: "'Courier New', monospace",
    letterSpacing: "0.08333em",
    fontSize: "1.2rem",
    width: "100%",
    textAlign: "center",
  },
  Search: {
    margin: "10px auto",
  },
  contenedorSpan: {
    margin: "10px auto",
  },
})

export const Styles = {
  loginStyles,
  homeStyles,
}
