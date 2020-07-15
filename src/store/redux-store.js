import { combineReducers, createStore } from 'redux';
import columnsReducer from '../reducers/columnsReducer';
import cardsReducer from '../reducers/cardsReducer';
import authReducer from '../reducers/authReducer';
import commentReducer from '../reducers/commentReducer';
import { loadState } from '../utils/loadLocalState';

let reducers = combineReducers({
  columnsData: columnsReducer,
  cardsData: cardsReducer,
  authData: authReducer,
  commentsData: commentReducer,
});

const localState = loadState();

let store = createStore(reducers, localState);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
});

window.store = store;
export default store;
