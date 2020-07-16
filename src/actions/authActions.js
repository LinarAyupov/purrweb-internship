import { SET_AUTHOR_NAME } from '../reducers/authReducer';

export const setAuthorName = (authorName) => {
  return {
    type: SET_AUTHOR_NAME,
    authorName,
  };
};
