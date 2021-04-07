import { connect } from 'react-redux';
import Settings from './settings';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
