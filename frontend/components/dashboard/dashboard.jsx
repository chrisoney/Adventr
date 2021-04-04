import React from "react";
import { Link } from 'react-router-dom';
import QuestContainer from '../quests/quest_container';
import NewQuestCreate from '../quests/new_quest_create';
import GuildRecs from '../lists/guild_recs';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFollowed = this.toggleFollowed.bind(this);
    // this.testing = this.testing.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllQuests();
    this.props.fetchAllFollows();
    this.props.fetchAllLikes();
    // this.props.fetchAllUsers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.quests.length !== prevProps.quests.length) {
      this.props.fetchAllQuests();
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
    const { quests, follows, users, currentUser } = this.props;
    let questList = [];
    let randomQuest;
    const followRecs = [];
    const followIds = follows.map((follow) => follow.user_id);

    quests.forEach((quest, idx) => {
      if (quest.user_id === currentUser.id) {
        questList.push(<QuestContainer key={idx} quest={quest} loc={'dash'} />);
      } else {
        for (let i = 0; i < follows.length; i++) {
          let follow = follows[i];
          if (
            follow.user_id === quest.user_id &&
            follow.follower_id === currentUser.id
          ) {
            questList.push(
              <QuestContainer key={idx} quest={quest} loc={'dash'} />
            );
            break;
          }
        }
      }
    });
    questList = questList.reverse();

    // Follow recommendations

    // Create a follow rec
    // const followRecCreate = (user) => {
    //   let notFollowed = !followIds.includes(user.id);
    //   return (
    //     <li className="suggested-guild-content-container" key={user.id}>
    //       <div className="user-attributes">
    //         <img src={user.avatar} className="guild-rec-avatar" />
    //         <div className="guild-rec-details">
    //           <span className="guild-rec-username">{user.username}</span>
    //           <span className="guild-rec-guildname">
    //             {user.guildname || user.username}
    //           </span>
    //         </div>
    //       </div>
    //       <div className="follow-rec-button-container">
    //         <div
    //           onClick={(e) => this.toggleFollowed(e, !notFollowed, user.id)}
    //           className={`${
    //             notFollowed ? 'un' : ''
    //           }follow-button follow-rec-button`}
    //         >
    //           {notFollowed ? 'Follow' : 'Unfollow'}
    //         </div>
    //       </div>
    //     </li>
    //   );
    // };

    // for (let i = 0; i < users.length; i++) {
    //   const user = users[i];
    //   if (user.id !== currentUser.id && !followIds.includes(user.id)) {
    //     const newFollowRec = followRecCreate(user);
    //     followRecs.push(newFollowRec);
    //   }
    //   if (followRecs.length === 4) break;
    // }

    // Pick a random random quest

    for (let x = 0; x < quests.length; x++) {
      let quest = quests[x];
      if (
        !followIds.includes(quest.user_id) &&
        quest.user_id !== currentUser.id
      ) {
        randomQuest = <QuestContainer quest={quest} loc={'dash-random'} />;
      }
    }

    return (
      <div className="dashboard-container">
        <div className="dashboard-left">
          <NewQuestCreate currentUser={currentUser} />
          {questList}
        </div>
        <div className="dashboard-right">
          {/* <div className="suggested-guilds">
            <h1 className="suggested-guilds-title">Check out these guilds</h1>
            <ul className="suggested-guilds-container">{followRecs}</ul>
            <Link to="/explore" className="suggested-guilds-explore-link">
              <span className="explore-text">Explore all of Adventr</span>
            </Link>
          </div> */}
          <GuildRecs />
          <div className="suggested-recommendation">
            <div className="suggested-title">Sanctioned Job</div>
            {randomQuest}
          </div>
          <div className="advertisement">
            <span className="dash-ad-title">Sponsored</span>
            <img src="/assets/evil_ducks.png" />
            <div className="ad-bottom-text">
              <span>About Adventr ads</span>
              <span>Do not sell my personal information</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
