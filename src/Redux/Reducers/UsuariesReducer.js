import { ActionTypes } from "../Contants/Action-Types"

const initialState = []

export default function UsuariesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ActionTypes.GET_USUARIES:
      return { ...state, payload }

    case ActionTypes.REMOVE_USUARIES:
      return { ...state, payload }

    default:
      return state
  }
}
