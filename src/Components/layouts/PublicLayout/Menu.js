import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material"
import { Box } from "@mui/system"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export default function LayoutMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  let history = useHistory()
  const open = Boolean(anchorEl)
  function handleClick(e) {
    setAnchorEl(e.currentTarget)
  }
  function handleClose() {
    setAnchorEl(null)
  }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 40,
              height: 40,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => history.push("perfil")}>
          <AccountCircleIcon style={{ color: "#3a463d" }} sx={{ mr: 2 }} />
          Perfil
        </MenuItem>
        <MenuItem onClick={() => history.push("/carrito")}>
          <ShoppingCartIcon style={{ color: "#3a463d" }} sx={{ mr: 2 }} />
          Mi carrito
        </MenuItem>
        <Divider />
      </Menu>
    </>
  )
}
