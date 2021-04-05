import React from 'react';
import GuildRecs from '../../sidebar/guild_recs';
import QuestContainer from '../../quests/quest_container';

class FollowsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllQuests();
    this.props.fetchAllFollows();
  }

  render() {
    const { currentUser, quests, follows, users } = this.props;
    const followedUsers = [];
    let randomQuest;

    for (let x = 0; x < quests.length; x++) {
      let quest = quests[x];
      if (quest.user_id !== currentUser.id) {
        randomQuest = <QuestContainer quest={quest} loc={'dash-random'} />;
      }
    }

    function createUserContainer(user) {
      return(<div key={user.id}>{user.username}</div>)
    }

    for (let i = 0; i < users.length; i++){
      let user = users[i];
      if (currentUser.followed_users.includes(user.id)) {
        followedUsers.push(createUserContainer(user));
      }
    }
    return (
      <div className="dashboard-container">
        <div className="dashboard-left">
          <div className="dashboard-header">
            <h1 className="dash-title-following">{followedUsers.length} Following</h1>
          </div>
          {followedUsers}
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
