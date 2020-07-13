import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questsReducer from './quests_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  quests: questsReducer,
});

export default entitiesReducer;