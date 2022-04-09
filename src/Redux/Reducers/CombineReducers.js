import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer"
import { ProductsReducer } from "./Products"

export const Reducers = combineReducers({
  Auth: AuthReducer,
  Products: ProductsReducer,
})
