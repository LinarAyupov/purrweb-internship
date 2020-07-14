import { combineReducers, createStore } from "redux"
import boardReducer from "../reducers/boardReducer"
import todoColumnReducer from "../reducers/columnReducer"
import authReducer from "../reducers/authReducer"
import commentReducer from "../reducers/commentReducer"
import { loadState } from "../utils/loadLocalState"


let reducers = combineReducers(
  {
    boardData: boardReducer,
    todoData: todoColumnReducer,
    authData: authReducer,
    commentsData: commentReducer
  }
)
const localState = loadState()
let store = createStore(reducers, localState)

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

window.store = store
export default store;  