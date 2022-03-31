import { ActionTypes } from "../Contants/Action-Types"
import * as api from "./../../Modules/api"


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

export const login = (params) => {
  return async (dispatch) => {
    dispatch(loginRequest(params))
    const data = await api
      .login()
      .then((data) => {
        console.log(data)
        return dispatch(loginSuccess(data))
      })
      .catch(({ message }) => {
        return dispatch(loginFailure())
      })
  }
}

/* logout */

export const logout = ()=> {
  return {
    type: ActionTypes.LOGOUT
  }
}

export const Logout = ()=> {
  return (dispatch)=> {
    api.logoutToken()
    dispatch(logout)
  }
}


/* Sign Up*/

export const signUpRequest = ()=> {
  return {
    type: ActionTypes.SIGN_UP_REQUEST,
  }
}

export const signUPSuccess = (payload) => {
  return{
    type: ActionTypes.SIGN_UP_SUCCESS,
    payload
  }
}

export const signUpFailure = () => {
  return {
    type: ActionTypes.SIGN_UP_FAILURE
  }
} 