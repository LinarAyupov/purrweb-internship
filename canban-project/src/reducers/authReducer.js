export const SET_AUTHOR_NAME = "SET-AUTHOR-NAME"


const initialState = {
  isAuth: false,
  authorName: "",
}

const actionMap = {
  
  [SET_AUTHOR_NAME]: (state, action) => {
    return {
      ...state,
      authorName: action.authorName,
      isAuth: true
    }
  }
  ,
}

export default function authReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}