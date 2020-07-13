import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { openModal } from "../../actions/modal_actions";
import {fetchAllQuests} from "../../actions/quest_actions"

const mapStateToProps = (state) => {
  const userId = state.session.currentUser.id;
  return {
    user: state.entities.users[userId],
    userId,
    quests: Object.values(state.entities.quests)
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllQuests: () => dispatch(fetchAllQuests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
