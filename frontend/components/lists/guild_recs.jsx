import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchAllUsers } from '../../actions/user_actions';
import {
  fetchAllFollows,
  followUser,
  unfollowUser,
} from '../../actions/follow_actions';

class GuildRecs extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFollowed = this.toggleFollowed.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.follows.length != prevProps.follows.length) {
      this.props.fetchAllFollows();
    }
  }
  toggleFollowed(e, followed, userId) {
    e.preventDefault();
    if (followed) {
      this.props.unfollowUser(userId);
    } else {
      this.props.followUser(userId);
    }
  }

  render() {
    const { currentUser, currentLocation, follows, users } = this.props;
    // console.log(follows);
    const followRecs = [];
    const followIds = follows.map((follow) => follow.user_id);

    const followRecCreate = (user) => {
      let notFollowed = !followIds.includes(user.id);
      return (
        <li className="suggested-guild-content-container" key={user.id}>
          <div className="user-attributes">
            <img src={user.avatar} className="guild-rec-avatar" />
            <div className="guild-rec-details">
              <span className="guild-rec-username">{user.username}</span>
              <span className="guild-rec-guildname">
                {user.guildname || user.username}
              </span>
            </div>
          </div>
          <div className="follow-rec-button-container">
            <div
              onClick={(e) => this.toggleFollowed(e, !notFollowed, user.id)}
              className={`${
                notFollowed ? 'un' : ''
              }follow-button follow-rec-button`}
            >
              {notFollowed ? 'Follow' : 'Unfollow'}
            </div>
          </div>
        </li>
      );
    };
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.id !== currentUser.id && !followIds.includes(user.id)) {
        const newFollowRec = followRecCreate(user);
        followRecs.push(newFollowRec);
      }
      if (followRecs.length === 4) break;
    }
    const bottomButton =
      currentLocation === '/explore' ? (
        <div className="suggested-guilds-button">Show More Guilds</div>
      ) : (
        <Link to="/explore" className="suggested-guilds-explore-link">
          <span className="explore-text">Explore all of Adventr</span>
        </Link>
      );
    return (
      <div className="suggested-guilds">
        <h1 className="suggested-guilds-title">Check out these guilds</h1>
        <ul className="suggested-guilds-container">{followRecs}</ul>
        {bottomButton}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    currentLocation: ownProps.location.pathname,
    follows: Object.values(state.entities.follows),
    users: Object.values(state.entities.users),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllFollows: () => dispatch(fetchAllFollows()),
    followUser: (userId) => dispatch(followUser(userId)),
    unfollowUser: (userId) => dispatch(unfollowUser(userId)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GuildRecs)
);
