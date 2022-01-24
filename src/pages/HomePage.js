import { Button } from "@mui/material"
import React from "react"
import { useHistory } from "react-router-dom"

export default function HomePage() {
  let history = useHistory()
  function handleClick() {
    history.push("/login")
  }
  return (
    <>
      <h1>Home</h1>
      <Button onClick={handleClick}>asda</Button>
    </>
  )
}
