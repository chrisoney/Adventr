import { connect } from 'react-redux';
import FollowsList from './follows_list';
import { fetchAllQuests } from '../../../actions/quest_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    quests: Object.values(state.entities.quests),
    follows: Object.values(state.entities.follows),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllQuests: () => dispatch(fetchAllQuests()),
    fetchAllFollows: () => dispatch(fetchAllFollows()),
  };
};

export default connect((mapStateToProps, mapDispatchToProps)(FollowsList));
