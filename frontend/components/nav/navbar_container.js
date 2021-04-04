import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import {
  openModal,
  closeModal,
  openModal2,
  closeModal2,
} from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    isModalOpen: state.ui.modal,
    modal2: state.ui.modal2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    openModal2: (modal) => dispatch(openModal2(modal)),
    closeModal2: () => dispatch(closeModal2()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));