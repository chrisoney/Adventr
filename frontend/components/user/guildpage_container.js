import { connect } from 'react-redux';
import GuildPage from './guildpage';

const mapStateToProps = (state, ownProps) => {
  const guildname = this.props.match.params.guildname;
  return {
    currentUser: state.session.currentUser,

  };
};

const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(GuildPage);
