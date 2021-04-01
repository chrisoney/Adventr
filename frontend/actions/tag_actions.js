import * as TagApiUtils from '../util/tag_api_utils';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
// export const ADD_TAG_TO_USER = 'ADD_TAG_TO_USER';
// export const ADD_TAG_TO_QUEST = 'ADD_TAG_TO_QUEST';
// export const REMOVE_TAG_FROM_USER = 'REMOVE_TAG_FROM_USER';
// export const REMOVE_TAG_FROM_QUEST = 'REMOVE_TAG_FROM_QUEST';

export const receiveAllTags = (tags) => ({
  type: RECEIVE_ALL_TAGS,
  tags,
});

export const receiveTag = (tag) => ({
  type: RECEIVE_TAG,
  tag,
});


export const fetchAllTags = () => (dispatch) =>
  TagApiUtils.fetchAllTags().then((tags) => dispatch(receiveAllTags(tags)));

export const fetchSingleTag = (tagId) => (dispatch) =>
  TagApiUtils.fetchSingleTag(tagId).then((tag) => dispatch(receieveTag(tag)));

export const createTag = (tag) => (dispatch) =>
  TagApiUtils.createTag(tag).then((tag) => dispatch(receiveTag(tag)));
