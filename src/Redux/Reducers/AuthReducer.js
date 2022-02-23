import { ActionTypes } from "../Contants/Action-Types"

const initialState = false

export default function AuthReducer(state = initialState, { type, Auth }) {
  switch (type) {
    case ActionTypes.AUTH_LOGIN:
      return (state = Auth)
    case ActionTypes.AUTH_SIGN_OFF:
      return (state = Auth)
    default:
      return state
  }
  return state
}
