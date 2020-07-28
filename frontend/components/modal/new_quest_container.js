import { connect } from 'react-redux';
import NewQuestForm from './new_quest_form'
import { createQuest } from '../../actions/quest_actions'

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.session.currentUser,
    type: ownProps.type,
  }
}

const mapDispatchToProps = (dispatch) => ({
  createQuest: (quest) => dispatch(createQuest(quest)),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestForm);