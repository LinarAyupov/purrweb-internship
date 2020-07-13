export const SET_TODO_COLUMN = "SET-TODO-COLUMN"
export const SET_COLUMN_TITLE = "SET-COLUMN-TITLE"
export const INSERT_NEW_COLUMN_TITLE = "INSERT-NEW-COLUMN-TITLE"
export const DELETE_TODO_COLUMN = "DELETE-TODO-COLUMN"
export const OPEN_LIST_MENU = "OPEN-LIST-MENU"

let initialState = {
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


const actionMap = {

  [SET_TODO_COLUMN]: (state, action) => {
    return {
      ...state,
      todoColumnList: [...state.todoColumnList, action.todoColumn],
    }
  },
  [SET_COLUMN_TITLE]: (state, action) => {
    return {
      ...state,
      ...state.todoColumnList.forEach(col => {
        if (col.id === action.columnId) {
          col.title = action.newTitle
        }
      }),
      todoColumnList: [...state.todoColumnList]
    }
  },
  [INSERT_NEW_COLUMN_TITLE]: (state, action) => {
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
  },
  [DELETE_TODO_COLUMN]: (state, action) => {
    return {
      ...state,
      todoColumnList: [...state.todoColumnList.filter(item => item.id !== action.columnId)]
    }
  },
  [OPEN_LIST_MENU]: (state, action) => {
    return {
      ...state,
      ...state.todoColumnList.forEach(col => {
        if (col.id === action.columnId) {
          col.isMenuActive ? col.isMenuActive = false : col.isMenuActive = true
        }
      }),
      todoColumnList: [...state.todoColumnList]
    }
  },
  
}

export default function boardReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}

