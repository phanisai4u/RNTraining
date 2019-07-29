

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import UserListReducer from '../Components/UserListScreen/UserListReducer';

const combineReducer = combineReducers({
  userList: UserListReducer,
});

const rootReducer = (state, action) => {
  return combineReducer(state, action);
}
export const store = createStore(rootReducer, applyMiddleware(thunk));
