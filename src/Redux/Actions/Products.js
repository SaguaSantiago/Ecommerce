import { ActionTypes } from "../Contants/Action-Types"
import * as api from "./../../Modules/api"

export const ProductsRequest = () => {
  return {
    type: ActionTypes.GET_PRODUCTS_REQUEST,
  }
}

export const ProductsSuccess = (Products) => {
  return {
    type: ActionTypes.GET_PRODUCTS_SUCCESS,
    payload: Products,
  }
}

export const ProductsFailure = () => {
  return {
    type: ActionTypes.GET_PRODUCTS_FAILURE,
  }
}

export const Getall = () => {
  return async (dispatch) => {
    try {
      dispatch(ProductsRequest())
      const data = await api.getAllItem.then((res) => res)
      dispatch(ProductsSuccess(data))
    } catch {
      console.log("algo sucedio")
    }
  }
}
