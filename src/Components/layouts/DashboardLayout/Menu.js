import React, { useState } from "react"

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  SwipeableDrawer,
  Tooltip,
} from "@mui/material"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

export default function LayoutMenu() {
  let history = useHistory()
  const { profile } = useSelector((state) => state.Auth)
  const avatarCaracter = profile.UserName.charAt(0).toUpperCase()
  const [isOpen, setIsOpen] = useState(false)
  function handleOpen() {
    setIsOpen(true)
  }
  function handleClose() {
    setIsOpen(false)
  }
  function handleClick() {
    setIsOpen(true)
  }
  return (
    <>
      <div>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small">
            <Avatar>{avatarCaracter}</Avatar>
          </IconButton>
        </Tooltip>
      </div>
      <SwipeableDrawer
        open={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        anchor="right"
      >
        <Box sx={{ width: "240px" }} my={3}>
          <MenuItem onClick={() => history.push("perfil")}>
            <AccountCircleIcon style={{ color: "#3a463d" }} sx={{ mr: 2 }} />
            Perfil
          </MenuItem>
          <MenuItem onClick={() => history.push("/carrito")}>
            <ShoppingCartIcon style={{ color: "#3a463d" }} sx={{ mr: 2 }} />
            Mi carrito
          </MenuItem>
        </Box>
        <Divider />
      </SwipeableDrawer>
    </>
  )
}
