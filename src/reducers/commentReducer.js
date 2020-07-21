export const SET_COMMENT = 'SET-COMMENT';
export const SET_COMMENT_TEXT = 'SET-COMMENT-TEXT';
export const DELETE_COMMENT = 'DELETE-COMMENT';
export const EDIT_COMMENT = 'EDIT-COMMENT';
export const DELETE_COMMENTS_WITH_CARD_ID = 'DELETE-COMMENTS-WITH-CARD-ID';
export const DELETE_COMMENTS_WITH_COL_ID = 'DELETE_COMMENTS_WITH_COL_ID';

let initialState = {
  comments: [],
};

const actionMap = {
  [SET_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: [...state.comments, action.payload.commentItem],
    };
  },
  [SET_COMMENT_TEXT]: (state, action) => {
    return {
      ...state,
      comments: state.comments.map((comment) => {
        if (comment.commentId === action.payload.commentId) {
          return {
            ...comment,
            text: action.payload.commentText,
            isCommentActive: true,
          };
        } else {
          return comment;
        }
      }),
    };
  },
  [EDIT_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: state.comments.map((comment) => {
        if (
          comment.colId === action.payload.colId &&
          comment.cardId === action.payload.cardId &&
          comment.commentId === action.payload.commentId
        ) {
          return {
            ...comment,
            isCommentActive: false,
          };
        } else {
          return comment;
        }
      }),
    };
  },
  [DELETE_COMMENT]: (state, action) => {
    return {
      ...state,
      comments: [
        ...state.comments.filter((comment) => {
          if (comment.commentId !== action.payload.commentId) return comment;
        }),
      ],
    };
  },
  [DELETE_COMMENTS_WITH_CARD_ID]: (state, action) => {
    return {
      ...state,
      comments: [
        ...state.comments.filter((comment) => {
          if (comment.cardId !== action.payload.cardId) return comment;
        }),
      ],
    };
  },
  [DELETE_COMMENTS_WITH_COL_ID]: (state, action) => {
    return {
      ...state,
      comments: [
        ...state.comments.filter((comment) => {
          if (comment.colId !== action.payload.colId) return comment;
        }),
      ],
    };
  },
};

export default function commentReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
