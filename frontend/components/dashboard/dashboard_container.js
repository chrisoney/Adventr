import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { openModal } from "../../actions/modal_actions";
import { fetchAllQuests } from "../../actions/quest_actions"
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllLikes } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  return {
    quests: Object.values(state.entities.quests)
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllQuests: () => dispatch(fetchAllQuests()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  fetchAllLikes: () => dispatch(fetchAllLikes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
