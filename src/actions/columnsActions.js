import {
  SET_TODO_COLUMN,
  SET_COLUMN_TITLE,
  INSERT_NEW_COLUMN_TITLE,
  DELETE_TODO_COLUMN,
  OPEN_LIST_MENU,
} from '../reducers/columnsReducer';

export const setTodoColumn = (todoColumn) => {
  return {
    type: SET_TODO_COLUMN,
    todoColumn,
  };
};
export const setColumnTitle = (newTitle, columnId) => {
  return {
    type: SET_COLUMN_TITLE,
    newTitle,
    columnId,
  };
};
export const insertNewColumnTitle = (columnId) => {
  return {
    type: INSERT_NEW_COLUMN_TITLE,
    columnId,
  };
};
export const deleteToDoColumn = (columnId) => {
  return {
    type: DELETE_TODO_COLUMN,
    columnId,
  };
};

export const openListMenu = (columnId) => {
  return {
    type: OPEN_LIST_MENU,
    columnId,
  };
};
