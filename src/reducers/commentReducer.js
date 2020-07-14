
export const SET_COMMENT = "SET-COMMENT"
export const SET_COMMENT_TEXT = "SET-COMMENT-TEXT"
export const DELETE_COMMENT = "DELETE-COMMENT"
export const EDIT_COMMENT = "EDIT-COMMENT"
export const DELETE_COMMENTS_WITH_CARD_ID = "DELETE-COMMENTS-WITH-CARD-ID"
export const DELETE_COMMENTS_WITH_COL_ID = "DELETE_COMMENTS_WITH_COL_ID"


let initialState = {
  comments: []
}


const actionMap = {
  [SET_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: [...state.comments, action.commentItem]
    }
  },
  [SET_COMMENT_TEXT]: (state, action) => {
    return {
      ...state,
      ...state.comments.forEach(comment => {
        if (comment.comId === action.commentId) {
          comment.text = action.commentText
          comment.isCommentActive = true
        }
      }),
      comments: [...state.comments]
    }
  },
  [EDIT_COMMENT]: (state, action) => {
    return {
      ...state,
      ...state.comments.forEach(comment => {
        if (comment.colId === action.colId && comment.cardId === action.cardId && comment.comId === action.commentId) {
          comment.isCommentActive = false
        }
      }),
      comments: [...state.comments]
    }
  },
  [DELETE_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: [...state.comments.filter(comment => {
        if (comment.comId !== action.commentId) return comment
      })]
    }
  },
  [DELETE_COMMENTS_WITH_CARD_ID]: (state, action) => {
    return {
      ...state,
      comments: [...state.comments.filter(comment => {
        if (comment.cardId !== action.cardId) return comment
      })]
    }
  },
  [DELETE_COMMENTS_WITH_COL_ID]: (state, action) => {
    return {
      ...state,
      comments: [...state.comments.filter(comment => {
        if (comment.colId !== action.colId) return comment
      })]
    }
  }
}



export default function commentReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}