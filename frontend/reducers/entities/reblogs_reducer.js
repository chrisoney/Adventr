import { RECEIVE_ALL_REBLOGS, RECEIVE_REBLOG, REMOVE_REBLOG } from '../../actions/reblog_actions';
import { merge } from 'lodash';

const reblogsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_REBLOGS:
      newState = merge({}, prevState, action.reblogs);
      return newState;
    case RECEIVE_REBLOG:
      newState = merge({}, prevState);
      newState[action.reblog.id] = action.reblog;
      return newState;
    case REMOVE_REBLOG:
      newState = merge({}, prevState);
      delete newState[action.reblogId];
      return newState;
    default:
      return prevState;
  }
};

export default reblogsReducer;