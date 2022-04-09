import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function ProductDetails() {
  const { id } = useParams()
  const productId = parseInt(id)

  const { products } = useSelector((state) => state.Products)

  const productFind = products.find((e) => {
    return e.id === productId
  })
  console.log(productFind)

  return <h1>ProductDetails</h1>
}
