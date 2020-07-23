export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES"
export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = "REMOVE_LIKE"

import * as LikeApiUtils from '../util/like_api_util';

export const receiveAllLikes = (likes) => ({
	type: RECEIVE_ALL_LIKES,
	likes
});

export const receiveLike = (like) => ({
	type: RECEIVE_LIKE,
	like
});

export const removeLike = (like) => ({
	type: REMOVE_LIKE,
	like
});

export const fetchAllLikes = () => dispatch =>
  LikeApiUtils.fetchAllLikes()
  .then(likes => dispatch(receiveAllLikes(likes)))

export const likeQuest = (questId) => (dispatch) => {
  LikeApiUtils.likeQuest(questId)
  .then((like)=>dispatch(receiveLike(like)))
}
	

export const unlikeQuest = (questId) => (dispatch) => {
	LikeApiUtils.unlikeQuest(questId)
  .then((like)=>dispatch(removeLike(like)));
}