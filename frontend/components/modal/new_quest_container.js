import { connect } from 'react-redux';
import NewQuestForm from './new_quest_form'
import { fetchAllQuests, createQuest, addTagToQuest } from '../../actions/quest_actions';
import { createReblog, addTagToReblog } from '../../actions/reblog_actions';
import { fetchAllTags, createTag } from '../../actions/tag_actions';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tags: Object.values(state.entities.tags),
    type: ownProps.type,
    task: 'create',
    quest: ownProps.quest || null,
  };
}

const mapDispatchToProps = (dispatch) => ({
  questSubmitAction: ownProps.quest ?
    (quest) => dispatch(createQuest(quest)) :
    (reblog) => dispatch(createReblog(reblog)),
  fetchAllTags: () => dispatch(fetchAllTags()),
  fetchAllQuests: () => dispatch(fetchAllQuests()),
  createTag: (tag) => dispatch(createTag(tag)),
  addTagToQuest: (quests_tag) => dispatch(addTagToQuest(quests_tag)),
  closeModal: () => dispatch(closeModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestForm);