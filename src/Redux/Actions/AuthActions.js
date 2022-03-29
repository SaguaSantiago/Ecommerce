import { ActionTypes } from "../Contants/Action-Types"
import * as api from "./../../Modules/api"

const tokenSimulation = "3215456442132"

const setItem = () => localStorage.setItem("token", tokenSimulation)
const removeItem = () => localStorage.removeItem("token")

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

// export const Login = () => {
//   return async (dispatch) => {
//     setItem()
//     dispatch({ type: ActionTypes.AUTH_LOGIN, token: tokenSimulation })
//   }
// }

export const SignOff = () => {
  return (dispatch) => {
    removeItem()
    dispatch({ type: ActionTypes.AUTH_SIGN_OFF, token: null })
  }
}
