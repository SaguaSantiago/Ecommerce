import axios from "axios"
import Api from "../Api"


export const request = (method, data) => {
  const url = Api

    return axios({
      method,
      url,
      data,
    })
}
