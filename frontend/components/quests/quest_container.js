import { connect } from 'react-redux';
import Quest from './quest';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    authorId: ownProps.quest.user_id,
    quest: ownProps.quest,
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quest);