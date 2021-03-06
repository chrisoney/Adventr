import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Quest from './quest';
// import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { likePosting, unlikePosting, fetchAllLikes } from '../../actions/like_actions';
import { followUser, unfollowUser } from '../../actions/follow_actions';
import { deleteQuest, fetchSingleQuest } from '../../actions/quest_actions'
import { deleteReblog, fetchSingleReblog } from '../../actions/reblog_actions'

const mapStateToProps = (state, ownProps) => {
  let liked = false;
  let followed = false;
  const posting = ownProps.quest || ownProps.reblog;
  Object.values(state.entities.likes).forEach((like) => {
    if (
      like.likeable_id === posting.id &&
      like.user_id === state.session.currentUser.id
    ) {
      liked = true;
    }
  });
  Object.values(state.entities.follows).forEach((follow)=>{
    if (follow.user_id === posting.user_id && follow.follower_id === state.session.currentUser.id) {followed = true} ;
  })
  let authorId = posting.author.id;
  return {
    currentUser: state.session.currentUser,
    authorId: authorId,
    // author: state.entities.users[authorId],
    author: posting.author,
    authorAvatar: posting.authorAvatar,
    posting,
    tags_joins: posting.tag_joins,
    liked: liked,
    followed: followed,
    type: ownProps.type,
    noteCount: posting.likes,
    reblogQuest: ownProps.type === 'reblog' ? state.entities.quests[posting.quest_id] : null,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // fetchUser: (userId) => dispatch(fetchUser(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  likePosting: (like) => dispatch(likePosting(like)),
  unlikePosting: (postingId) => dispatch(unlikePosting(postingId)),
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  followUser: (userId) => dispatch(followUser(userId)),
  unfollowUser: (userId) => dispatch(unfollowUser(userId)),
  deletePosting: ownProps.type === 'quest' ?
    (questId) => dispatch(deleteQuest(questId)) :
    (reblogId) => dispatch(deleteReblog(reblogId)),
  fetchPosting: ownProps.type === 'quest' ?
    (questId) => dispatch(fetchSingleQuest(questId)) :
    (reblogId) => dispatch(fetchSingleReblog(reblogId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quest));