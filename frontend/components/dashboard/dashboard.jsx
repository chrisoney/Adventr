import React from "react";
import { Link } from 'react-router-dom';
import QuestContainer from '../quests/quest_container'
import NewQuestCreate from '../quests/new_quest_create'

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllQuests();
    this.props.fetchAllFollows();
    this.props.fetchAllLikes();
    this.props.fetchAllUsers();
  }

  componentDidUpdate(prevProps){
		if (this.props.quests.length !== prevProps.quests.length){
			this.props.fetchAllQuests();
		}
	}

  render() {
    const { quests, follows, users, currentUser } = this.props;
    let questList = [];
    const followRecs = [];

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
    const followRecCreate = (user) => {
      return (
        <li className="follow-rec-container" key={user.id}>
          <div className="user-attributes">
            <img src={user.avatar} className="follow-rec-avatar"/>
            <div className="follow-rec-details">
              <span className="follow-rec-username">{user.username}</span>
              <span className="follow-rec-guildname">
                {user.guildname || user.username}
              </span>
            </div>
          </div>
          <div className="follow-rec-button">Follow</div>
        </li>
      );
    }
    let currentList = [];
    if (users.length > 4) {
      for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * users.length);
        while (currentList.includes(randomIndex)) {
          randomIndex = Math.floor(Math.random() * users.length);
        }
        currentList.push(randomIndex);
        const newFollowRec = followRecCreate(users[randomIndex]);
        followRecs.push(newFollowRec);
      }
    } else {
      users.forEach((user) => {
        const newFollowRec = followRecCreate(user);
        followRecs.push(newFollowRec);
      });
    }

    return (
      <div className="dashboard-container">
        <div className="dashboard-left">
          <NewQuestCreate currentUser={currentUser} />
          {questList}
        </div>
        <div className="dashboard-right">
          <div className="follow-recommendations">
            <h1 className="follow-rec-title">Check out these guilds</h1>
            <ul className="follow-recs-list">
              {followRecs}
            </ul>
            <Link to="/explore">
              <span className="explore-text">Explore all of Adventr</span>
            </Link>
          </div>
          <div className="suggested-recommendation"></div>
          <div className="advertisement"></div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
