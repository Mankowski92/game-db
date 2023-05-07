import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import apiKeyReducer from './apiKeyReducer';
import pageReducer from './pageReducer';
import totalPagesReducer from './totalPagesReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  apiKey: apiKeyReducer,
  page: pageReducer,
  totalPages: totalPagesReducer,
});

export default rootReducer;
