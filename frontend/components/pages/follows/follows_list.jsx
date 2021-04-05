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
    const that = this;
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
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    function latestQuest(user) {
      const updatedDates = user.quests
        .map((quest) => quest.updated_at)
        .sort()
        .reverse();
      if (updatedDates.length === 0) return 'This guild has no posts';
      else {
        const latest = updatedDates[0];
        const year = latest.slice(0, 4);
        const monthNum = parseInt(latest.slice(5, 7), 10);
        const month = months[monthNum - 1];
        const day = parseInt(latest.slice(8, 10), 10);
        return `${month} ${day} ${year}`;
      }
    }

    function createUserContainer(user) {
      const latestDate = latestQuest(user);
      let notFollowed = !followIds.includes(user.id);
      return (
        <div key={user.id} className="followed-user-container">
          <div className="followed-user-left">
            <img src={user.avatar} className="followed-user-avatar" />
            <div className="followed-user-details">
              <div className="followed-user-username">{user.username}</div>
              <div className="followed-user-latest">{latestDate}</div>
            </div>
          </div>
          <div className="followed-user-right">
            <div className="follow-button-container">
              <div
                onClick={(e) => that.toggleFollowed(e, !notFollowed, user.id)}
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
          <div className="followed-users-list-container">{followedUsers}</div>
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
