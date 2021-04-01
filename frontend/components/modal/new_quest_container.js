import { connect } from 'react-redux';
import NewQuestForm from './new_quest_form'
import { createQuest } from '../../actions/quest_actions'
import { fetchAllTags, createTag } from '../../actions/tag_actions';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tags: Object.values(state.entities.tags),
    type: ownProps.type,
  };
}

const mapDispatchToProps = (dispatch) => ({
  createQuest: (quest) => dispatch(createQuest(quest)),
  fetchAllTags: () => dispatch(fetchAllTags()),
  createTag: (tag) => dispatch(createTag(tag)),
  closeModal: () => dispatch(closeModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestForm);