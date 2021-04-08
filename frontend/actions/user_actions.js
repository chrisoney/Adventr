import * as UserApiUtils from "../util/user_api_utils";
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users: users,
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user,
});

export const fetchUser = (userId) => (dispatch) =>
  UserApiUtils.fetchSingleUser(userId).then((user) => {
    return dispatch(receiveUser(user));
  });

export const fetchAllUsers = (filter) => (dispatch) =>
  UserApiUtils.fetchAllUsers(filter).then((users) =>
    dispatch(receiveAllUsers(users))
  );

export const updateUser = (user) => (dispatch) => {
  return UserApiUtils.updateUser(user)
    .then((user) => {
      dispatch(receiveCurrentUser(user))
    })
};

export const addTagToUser = (tagJoin) => (dispatch) => {
  return UserApiUtils.addTagToUser(tagJoin).then((tagJoin) => {
    return tagJoin;
  });
};
export const removeTagFromUser = (tagJoinId) => (dispatch) => {
  UserApiUtils.removeTagFromUser(tagJoinId);
};