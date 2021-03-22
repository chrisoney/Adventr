import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    isModalOpen: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));