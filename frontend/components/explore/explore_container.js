import { connect } from "react-redux";
import Explore from "./explore";
import { openModal } from "../../actions/modal_actions";
import { fetchAllQuests } from "../../actions/quest_actions"
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllLikes } from '../../actions/like_actions';
import { fetchAllTags } from '../../actions/tag_actions';
import { addTagToUser, removeTagFromUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    quests: Object.values(state.entities.quests),
    tags: Object.values(state.entities.tags),
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchAllQuests: () => dispatch(fetchAllQuests()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  fetchAllTags: () => dispatch(fetchAllTags()),
  addTagToUser: (tagJoin) => dispatch(addTagToUser(tagJoin)),
  removeTagFromUser: (tagJoinId) => dispatch(removeTagFromUser(tagJoinId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
