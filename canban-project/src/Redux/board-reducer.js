const SET_AUTHOR_NAME = "SET-AUTHOR-NAME"
const SET_TODO_COLUMN = "SET-TODO-COLUMN"
const SET_COLUMN_TITLE = "SET-COLUMN-TITLE"
const INSERT_NEW_COLUMN_TITLE = "INSERT-NEW-COLUMN-TITLE"
const DELETE_TODO_COLUMN = "DELETE-TODO-COLUMN"
const OPEN_LIST_MENU = "OPEN-LIST-MENU"
const SET_LOCAL_COL_DATA = "SET-LOCAL_COL-DATA"

let initialState = {
    isAuth: false,
    authorName: "",
    todoColumnList: [
        {
            id: 0,
            key: 4340,
            title: "TODO",
            isColumnActive: true,
            isEditColumnTitle: false,
            isMenuActive: false
        },
        {
            id: 1,
            key: 13454,
            title: "In Progress",
            isColumnActive: true,
            isEditColumnTitle: false,
            isMenuActive: false
        },
        {
            id: 2,
            key: 2654,
            title: "Testing",
            isColumnActive: true,
            isEditColumnTitle: false,
            isMenuActive: false
        },
        {
            id: 3,
            key: 2313,
            title: "Done",
            isColumnActive: true,
            isEditColumnTitle: false,
            isMenuActive: false
        }
    ]
}

const boardSection = (state = initialState, action) => {
    switch (action.type) {
        case "SET-AUTHOR-NAME":
            return {
                ...state,
                authorName: action.authorName,
                isAuth: true
            }
        case "SET-TODO-COLUMN":
            return {
                ...state,
                todoColumnList: [...state.todoColumnList, action.todoColumn],
            }
        case "SET-COLUMN-TITLE":
            return {
                ...state,
                ...state.todoColumnList.forEach(col => {
                    if (col.id === action.columnId) {
                        col.title = action.newTitle
                    }
                }),
                todoColumnList: [...state.todoColumnList]

            }
        case "INSERT-NEW-COLUMN-TITLE":
            return {
                ...state,
                ...state.todoColumnList.forEach(col => {
                    if (col.id === action.columnId) {
                        col.isEditColumnTitle ? col.isEditColumnTitle = false : col.isEditColumnTitle = true
                        col.isColumnActive = true
                    }
                }),
                todoColumnList: [...state.todoColumnList]
            }
        case "DELETE-TODO-COLUMN":
            return {
                ...state,
                todoColumnList: [...state.todoColumnList.filter(item => item.id !== action.columnId)]
            }
        case "OPEN-LIST-MENU":
            return {
                ...state,
                ...state.todoColumnList.forEach(col => {
                    if (col.id === action.columnId) {
                        col.isMenuActive ? col.isMenuActive = false : col.isMenuActive = true
                    }
                }),
                todoColumnList: [...state.todoColumnList]
            }
        case "SET-LOCAL_COL-DATA":
            return {
                ...state,
                todoColumnList: action.data.todoColumnList
            }
        default:
            return state;
    }
}
export const setAuthorName = (authorName) => {
    return {
        type: SET_AUTHOR_NAME,
        authorName
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
        type: INSERT_NEW_COLUMN_TITLE,
        columnId
    }
}
export const deleteToDoColumn = (columnId) => {
    return {
        type: DELETE_TODO_COLUMN,
        columnId
    }
}

export const openListMenu = (columnId) => {
    return {
        type: OPEN_LIST_MENU,
        columnId
    }
}
export const setColFromLocalStorage = (data) => {
    return {
        type: SET_LOCAL_COL_DATA,
        data
    }
}

export default boardSection