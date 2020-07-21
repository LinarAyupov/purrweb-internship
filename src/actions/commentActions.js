import {
  SET_COMMENT,
  SET_COMMENT_TEXT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_COMMENTS_WITH_CARD_ID,
  DELETE_COMMENTS_WITH_COL_ID,
} from '../reducers/commentReducer';

export const setComment = ({ commentItem }) => {
  return {
    type: SET_COMMENT,
    payload: { commentItem },
  };
};

export const setCardCommentText = ({ colId, cardId, commentId, commentText }) => {
  return {
    type: SET_COMMENT_TEXT,
    payload: {
      colId,
      cardId,
      commentId,
      commentText,
    },
  };
};
export const editComment = ({ colId, cardId, commentId }) => {
  return {
    type: EDIT_COMMENT,
    payload: {
      colId,
      cardId,
      commentId,
    },
  };
};
export const deleteComment = ({ colId, cardId, commentId }) => {
  return {
    type: DELETE_COMMENT,
    payload: {
      colId,
      cardId,
      commentId,
    },
  };
};
export const deleteAllCommentsInsideCard = ({ cardId }) => {
  return {
    type: DELETE_COMMENTS_WITH_CARD_ID,
    payload: { cardId },
  };
};
export const deleteAllCommentsInsideColumn = ({ colId }) => {
  return {
    type: DELETE_COMMENTS_WITH_COL_ID,
    payload: { colId },
  };
};
