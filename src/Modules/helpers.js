import axios from "axios"

export const request = (method, data) => {
  const url = "http://localhost:3001/users"
  // console.log(requestUrl)
  return axios({
    method,
    data,
    url,
  })
}
