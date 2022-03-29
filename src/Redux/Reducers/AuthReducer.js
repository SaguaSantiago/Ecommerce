import { ActionTypes } from "../Contants/Action-Types"

const initialState = null

export default function AuthReducer(state = initialState, { type, token }) {
  switch (type) {
    case ActionTypes.AUTH_LOGIN:
      return (state = token)
    case ActionTypes.AUTH_SIGN_OFF:
      return (state = token)
    default:
      return state
  }
}
