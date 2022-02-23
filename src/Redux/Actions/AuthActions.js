import { ActionTypes } from "../Contants/Action-Types"

export const Login = () => {
  return {
    type: ActionTypes.AUTH_LOGIN,
    Auth: true,
  }
}

export const SignOff = () => {
  return {
    type: ActionTypes.AUTH_SIGN_OFF,
    Auth: false,
  }
}
