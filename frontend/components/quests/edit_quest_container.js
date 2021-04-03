import { connect } from 'react-redux';
import { updateQuest } from '../../actions/quest_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import EditPost from './edit_post';
// import { deleteAttachment } from '../../utils/quest_api_utils';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    quest: ownProps.quest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuest: (quest) => dispatch(updateQuest(quest)),
    deleteAttachment: (blobId) => dispatch(deleteAttachment(blobId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditPost)
);
