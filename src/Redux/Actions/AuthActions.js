import axios from "axios"
import { ActionTypes } from "../Contants/Action-Types"
import * as api from "./../../Modules/api"
import Api from "../../Api"

/* Login */
export const loginRequest = (payload) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    payload,
  }
}

export const loginSuccess = (payload) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload,
  }
}

export const loginFailure = () => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
  }
}

const petition = () => {
  return axios.get(Api).then((data) => console.log(data))
}

export const login = (params) => {
  return async (dispatch) => {
    try {
      const data = await petition()
      console.log(data)
    } catch {}
  }
}

/* logout */

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  }
}

export const Logout = () => {
  return (dispatch) => {
    api.logoutToken()
    dispatch(logout)
  }
}

/* Sign Up*/

export const signUpRequest = () => {
  return {
    type: ActionTypes.SIGN_UP_REQUEST,
  }
}

export const signUPSuccess = (payload) => {
  return {
    type: ActionTypes.SIGN_UP_SUCCESS,
    payload,
  }
}

export const signUpFailure = () => {
  return {
    type: ActionTypes.SIGN_UP_FAILURE,
  }
}
