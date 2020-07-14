import {
  SET_COMMENT,
  SET_COMMENT_TEXT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_COMMENTS_WITH_CARD_ID,
  DELETE_COMMENTS_WITH_COL_ID
} from "../reducers/commentReducer"


export const setCardComments = (commentItem) => {
  return {
    type: SET_COMMENT,
    commentItem
  }
}

export const setCardCommentText = (colId, cardId, commentId, commentText) => {
  return {
    type: SET_COMMENT_TEXT,
    colId,
    cardId,
    commentId,
    commentText
  }
}
export const editCardComment = (colId, cardId, commentId) => {
  return {
    type: EDIT_COMMENT,
    colId,
    cardId,
    commentId
  }
}
export const deleteComment = (colId, cardId, commentId) => {
  return {
    type: DELETE_COMMENT,
    colId,
    cardId,
    commentId
  }
}
export const deleteAllCommentsInsideCard = (cardId) => {
  return {
    type: DELETE_COMMENTS_WITH_CARD_ID,
    cardId
  }
}
export const deleteAllCommentsInsideCollumn = (colId) => {
  return {
    type: DELETE_COMMENTS_WITH_COL_ID,
    colId
  }
}