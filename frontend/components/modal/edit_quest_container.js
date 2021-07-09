import { connect } from 'react-redux';
import NewQuestForm from './new_quest_form'
import { fetchAllQuests, updateQuest, addTagToQuest, removeTagFromQuest } from '../../actions/quest_actions';
import { fetchAllReblogs, updateReblog, addTagToReblog, removeTagFromReblog } from '../../actions/reblog_actions';
import { fetchAllTags, createTag } from '../../actions/tag_actions';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tags: Object.values(state.entities.tags),
    type: ownProps.type,
    quest: ownProps.quest,
    reblog: ownProps.reblog,
    reblogAction: ownProps.reblogAction,
    reblogText: '',
    task: 'edit',
    model: ownProps.model,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  questSubmitAction: ownProps.model === 'Reblog' ?
  (reblog) => dispatch(updateReblog(reblog)) :
    (quest) => dispatch(updateQuest(quest)),
  fetchAllTags: () => dispatch(fetchAllTags()),
  fetchAllQuests: () => dispatch(fetchAllQuests()),
  createTag: (tag) => dispatch(createTag(tag)),
  addTagAction: ownProps.model === 'Reblog' ?
      (reblogs_tag) => dispatch(addTagToReblog(reblogs_tag)) :
      (quests_tag) => dispatch(addTagToQuest(quests_tag)),
  removeTagAction: ownProps.model === 'Reblog' ?
    (tag_join_id) => dispatch(removeTagFromReblog(tag_join_id)) :
    (tag_join_id) => dispatch(removeTagFromQuest(tag_join_id)),
  closeModal: () => dispatch(closeModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestForm);