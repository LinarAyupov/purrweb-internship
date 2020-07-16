import { createSelector } from 'reselect';

export const getAuthor = (state) => {
  return state.authData.authorName;
};
export const getColumnsList = (state) => {
  return state.columnsData.todoColumnList;
};

export const getCardsList = (state) => {
  return state.cardsData.cards;
};

export const getCommentsList = (state) => {
  return state.commentsData.comments;
};

const getColumnId = (state, props) => {
  return props.column.id;
};

export const getColumnCardsList = createSelector([getCardsList, getColumnId], (cards, colId) => {
  return cards.filter((card) => {
    if (card.colId === colId) return card;
  });
});

const getCardId = (state, props) => {
  return props.cardId;
};

export const getCardCommentsList = createSelector(
  [getCommentsList, getCardId],
  (comments, cardId) => {
    return comments.filter((comment) => {
      if (comment.cardId === cardId) return comment;
    });
  }
);
