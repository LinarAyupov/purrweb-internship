
const SET_TASK_CARD = 'SET-TASK-CARD'
const CHANGED_INPUT_TEXT = 'CHANGED-INPUT-TEXT'

let initialState = {
	inputText:'',
	taskCardsToDo: [ "some", "test"],}

const todoColumn = (state = initialState, action) => {
	switch (action.type) {
		case 'SET-TASK-CARD' :
			return {
				...state,
				...state.taskCardsToDo.push(state.inputText) 
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

export const setTaskCard = () => {
	return {
		type: SET_TASK_CARD,
	}
}

export default todoColumn