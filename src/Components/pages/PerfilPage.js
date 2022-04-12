import {
  Avatar,
  createTheme,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"
import { makeStyles, ThemeProvider } from "@mui/styles"

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#8f9593",
    minHeight: "70vh",
  },
})
const theme = createTheme({
  palette: {
    background: {
      paper:
        "linear-gradient(90deg, rgba(23,43,19,0.5662640056022409) 31%, rgba(17,17,17,0.29735644257703087) 64%)",
    },
  },
})

export default function PerfilPage() {
  const { profile } = useSelector((state) => state.Auth)
  const classes = useStyles()

  console.log(profile)
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Grid item md={7.2} lg={7.2} xl={7.2} sm={8} xs={12}>
          <Paper className={classes.paper}>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={12} md={6}>
                <Avatar
                  style={{
                    width: "300px",
                    height: "300px",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <AddPhotoAlternateIcon
                    style={{
                      width: "70%",
                      height: "70%",
                    }}
                    color="secondary"
                  />
                </Avatar>
              </Grid>
              <Grid sx={{ paddingRight: "20px" }} item xs={12} sm={12} md={6}>
                <Paper
                  sx={{
                    marginTop: "30px",
                    backgroundColor: "#444",
                    // marginRight: "20px",
                    height: "30px",
                    padding: "5px",
                    borderRadius: "0",
                    borderTopRightRadius: "4px",
                    borderTopLeftRadius: "4px",
                  }}
                >
                  <Typography textAlign="center" color="gray">
                    Nombre de Usuario
                  </Typography>
                </Paper>
                <TextField
                  size="small"
                  fullWidth
                  sx={{
                    backgroundColor: "#444",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    borderTop: "1px solid #8f9593",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
