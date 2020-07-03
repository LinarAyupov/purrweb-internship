
const SET_TASK_CARD = 'SET-TASK-CARD'
const CHANGED_INPUT_TEXT = 'CHANGED-INPUT-TEXT'
const EDIT_TASK_TITLE = 'EDIT-TASK-TITLE'

let initialState = {
	inputText:'',
	taskCardsToDo: [],
}


const todoColumn = (state = initialState, action) => {
	switch (action.type) {
		case 'SET-TASK-CARD' :
			return {
				...state,
				taskCardsToDo: [...state.taskCardsToDo, action.taskOptions],
				inputText:''
			}
		case 'CHANGED-INPUT-TEXT':
			return{
				...state,
				inputText: action.inputText
			}
		case 'EDIT-TASK-TITLE':
			return {
				...state,
				...state.taskCardsToDo.forEach( task => {
					if(task.id===action.taskId) {
						task.isEditActive === true ? task.isEditActive = false: task.isEditActive = true
					} 
				}),
				taskCardsToDo:[...state.taskCardsToDo]
			}
		default:
			return state;
	}
}
export const setChangedInputText = (inputText) => {
	return {
		type: CHANGED_INPUT_TEXT,
		inputText
	}
}

export const setTaskCard = (taskOptions) => {
	return {
		type: SET_TASK_CARD,
		taskOptions
	}
}
export const onEditTaskTitle = (taskId) => {
	return {
		type: EDIT_TASK_TITLE,
		taskId
	}
}

export default todoColumn