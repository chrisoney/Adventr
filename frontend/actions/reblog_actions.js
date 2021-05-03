import * as ReblogApiUtils from '../util/reblog_api_utils';

export const RECEIVE_ALL_REBLOGS = 'RECEIVE_ALL_REBLOGS';
export const RECEIVE_REBLOG = 'RECEIVE_REBLOG';
export const REMOVE_REBLOG = 'REMOVE_REBLOG';

export const receiveAllReblogs = (reblogs) => ({
  type: RECEIVE_ALL_REBLOGS,
  reblogs
});

export const receiveReblog = (reblog) => ({
  type: RECEIVE_REBLOG,
  reblog
});

export const removeReblog = (reblogId) => ({
  type: REMOVE_REBLOG,
  reblogId
});

export const fetchAllReblogs = () => (dispatch) =>
  ReblogApiUtils.fetchAllReblogs().then((reblogs) =>
    dispatch(receiveAllReblogs(reblogs))
  );

export const fetchSingleReblog = (reblogId) => (dispatch) =>
  ReblogApiUtils.fetchSingleReblog(reblogId).then((reblog) =>
    dispatch(receiveReblog(reblog))
  );

export const createReblog = (reblog) => (dispatch) =>
  ReblogApiUtils.createReblog(reblog).then((reblog) => dispatch(receiveReblog(reblog)));

export const updateReblog = (reblog) => (dispatch) =>
  ReblogApiUtils.updateReblog(reblog).then((reblog) => dispatch(receiveReblog(reblog)));

export const deleteReblog = (reblogId) => (dispatch) => {
  return ReblogApiUtils.deleteReblog(reblogId).then((reblog) => dispatch(removeReblog(reblog.id)))
}

export const addTagToReblog = (tagJoin) => (dispatch) => {
  return ReblogApiUtils.addTagToReblog(tagJoin);
};
export const removeTagFromReblog = (tagJoinId) => (dispatch) => {
  return ReblogApiUtils.removeTagFromReblog(tagJoinId);
};




