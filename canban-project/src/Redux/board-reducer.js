const SET_TODO_COLUMN = "SET-TODO-COLUMN"
const SET_COLUMN_TITLE = "SET-COLUMN-TITLE"
const INSERT_NEW_COLUMN_TITLE = "INSERT-NEW-COLUMN-TITLE"
const  DELATE_TODO_COLUMN = "DELATE-TODO-COLUMN"
const OPEN_LIST_MENU = "OPEN-LIST-MENU"


let initialState = {
	todoColumnList:[
        {
            id:0,
            key:0,
			title:"ToDo",
			isColumnActive: true,
            isEditColumnTitle: false,
            isMenuActive: false
		}
    ]
}

const boardSection = (state = initialState, action) => {
	switch (action.type) {
        case "SET-TODO-COLUMN":
            return {
                ...state,
                todoColumnList:[...state.todoColumnList ,action.todoColumn],
            }
        case "SET-COLUMN-TITLE": 
            return {
                ...state,
                ...state.todoColumnList.forEach(col => {
                    if(col.id === action.columnId) {
                        col.title = action.newTitle
                    }
                }),
                todoColumnList:[...state.todoColumnList]

            }
        case "INSERT-NEW-COLUMN-TITLE":
            return {
                ...state,
                ...state.todoColumnList.forEach(col => {
                    if(col.id === action.columnId) {
                        col.isEditColumnTitle?col.isEditColumnTitle = false : col.isEditColumnTitle = true
                        col.isColumnActive = true
                    }
                }),
                todoColumnList:[...state.todoColumnList]
            }
        case "DELATE-TODO-COLUMN":
            return {
                ...state,
                todoColumnList:[...state.todoColumnList.filter( item => item.id!==action.columnId)]
            }
        case "OPEN-LIST-MENU": 
            return {
                ...state,
                ...state.todoColumnList.forEach(col => {
                    if(col.id === action.columnId) {
                        col.isMenuActive ? col.isMenuActive = false : col.isMenuActive = true
                    }
                }),
                todoColumnList:[...state.todoColumnList]
            }
		default:
			return state;
	}
}

export const setTodoColumn = (todoColumn) => {
    return {
        type: SET_TODO_COLUMN,
        todoColumn
    }
}
export const setColumnTitle = (newTitle, columnId) => {
    return {
        type: SET_COLUMN_TITLE,
        newTitle,
        columnId
    }
}
export const insertNewColumnTitle = (columnId) => {
    return {
        type : INSERT_NEW_COLUMN_TITLE,
        columnId
    }
}
export const delateToDoColumn = (columnId) => {
    return {
        type: DELATE_TODO_COLUMN,
        columnId
    }
}

export const openListMenu = (columnId) => {
    return {
        type: OPEN_LIST_MENU,
        columnId
    }
}

export default boardSection