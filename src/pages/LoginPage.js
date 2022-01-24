import { Button } from "@mui/material"
import React from "react"
import { useHistory } from "react-router-dom"

export default function LoginPage() {
  let history = useHistory()
  function handleClick() {
    history.push("/")
  }
  return (
    <>
      <h1>Login</h1>
      <Button onClick={handleClick}>asda</Button>
    </>
  )
}
