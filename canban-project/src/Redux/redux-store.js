import {combineReducers, createStore} from "redux"
import taskCard from "./card-reducer"
import doneColumn from "./done-reducer"
import todoColumn from "./todo-reducer"
import testColumn from "./test-reducer"
import progressColumn from "./progress-reducer"

let reducers = combineReducers(
    {
		taskData: taskCard,
		doneData: doneColumn,
		todoData: todoColumn,
		testData: testColumn,
		progress: progressColumn
    }
)

let store = createStore(reducers)
window.store = store
export default store;