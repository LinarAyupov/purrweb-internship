import {
  SET_AUTHOR_NAME,
  SET_TODO_COLUMN,
  SET_COLUMN_TITLE,
  INSERT_NEW_COLUMN_TITLE,
  DELETE_TODO_COLUMN,
  OPEN_LIST_MENU,
  SET_LOCAL_COL_DATA
} from "../reducers/boardReducer"



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