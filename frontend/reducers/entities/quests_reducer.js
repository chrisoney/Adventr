import { RECEIVE_ALL_QUESTS, RECEIVE_QUEST, REMOVE_QUEST } from '../../actions/quest_actions';
import { merge } from 'lodash';

const questsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_QUESTS:
      newState = merge({}, prevState, action.quests);
      return newState;
    case RECEIVE_QUEST:
      newState = merge({}, prevState);
      newState[action.quest.id] = action.quest;
      return newState;
    case REMOVE_QUEST:
      newState = merge({}, prevState);
      delete newState[action.questId];
      return newState;
    default:
      return prevState;
  }
};

export default questsReducer;