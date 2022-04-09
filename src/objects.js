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
  {
    name: "Register",
    startIcon: <AppRegistrationIcon/>,
    to: "/register",
    key: 2
  }
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

export const textfieldsLoginObject = [
  {
    name: "userName",
    label: "Nombre de Usuario",
    key: 1,
    type: "text",
  },
  {
    name: "password",
    label: "Contraseña",
    key: 2,
    type: "password",
  },
]

export const registerTextfields = [
  { name: "Name", label: "Nombre", type: "text" },

  { name: "LastName", label: "Apellido", type: "text" },
  {
    name: "UserName",
    label: "Nombre de Usuario",
    type: "text",
  },
  {
    name: "Email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirmar Contraseña",
    type: "password",
  },
]

