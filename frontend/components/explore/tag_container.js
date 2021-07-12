import { connect } from 'react-redux';
import Explore from './explore';
import { fetchAllTags, fetchSingleTag } from '../../actions/tag_actions';
import { fetchAllLikes } from '../../actions/like_actions';
import { fetchAllQuests } from '../../actions/quest_actions';
import { openModal } from '../../actions/modal_actions';
import {
  addTagToUser,
  removeTagFromUser,
} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    page: 'tag',
    currentUser: state.session.currentUser,
    tag: state.entities.tags[ownProps.match.params.tagId],
    quests: Object.values(state.entities.quests),
    tags: Object.values(state.entities.tags),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTags: () => dispatch(fetchAllTags()),
    fetchSingleTag: (id) => dispatch(fetchSingleTag(id)),
    fetchAllQuests: () => dispatch(fetchAllQuests()),
    fetchAllLikes: () => dispatch(fetchAllLikes()),
    addTagToUser: (tagJoin) => dispatch(addTagToUser(tagJoin)),
    removeTagFromUser: (tagJoinId) => dispatch(removeTagFromUser(tagJoinId)),
    openModal: (modal) => dispatch(openModal(modal))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Explore);