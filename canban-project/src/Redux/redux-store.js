import {combineReducers, createStore} from "redux"
import todoColumn from "./todo-reducer"
import boardSection from "./board-reducer"


let reducers = combineReducers(
    {
    todoData: todoColumn,
    boardData:boardSection,

    }
)

let store = createStore(reducers)
window.store = store
export default store;