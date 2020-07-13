import { combineReducers, createStore } from "redux"
import boardReducer from "./boardReducer"
import todoColumnReducer from "./columnReducer"



let reducers = combineReducers(
  {
    boardData: boardReducer,
    todoData: todoColumnReducer
  }
)

let store = createStore(reducers)
window.store = store
export default store;  