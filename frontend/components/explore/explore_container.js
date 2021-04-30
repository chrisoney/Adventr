import { connect } from "react-redux";
import Explore from "./explore";
import { openModal } from "../../actions/modal_actions";
import { fetchAllQuests } from "../../actions/quest_actions"
import {
  fetchAllFollows,
  followUser,
  unfollowUser,
} from '../../actions/follow_actions';
import { fetchAllLikes } from '../../actions/like_actions';
import { fetchAllTags } from '../../actions/tag_actions';
import {
  fetchAllUsers,
  addTagToUser,
  removeTagFromUser,
} from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    page: 'explore',
    currentUser: state.session.currentUser,
    quests: Object.values(state.entities.quests),
    follows: Object.values(state.entities.follows),
    tags: Object.values(state.entities.tags),
    users: Object.values(state.entities.users),
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllQuests: () => dispatch(fetchAllQuests()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  fetchAllTags: () => dispatch(fetchAllTags()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  addTagToUser: (tagJoin) => dispatch(addTagToUser(tagJoin)),
  removeTagFromUser: (tagJoinId) => dispatch(removeTagFromUser(tagJoinId)),
  followUser: (userId) => dispatch(followUser(userId)),
  unfollowUser: (userId) => dispatch(unfollowUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
