import {
  SET_COLUMN,
  SET_COLUMN_TITLE,
  INSERT_COLUMN_TITLE,
  DELETE_COLUMN,
  TOGGLE_COLUMN_MENU,
} from '../reducers/columnsReducer';

export const setColumn = ({ columnData }) => {
  return {
    type: SET_COLUMN,
    payload: {
      columnData,
    },
  };
};
export const setColumnTitle = ({ title, columnId }) => {
  return {
    type: SET_COLUMN_TITLE,
    payload: {
      title,
      columnId,
    },
  };
};
export const insertColumnTitle = ({ columnId }) => {
  return {
    type: INSERT_COLUMN_TITLE,
    payload: { columnId },
  };
};
export const deleteColumn = ({ colId }) => {
  return {
    type: DELETE_COLUMN,
    payload: { colId },
  };
};

export const toggleColumnMenu = ({ columnId }) => {
  return {
    type: TOGGLE_COLUMN_MENU,
    payload: { columnId },
  };
};
