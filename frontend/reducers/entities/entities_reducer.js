import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questsReducer from './quests_reducer';
import likesReducer from './likes_reducer';
import followsReducer from './follows_reducer';
import tagsReducer from './tags_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  quests: questsReducer,
  likes: likesReducer,
  follows: followsReducer,
  tags: tagsReducer,
});

export default entitiesReducer;