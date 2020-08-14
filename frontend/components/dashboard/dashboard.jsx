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
      for (let i = 0; i < follows.length; i++){
        let follow = follows[i];
        if ((follow.user_id === quest.user_id && follow.follower_id === currentUser.id) || quest.user_id === currentUser.id){
          questList.push(<QuestContainer key={idx} quest={quest} loc={"dash"} />);
          break;
        }
      }
    })
    questList = questList.reverse();
    return (
      <div className="dashboard-container">
        <div className="dashboard">
          <div className="dashboard-header">
            <h1 className="dash-title">Dashboard</h1>
            <p className="dash-welcome">Welcome back to Adventr!</p>
          </div>
          <NewQuestCreate />
          { questList }
        </div>
      </div>
    );
  }
}

export default DashBoard;
