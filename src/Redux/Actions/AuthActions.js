import { datesValidation, setItemStorage } from "../../Modules/Functions"
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
    dispatch(loginRequest())
    try {
      const { data } = await api.login()
      const validate = datesValidation(data, params)

      if (validate.validate === true) {
        dispatch(loginSuccess(validate.userData))

        const validateDates = JSON.stringify(validate.userData)
        // console.log(validateDates)
        setItemStorage(validateDates)
      } else console.log(validate.error)
    } catch ({ menssage }) {
      dispatch(loginFailure())
    }
  }
}

export const loginInit = (params) => {
  return (dispatch) => dispatch(loginSuccess(params))
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

export const signUp = (data) => {
  return async (dispatch) => {
    dispatch(signUpRequest)
    try {
      await api.signUp(data)
      dispatch(signUPSuccess(data))
    } catch {
      console.log("algo sucedió")
    }
  }
}
