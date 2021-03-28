import { RECEIVE_ALL_TAGS, RECEIVE_TAG } from '../../actions/tag_actions';
import { merge } from 'lodash';

const tagsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      newState = merge({}, prevState, action.tags);
      return newState;
    case RECEIVE_TAG:
      newState = merge({}, prevState);
      newState[action.tag.id] = action.tag;
      return newState;
    default:
      return prevState;
  }
};

export default tagsReducer;
