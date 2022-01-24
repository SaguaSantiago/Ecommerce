import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#004d40",
      light: "#337066",
      dark: "#00352c",
    },
    secondary: {
      main: "#43a047",
      light: "#68b36b",
      dark: "#2e7031",
    },
  },
})

export const layout = createTheme({
  typography: {
    overline: {
      letterSpacing: "0.18em",
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Verdana, sans-serif",
    },
  },
})

