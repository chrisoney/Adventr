import { connect } from 'react-redux';
import AvatarUpload from './avatar_upload'
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
})
export default connect(mapStateToProps, mapDispatchToProps)(AvatarUpload);