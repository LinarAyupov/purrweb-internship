
const SET_TASK_CARD = 'SET-TASK-CARD'
const CHANGED_INPUT_TEXT = 'CHANGED-INPUT-TEXT'

let initialState = {
	inputText:'',
	taskCardsToDo: [],
}


const todoColumn = (state = initialState, action) => {
	switch (action.type) {
		case 'SET-TASK-CARD' :
		console.log(action.taskOptions)
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

export default todoColumn