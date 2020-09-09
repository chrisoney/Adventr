import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../../actions/session_actions';

const _nullSession = {
  currentUser: null
};

const sessionReducer = (prevState = _nullSession, action) => {
  debugger
  Object.freeze(prevState);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = {
        currentUser: action.currentUser
      };
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return prevState;
  }
};

export default sessionReducer;