import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questsReducer from './quests_reducer';
import likesReducer from './likes_reducer';
import followsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  quests: questsReducer,
  likes: likesReducer,
  follows: followsReducer,
});

export default entitiesReducer;