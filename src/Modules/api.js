import axios from "axios"
import { request } from "./helpers"

export const login = (params) => request("GET", params)
export const getAllItem = (params) => request("GET", params, 'https://fakestoreapi.com/products')

export const signUp = (data) => {
  const url = "http://localhost:3001/users"
  return axios.post(url, JSON.stringify(data))
}
export const logoutToken = () => localStorage.removeItem("User")
