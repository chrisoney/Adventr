import React from "react";
import { Link } from 'react-router-dom';
import QuestContainer from '../quests/quest_container';
import NewQuestCreate from '../quests/new_quest_create';
import GuildRecs from '../sidebar/guild_recs';
import Loading from '../loading/loading';


class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.toggleFollowed = this.toggleFollowed.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllQuests().then(() => {
      this.props.fetchAllFollows().then(() => {
        this.props.fetchAllLikes().then(() => {
          this.props.fetchAllReblogs().then(() => {
            this.setState({ loading: false })
          })
        })
      })
    });
    // this.props.fetchAllQuests();
    // this.props.fetchAllFollows();
    // this.props.fetchAllLikes();
    // this.props.fetchAllReblogs();
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

    if (this.state.loading) {
      return <Loading background={'dashboard-container'} />;
    }

    const { quests, reblogs, follows, users, currentUser } = this.props;
    let questList = [];
    let randomQuest;
    const followIds = follows.map((follow) => follow.user_id);

    quests.forEach((quest, idx) => {
      if (quest.user_id === currentUser.id) {
        questList.push(<QuestContainer order={quest.updated_at} key={`quest-${idx}`} quest={quest} loc={'dash'} type="quest"/>);
      } else {
        for (let i = 0; i < follows.length; i++) {
          let follow = follows[i];
          if (
            follow.user_id === quest.user_id &&
            follow.follower_id === currentUser.id
          ) {
            questList.push(
              <QuestContainer order={quest.updated_at} key={`quest-${idx}`} quest={quest} loc={'dash'} type="quest"/>
            );
            break;
          }
        }
      }
    });
    reblogs.forEach((reblog, idx) => {
      if (reblog.user_id === currentUser.id) {
        questList.push(
          <QuestContainer
            order={reblog.updated_at}
            key={`reblog-${idx}`}
            reblog={reblog}
            loc={'dash'}
            type="reblog" />
        );
      } else {
        for (let i = 0; i < follows.length; i++) {
          let follow = follows[i];
          if (
            follow.user_id === reblog.user_id &&
            follow.follower_id === currentUser.id
          ) {
            questList.push(
              <QuestContainer
                order={reblog.updated_at}
                key={`reblog-${idx}`}
                reblog={reblog}
                loc={'dash'}
                type="reblog" />
            );
            break;
          }
        }
      }
    });
    console.log(questList.map(ele => ele.props.order))
    questList = questList.sort((a, b) => {
      if (a.props.order > b.props.order) return -1;
      else return 1;
    })
    console.log(questList.map(ele => ele.props.order))

    for (let x = 0; x < quests.length; x++) {
      let quest = quests[x];
      if (
        !followIds.includes(quest.user_id) &&
        quest.user_id !== currentUser.id
      ) {
        randomQuest = <QuestContainer quest={quest} loc={'dash-random'} type="quest"/>;
      }
    }

    return (
      <div className="dashboard-container">
        <div className="dashboard-left">
          <NewQuestCreate currentUser={currentUser} />
          {questList}
        </div>
        <div className="dashboard-right">
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
