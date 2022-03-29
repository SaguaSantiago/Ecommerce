import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { Reducers } from "./Reducers/CombineReducers"

export const Store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
