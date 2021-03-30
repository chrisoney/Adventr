import * as UserApiUtils from "../util/user_api_utils";

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

export const updateUser = (user) => (dispatch) =>
  UserApiUtils.updateUser(user).then((user) => dispatch(receiveUser(user)));

export const addTagToUser = (tagId) => (dispatch) => {
  UserApiUtils.addTagToUser(tagId);
};