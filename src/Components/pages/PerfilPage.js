import React from "react"
import { useSelector } from "react-redux"

export default function PerfilPage() {
  const { profile } = useSelector((state) => state.Auth)
  console.log(profile)
  return (
    <>
      <h1>perfil</h1>
    </>
  )
}
