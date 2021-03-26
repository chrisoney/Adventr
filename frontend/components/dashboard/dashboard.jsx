import React from "react";
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
  }

  componentDidUpdate(prevProps){
		if (this.props.quests.length !== prevProps.quests.length){
			this.props.fetchAllQuests();
		}
	}

  render() {
    const { quests, follows, currentUser } = this.props;
    let questList = [];

    quests.forEach((quest, idx) => {
      if (quest.user_id === currentUser.id) {
        questList.push(<QuestContainer key={idx} quest={quest} loc={"dash"} />);
      }
      else {
        for (let i = 0; i < follows.length; i++){
          let follow = follows[i];
          if ((follow.user_id === quest.user_id && follow.follower_id === currentUser.id)){
            questList.push(<QuestContainer key={idx} quest={quest} loc={"dash"} />);
            break;
          }
        }
      }
    })
    questList = questList.reverse();
    return (
      <div className="dashboard-container">
        <div className="dashboard-left">
          <NewQuestCreate currentUser={currentUser} />
          {questList}
        </div>
        <div className="dashboard-right">
          <div className="follow-recommendations">
            
          </div>
          <div className="suggested-recommendation">

          </div>
          <div className="advertisement">
            
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
