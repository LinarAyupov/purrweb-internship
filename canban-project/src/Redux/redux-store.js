import {combineReducers, createStore} from "redux"
import taskCard from "./card-reducer"
import todoColumn from "./todo-reducer"
import boardSection from "./board-reducer"


let reducers = combineReducers(
    {
		taskData: taskCard,
    todoData: todoColumn,
    boardData:boardSection,

    }
)

let store = createStore(reducers)
window.store = store
export default store;