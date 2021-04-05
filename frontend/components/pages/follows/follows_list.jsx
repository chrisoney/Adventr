import React from 'react';
import GuildRecs from '../../sidebar/guild_recs';
import QuestContainer from '../../quests/quest_container';

class FollowsList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFollowed = this.toggleFollowed.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllQuests();
    this.props.fetchAllFollows();
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
    const { currentUser, quests, follows, users } = this.props;
    const followedUsers = [];
    let randomQuest;
    const followIds = follows.map((follow) => follow.user_id);

    for (let x = 0; x < quests.length; x++) {
      let quest = quests[x];
      if (quest.user_id !== currentUser.id) {
        randomQuest = <QuestContainer quest={quest} loc={'dash-random'} />;
      }
    }

    function latestQuest(user) {
      const updatedDates = user.quests.map((quest) => quest.updated_at);
      console.log(updatedDates);
    }

    function createUserContainer(user) {
      latestQuest(user);
      let notFollowed = !followIds.includes(user.id);
      return (
        <div key={user.id} className="followed-user-container">
          <div className="followed-user-left">
            <img src={user.avatar} className="followed-user-avatar" />
            <div className="followed-user-details">
              <div className="followed-user-username">{user.username}</div>
              <div className="followed-user-guildname">{user.guild_name}</div>
            </div>
          </div>
          <div className="followed-user-right">
            <div className="follow-button-container">
              <div
                onClick={(e) => this.toggleFollowed(e, !notFollowed, user.id)}
                className="follow-button"
              >
                {notFollowed ? 'Follow' : 'Unfollow'}
              </div>
            </div>
          </div>
        </div>
      );
    }

    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (currentUser.followed_users.includes(user.id)) {
        followedUsers.push(createUserContainer(user));
      }
    }
    return (
      <div className="dashboard-container">
        <div className="dashboard-left">
          <div className="dashboard-header">
            <h1 className="dash-title-following">
              {followedUsers.length} Following
            </h1>
          </div>
          <div className="followed-users-list-container">
            {followedUsers}
          </div>
        </div>
        <div className="dashboard-right">
          <GuildRecs />
          <div className="suggested-recommendation">
            <div className="suggested-title">Sanctioned Job</div>
            {randomQuest}
          </div>
        </div>
      </div>
    );
  }
}

export default FollowsList;
