import { Button } from "@mui/material"
import React from "react"
import { useDispatch } from "react-redux"
import { SignOff } from "../../Redux/Actions/AuthActions"

export default function PerfilPage() {
  const dispatch = useDispatch()

  return (
    <>
      <h1>perfil</h1>
      <Button onClick={() => dispatch(SignOff)}>logOut</Button>
    </>
  )
}
