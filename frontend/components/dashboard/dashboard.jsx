import React from "react";
import { Link } from 'react-router-dom';
import QuestContainer from '../quests/quest_container'
import NewQuestCreate from '../quests/new_quest_create'

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFollowed = this.toggleFollowed.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllQuests();
    this.props.fetchAllFollows();
    this.props.fetchAllLikes();
    this.props.fetchAllUsers();
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
    const followRecCreate = (user) => {
      let notFollowed = !followIds.includes(user.id);
      return (
        <li className="follow-rec-container" key={user.id}>
          <div className="user-attributes">
            <img src={user.avatar} className="follow-rec-avatar" />
            <div className="follow-rec-details">
              <span className="follow-rec-username">{user.username}</span>
              <span className="follow-rec-guildname">
                {user.guildname || user.username}
              </span>
            </div>
          </div>
          <div className="follow-rec-button-container">
            <div onClick={e => this.toggleFollowed(e, !notFollowed,user.id)} className={`${notFollowed ? 'un' : ''}follow-button follow-rec-button`}>{notFollowed ? 'Follow' : 'Unfollow'}</div>
          </div>
        </li>
      );
    };
    // let currentList = [];
    // if (users.length > 5) {
    //   for (let i = 0; i < 4; i++) {
    //     let randomIndex = Math.floor(Math.random() * users.length);
    //     while (
    //       users[randomIndex].id === currentUser.id ||
    //       currentList.includes(randomIndex)
    //     ) {
    //       randomIndex = Math.floor(Math.random() * users.length);
    //     }
    //     currentList.push(randomIndex);
    //     const newFollowRec = followRecCreate(users[randomIndex]);
    //     followRecs.push(newFollowRec);
    //   }
    // } else {
    //   users.forEach((user) => {
    //     if (user.id !== currentUser.id) {
    //       const newFollowRec = followRecCreate(user);
    //       followRecs.push(newFollowRec);
    //     }
    //   });
    // }
    
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.id !== currentUser.id && !followIds.includes(user.id)) {
        const newFollowRec = followRecCreate(user);
        followRecs.push(newFollowRec);
      }
      if (followRecs.length === 4) break;
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
            <ul className="follow-recs-list">{followRecs}</ul>
            <Link to="/explore" className="follow-rec-explore-link">
              <span className="explore-text">Explore all of Adventr</span>
            </Link>
          </div>
          <div className="suggested-recommendation">
            
          </div>
          <div className="advertisement"></div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
