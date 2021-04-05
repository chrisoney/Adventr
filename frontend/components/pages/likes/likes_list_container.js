import { connect } from 'react-redux';
import LikesList from './likes_list';
// import { openModal } from '../../../actions/modal_actions';
import { fetchAllQuests } from '../../../actions/quest_actions';
// import { fetchAllFollows } from '../../../actions/follow_actions';
import { fetchAllLikes } from '../../../actions/like_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    quests: Object.values(state.entities.quests),
    likes: Object.values(state.entities.likes),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllQuests: () => dispatch(fetchAllQuests()),
  fetchAllLikes: () => dispatch(fetchAllLikes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesList);
