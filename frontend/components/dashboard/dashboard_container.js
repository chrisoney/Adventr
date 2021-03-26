import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { openModal } from "../../actions/modal_actions";
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchAllQuests } from "../../actions/quest_actions"
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllLikes } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    quests: Object.values(state.entities.quests),
    follows: Object.values(state.entities.follows),
    users: Object.values(state.entities.users),
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllQuests: () => dispatch(fetchAllQuests()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
