import axios from "axios"
import { request } from "./helpers"

export const login = (params) => request("GET", params)
export const getAllItem = axios
  .get("https://fakestoreapi.com/products")
  .then((items) => items.data)

export const signUp = (data) => {
  const url = "http://localhost:3001/users"
  return axios.post(url, JSON.stringify(data))
}
export const logoutToken = () => localStorage.removeItem("User")
