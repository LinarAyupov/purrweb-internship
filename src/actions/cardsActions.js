import {
  SET_COLUMN_CARD,
  SET_CARD_TITLE,
  INSERT_CARD_TITLE,
  SHOW_CARD_INFO,
  SET_CARD_DESCR,
  EDIT_CARD_DESCR,
  DELETE_CARD_DESCR,
  DELETE_CARD,
  DELETE_CARD_WITH_COL_ID,
} from '../reducers/cardsReducer';

export const setColumnCard = ({ cardItem }) => {
  return {
    type: SET_COLUMN_CARD,
    payload: { cardItem },
  };
};
export const setCardTitle = ({ cardId, newTitle }) => {
  return {
    type: SET_CARD_TITLE,
    payload: {
      cardId,
      newTitle,
    },
  };
};
export const insertCardTitle = ({ cardId }) => {
  return {
    type: INSERT_CARD_TITLE,
    payload: { cardId },
  };
};
export const showCardInfo = ({ cardId, colId }) => {
  return {
    type: SHOW_CARD_INFO,
    payload: {
      cardId,
      colId,
    },
  };
};
export const setCardDescr = ({ descrText, cardId, colId }) => {
  return {
    type: SET_CARD_DESCR,
    payload: {
      descrText,
      cardId,
      colId,
    },
  };
};

export const editCardDescr = ({ cardId, colId }) => {
  return {
    type: EDIT_CARD_DESCR,
    payload: {
      cardId,
      colId,
    },
  };
};
export const deleteCardDescr = ({ cardId, colId }) => {
  return {
    type: DELETE_CARD_DESCR,
    payload: {
      cardId,
      colId,
    },
  };
};
export const deleteCard = ({ cardId }) => {
  return {
    type: DELETE_CARD,
    payload: { cardId },
  };
};

export const deleteCardsWithColID = ({ colId }) => {
  return {
    type: DELETE_CARD_WITH_COL_ID,
    payload: { colId },
  };
};
