import { connect } from 'react-redux';
import NewQuestForm from './new_quest_form'
import { fetchAllQuests, createQuest, addTagToQuest } from '../../actions/quest_actions';
import { fetchAllTags, createTag } from '../../actions/tag_actions';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tags: Object.values(state.entities.tags),
    type: ownProps.type,
    task: 'create'
  };
}

const mapDispatchToProps = (dispatch) => ({
  questSubmitAction: (quest) => dispatch(createQuest(quest)),
  fetchAllTags: () => dispatch(fetchAllTags()),
  fetchAllQuests: () => dispatch(fetchAllQuests()),
  createTag: (tag) => dispatch(createTag(tag)),
  addTagToQuest: (quests_tag) => dispatch(addTagToQuest(quests_tag)),
  closeModal: () => dispatch(closeModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestForm);