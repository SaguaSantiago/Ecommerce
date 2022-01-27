import React from "react"
import LoginIcon from "@mui/icons-material/Login"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AppRegistrationIcon from "@mui/icons-material/AppRegistration"

export const PublicNavButtons = [
  {
    name: "Login",
    startIcon: <LoginIcon />,
    to: "/login",
    key: 1,
  },
]

export const DashboardNavButtons = [
  {
    name: "Mi Perfil",
    startIcon: <AccountCircleIcon />,
    to: "/perfil",
    key: 1,
  },
  {
    name: "Mi Carrito",
    startIcon: <ShoppingCartIcon />,
    to: "/carrito",
    key: 2,
  },
]
