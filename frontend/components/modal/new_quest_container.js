import { connect } from 'react-redux';
import NewQuestForm from './new_quest_form'
import { createQuest } from '../../actions/quest_actions'
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    type: ownProps.type,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createQuest: (quest) => dispatch(createQuest(quest)),
  closeModal: () => dispatch(closeModal()),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestForm);