import { ActionTypes } from "../Contants/Action-Types"

export const Login = () => {
  localStorage.setItem("auth", true)
  return {
    type: ActionTypes.AUTH_LOGIN,
    Auth: true,
  }
}

export const SignOff = () => {
  // localStorage.
  return {
    type: ActionTypes.AUTH_SIGN_OFF,
    Auth: false,
  }
}
