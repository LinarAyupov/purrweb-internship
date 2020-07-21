export const SET_COLUMN = 'SET-COLUMN';
export const SET_COLUMN_TITLE = 'SET-COLUMN-TITLE';
export const INSERT_COLUMN_TITLE = 'INSERT-COLUMN-TITLE';
export const DELETE_COLUMN = 'DELETE-COLUMN';
export const TOGGLE_COLUMN_MENU = 'TOGGLE-COLUMN-MENU';

let initialState = {
  columnList: [
    {
      id: 0,
      key: 4340,
      title: 'TODO',
      isColumnActive: true,
      isEditColumnTitle: false,
      isMenuActive: false,
    },
    {
      id: 1,
      key: 13454,
      title: 'In Progress',
      isColumnActive: true,
      isEditColumnTitle: false,
      isMenuActive: false,
    },
    {
      id: 2,
      key: 2654,
      title: 'Testing',
      isColumnActive: true,
      isEditColumnTitle: false,
      isMenuActive: false,
    },
    {
      id: 3,
      key: 2313,
      title: 'Done',
      isColumnActive: true,
      isEditColumnTitle: false,
      isMenuActive: false,
    },
  ],
};

const actionMap = {
  [SET_COLUMN]: (state, action) => {
    return {
      ...state,
      columnList: [...state.columnList, action.payload.columnData],
    };
  },
  [SET_COLUMN_TITLE]: (state, action) => {
    return {
      ...state,
      columnList: state.columnList.map((col) =>
        col.id === action.payload.columnId ? { ...col, title: action.payload.title } : col
      ),
    };
  },
  [INSERT_COLUMN_TITLE]: (state, action) => {
    return {
      ...state,
      columnList: state.columnList.map((col) => {
        if (col.id === action.payload.columnId) {
          return {
            ...col,
            isEditColumnTitle: col.isEditColumnTitle ? false : true,
            isColumnActive: true,
          };
        } else {
          return col;
        }
      }),
    };
  },
  [DELETE_COLUMN]: (state, action) => {
    return {
      ...state,
      columnList: state.columnList.filter((item) => item.id !== action.payload.colId),
    };
  },
  [TOGGLE_COLUMN_MENU]: (state, action) => {
    return {
      ...state,
      columnList: state.columnList.map((col) =>
        col.id === action.payload.columnId
          ? {
              ...col,
              isMenuActive: col.isMenuActive
                ? (col.isMenuActive = false)
                : (col.isMenuActive = true),
            }
          : col
      ),
    };
  },
};

export default function columnsReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
