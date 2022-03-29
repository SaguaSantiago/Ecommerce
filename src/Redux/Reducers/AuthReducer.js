import { ActionTypes } from "../Contants/Action-Types"

const initialState = {
  isAuthenticated: false,
  token: null,
  profile: null,
  loading: false,
}
const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    // Login
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.LOGIN_SUCCESS:
      const { user, token } = payload
      return {
        ...state,
        profile: user,
        token,
        isAuthenticated: true,
        loading: false,
      }
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        profile: null,
        loading: false,
      }
    // Logout
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        profile: null,
        loading: false,
      }
    // Sign up
    case ActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        profile: payload.user,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      }
    case ActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        profile: null,
        loading: false,
      }
    default:
      return state
  }
}

export default auth
