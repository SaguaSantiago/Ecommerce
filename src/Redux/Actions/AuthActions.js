import { ActionTypes } from "../Contants/Action-Types"

const tokenSimulation = "3215456442132"

const setItem = () => localStorage.setItem("token", tokenSimulation)
const removeItem = () => localStorage.removeItem("token")

export const Login = () => {
  return async (dispatch) => {
    setItem()
    dispatch({ type: ActionTypes.AUTH_LOGIN, token: tokenSimulation })
  }
}

export const SignOff = () => {
  return (dispatch) => {
    removeItem()
    dispatch({ type: ActionTypes.AUTH_SIGN_OFF, token: null })
  }
}
