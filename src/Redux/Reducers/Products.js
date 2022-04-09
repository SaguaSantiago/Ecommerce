import { ActionTypes } from "../Contants/Action-Types"

const initialState = {
  loading: false,
  products: null,
}

export const ProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      }
    case ActionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
