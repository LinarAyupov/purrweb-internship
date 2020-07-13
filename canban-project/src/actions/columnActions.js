import {
  SET_TODO_CARD,
  SET_NEW_CARD_TITLE,
  INSERT_CARD_TITLE,
  SHOW_CARD_INFO,
  SET_CARD_DESCR,
  SET_CARD_COMMENT,
  SET_CARD_COMMENT_TEXT,
  EDIT_CARD_COMMENT,
  DELETE_CARD_COMMENT,
  EDIT_CARD_DESCR,
  DELETE_CARD_DESCR,
  DELETE_CARD,
  SET_LOCAL_CARD_DATA,
  DELETE_CARD_WITH_COL_ID
} from "../reducers/columnReducer"


export const setNewTodoCard = (cardItem) => {
  return {
    type: SET_TODO_CARD,
    cardItem
  }
}
export const setNewCardTitle = (cardId, newTitle) => {
  return {
    type: SET_NEW_CARD_TITLE,
    cardId,
    newTitle
  }
}
export const insertCardTitle = (cardId) => {
  return {
    type: INSERT_CARD_TITLE,
    cardId
  }
}
export const showCardInfo = (cardId, colId) => {
  return {
    type: SHOW_CARD_INFO,
    cardId,
    colId
  }
}
export const setCardDescr = (descrText, cardId, colId) => {
  return {
    type: SET_CARD_DESCR,
    descrText,
    cardId,
    colId
  }
}

export const setCardComments = (colId, cardId, commentItem) => {
  return {
    type: SET_CARD_COMMENT,
    colId,
    cardId,
    commentItem
  }
}

export const setCardCommentText = (colId, cardId, commentId, commentText) => {
  return {
    type: SET_CARD_COMMENT_TEXT,
    colId,
    cardId,
    commentId,
    commentText
  }
}
export const editCardComment = (colId, cardId, commentId) => {
  return {
    type: EDIT_CARD_COMMENT,
    colId,
    cardId,
    commentId
  }
}
export const deleteComment = (colId, cardId, commentId) => {
  return {
    type: DELETE_CARD_COMMENT,
    colId,
    cardId,
    commentId
  }
}
export const editCardDescr = (cardId, colId) => {
  return {
    type: EDIT_CARD_DESCR,
    cardId,
    colId
  }
}
export const deleteCardDescr = (cardId, colId) => {
  return {
    type: DELETE_CARD_DESCR,
    cardId,
    colId
  }
}
export const deleteCard = (cardId) => {
  return {
    type: DELETE_CARD,
    cardId
  }

}
export const setCardFromLocalStorage = (data) => {
  return {
    type: SET_LOCAL_CARD_DATA,
    data
  }
}
export const deleteCardsWithColID = (colId) => {
  return {
    type: DELETE_CARD_WITH_COL_ID,
    colId
  }
}
