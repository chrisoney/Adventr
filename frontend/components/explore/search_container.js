import { connect } from 'react-redux';
import Explore from './explore';
import { fetchAllTags } from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    page: 'search',
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTags: () => dispatch(fetchAllTags())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Explore);