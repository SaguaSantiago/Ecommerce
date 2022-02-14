import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#37474f",
      light: "#455a64",
      dark: "#263238",
    },
    secondary: {
      main: "#263936",
      light: "#e0e0e0",
      dark: "#212121",
    },
    success: {
      main: "#093170",
    },
    background: {
      paper: "#bcc1c1",
      default: "#adaaa8",
    },
    error: {
      main: "#830505",
    },
  },
  typography: {
    overline: {
      fontFamily: "'Trebuchet MS', sans-serif",
      fontSize: "1rem",
    },
  },
})

export const layout = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  typography: {
    overline: {
      letterSpacing: "0.18em",
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: "Verdana, sans-serif",
    },
  },
})
