import { connect } from 'react-redux';
import TagPage from './tag_page';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    tag: state.entities.tags[ownProps.match.params.tagId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TagPage);