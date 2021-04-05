import React from "react";
import QuestContainer from '../quests/quest_container';
import GuildRecs from '../lists/guild_recs';

class LikesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllQuests();
    this.props.fetchAllFollows();
    this.props.fetchAllLikes();
  }

  componentDidUpdate(prevProps){
		if (this.props.quests.length !== prevProps.quests.length){
			this.props.fetchAllQuests();
		}
	}

  render() {
    const { quests, likes, currentUser } = this.props;
    let questList = [];
    quests.forEach((quest, idx) => {
      for (let i = 0; i < likes.length; i++){
        let like = likes[i];
        if (like.user_id === currentUser.id && like.quest_id === quest.id){
          questList.push(<QuestContainer key={idx} quest={quest} loc={"dash"} />);
          break;
        }
      }
    })
    questList = questList.reverse();
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
        </div>
      </div>
    );
  }
}

export default LikesList;
