import React from 'react';
import GuildRecs from '../../sidebar/guild_recs';

class FollowsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="dashboard-container">
      <div className="dashboard-left">
        <div className="dashboard-header">
          <h1 className="dash-title-following">{likes.length} Following</h1>
        </div>
        {questList}
      </div>
      <div className="dashboard-right">
        <GuildRecs />
        <div className="suggested-recommendation">
          <div className="suggested-title">Sanctioned Job</div>
          {randomQuest}
        </div>
      </div>
    </div>;
  }
}

export default FollowsList;
