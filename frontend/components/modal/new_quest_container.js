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

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps.quest)
  return {
    questSubmitAction: ownProps.quest ?
      (reblog) => dispatch(createReblog(reblog)):
      (quest) => dispatch(createQuest(quest)),
    fetchAllTags: () => dispatch(fetchAllTags()),
    fetchAllQuests: () => dispatch(fetchAllQuests()),
    createTag: (tag) => dispatch(createTag(tag)),
    addTagAction: ownProps.quest ?
      (reblogs_tag) => dispatch(addTagToReblog(reblogs_tag)) :
      (quests_tag) => dispatch(addTagToQuest(quests_tag)),
    closeModal: () => dispatch(closeModal()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestForm);