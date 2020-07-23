import React from "react";
import QuestContainer from '../quests/quest_container'

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
    const { quests } = this.props;
    let questList = quests.map((quest, idx) => (
      <QuestContainer key={idx} quest={quest} loc={"dash"} />
    ))
    return (
      <div className="dashboard-container">
        <div className="dashboard">
          <div className="dashboard-header">
            <h1 className="dash-title">Dashboard</h1>
            <p className="dash-welcome">Welcome back to Adventr!</p>
          </div>
          { questList }
        </div>
      </div>
    );
  }
}

export default DashBoard;
