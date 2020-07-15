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
