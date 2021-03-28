import React from "react";
import QuestContainer from '../quests/quest_container'
import NewQuestCreate from '../quests/new_quest_create'

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: 0,
    }
    this.getWindowDimensions = this.getWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllQuests();
    this.props.fetchAllFollows();
    this.props.fetchAllLikes();
    window.addEventListener('resize', this.getWindowDimensions)
    this.getWindowDimensions();
  }

  getWindowDimensions() {
    const { innerWidth } = window;
    this.setState({ windowSize: innerWidth })
  }


  componentDidUpdate(prevProps){
		if (this.props.quests.length !== prevProps.quests.length){
			this.props.fetchAllQuests();
		}
	}

  render() {
    const { quests, currentUser } = this.props;
    let questList = quests.map((quest, idx) => (
      <QuestContainer key={idx} quest={quest} loc={'explore'} />
    ));
    questList = questList.reverse();

    let questDisplay;
    if (this.state.windowSize > 1300) {
      console.log("-----------------column 3----------------------")
      questDisplay = (
        <div className="quest-columns-2-3">
          <div className="quest-column-3">
            {questList.filter((quest, idx) => idx % 3 === 0)}
          </div>
          <div className="quest-column-3">
            {questList.filter((quest, idx) => idx % 3 === 1)}
          </div>
          <div className="quest-column-3">
            {questList.filter((quest, idx) => idx % 3 === 2)}
          </div>
        </div>
      );
    } else if (this.state.windowSize > 1000) {
      console.log("-----------------column 2----------------------")
      questDisplay = (
        <div className="quest-columns-2-3">
          <div className="quest-column-2">
            {questList.filter((quest, idx) => idx % 2 === 0)}
          </div>
          <div className="quest-column-2">
            {questList.filter((quest, idx) => idx % 2 === 1)}
          </div>
        </div>
      );
    } else {
      console.log("-----------------column 1----------------------")
      questDisplay = (
        <div className="quest-columns-1">
          <div className="quest-column-1">{questList}</div>
        </div>
      );
    }
    return (
      <div className="explore-container">
        <div className="explore">
          <div className="explore-left">
            <div className="explore-header"></div>
            <div className="explore-tag-container"></div>
            {questDisplay}
          </div>
          <div className="explore-right">
            <div className="current-follows"></div>
            <div className="suggested-guilds"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
