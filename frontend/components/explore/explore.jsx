import React from "react";
import QuestContainer from '../quests/quest_container'
import NewQuestCreate from '../quests/new_quest_create'

class Explore extends React.Component {
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
    const { quests, currentUser } = this.props;
    let questList = quests.map((quest, idx) => (
      <QuestContainer key={idx} quest={quest} loc={"dash"}/>
    ))
    questList = questList.reverse();
    return (
      <div className="dashboard-container">
        <div className="explore">
          <div className="dashboard-header">
            {/* <h1 className="dash-title">Explore</h1>
            <p className="dash-welcome">Welcome back to Adventr!</p> */}
          </div>
          <NewQuestCreate currentUser={currentUser} />
          {questList}
        </div>
      </div>
    );
  }
}

export default Explore;
