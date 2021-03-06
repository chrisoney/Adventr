import { connect } from 'react-redux';
import FollowsList from './follows_list';
import { fetchAllQuests } from '../../../actions/quest_actions';
import { fetchAllUsers } from '../../../actions/user_actions';
import {
  fetchAllFollows,
  followUser,
  unfollowUser,
} from '../../../actions/follow_actions';
const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    quests: Object.values(state.entities.quests),
    follows: Object.values(state.entities.follows),
    users: Object.values(state.entities.users),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllQuests: () => dispatch(fetchAllQuests()),
    fetchAllFollows: () => dispatch(fetchAllFollows()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    followUser: (userId) => dispatch(followUser(userId)),
    unfollowUser: (userId) => dispatch(unfollowUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowsList);
