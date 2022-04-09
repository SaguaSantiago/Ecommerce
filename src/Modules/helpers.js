import axios from "axios"

export const request = (method, data, url) => {
  function urlValidate() {
    if (url) {
      return url
    } else {
      return "http://localhost:3001/users"
    }
  }
  const requestUrl = urlValidate()
  console.log(requestUrl)
  return axios({
    method,
    data,
    requestUrl,
  })
}
