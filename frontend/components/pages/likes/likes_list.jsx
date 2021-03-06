import React from "react";
import QuestContainer from '../../quests/quest_container';
import GuildRecs from '../../sidebar/guild_recs';

class LikesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllQuests();
    this.props.fetchAllLikes();
  }

  componentDidUpdate(prevProps){
    // if (this.props.quests.length !== prevProps.quests.length) {
    //   console.log('test')
    // 	this.props.fetchAllQuests();
    // }
  }

  render() {
    const { quests, likes, currentUser } = this.props;
    let questList = [];
    let randomQuest;
    let likedIds = likes.map((like) => like.likeable_id);

    quests.forEach((quest, idx) => {
      for (let i = 0; i < likes.length; i++) {
        let like = likes[i];
        if (like.user_id === currentUser.id && like.likeable_id === quest.id && like.likeable_type === 'Quest') {
          questList.push(
            <QuestContainer key={idx} quest={quest} loc={'dash'} type="quest"/>
          );
          break;
        }
      }
    });
    questList = questList.reverse();

    for (let x = quests.length - 1; x > 0; x--) {
      let quest = quests[x];
      if (!likedIds.includes(quest.id) && quest.user_id !== currentUser.id) {
        randomQuest = <QuestContainer quest={quest} loc={'dash-random'} type="quest"/>;
        break;
      }
    }
    return (
      <div className="dashboard-container">
        <div className="dashboard-left">
          <div className="dashboard-header">
            <h1 className="dash-title">{likes.length} Likes</h1>
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
      </div>
    );
  }
}

export default LikesList;
