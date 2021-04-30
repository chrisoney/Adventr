import { connect } from 'react-redux';
import TagPage from './tag_page';
import { fetchAllTags } from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tag: state.entities.tags[ownProps.match.params.tagId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTags: () => dispatch(fetchAllTags())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TagPage);