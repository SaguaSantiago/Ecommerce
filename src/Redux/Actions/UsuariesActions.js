import { ActionTypes } from "../Contants/Action-Types"

export const GetUsuaries = (response) => {
  return {
    type: ActionTypes.GET_USUARIES,
    payload: response.data,
  }
}

export const RemoveUsuaries = () => {
  return {
    type: ActionTypes.REMOVE_USUARIES,
    payload: [],
  }
}
