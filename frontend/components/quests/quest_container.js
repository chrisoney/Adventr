import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Quest from './quest';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { likeQuest, unlikeQuest } from '../../actions/like_actions';
import { followUser, unfollowUser } from '../../actions/follow_actions';
import { deleteQuest } from '../../actions/quest_actions'

const mapStateToProps = (state, ownProps) => {
  let liked = false;
  let followed = false;
  Object.values(state.entities.likes).forEach((like)=>{
    if (like["quest_id"] === ownProps.quest.id) { liked = true};
  })
  Object.values(state.entities.follows).forEach((follow)=>{
    if (follow["user_id"] === ownProps.quest.authorId) {followed = true} ;
  })
  let authorId = ownProps.quest.user_id;
  return {
    currentUser: state.session.currentUser,
    authorId: authorId,
    author: state.entities.users[authorId],
    quest: ownProps.quest,
    liked: liked,
    followed: followed,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  likeQuest: (questId) => dispatch(likeQuest(questId)),
  unlikeQuest: (questId) => dispatch(unlikeQuest(questId)),
  followUser: (userId) => dispatch(followUser(userId)),
  unfollowUser: (userId) => dispatch(unfollowUser(userId)),
  deleteQuest: (questId) => dispatch(deleteQuest(questId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Quest));