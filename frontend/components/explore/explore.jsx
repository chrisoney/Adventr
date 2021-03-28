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
            <div className="explore-header">
              {/* Placeholders, no true functionality yet */}
              <div className="explore-tab">For You</div>
              <div className="explore-tab">Trending</div>
              <div className="explore-tab">Guildmaster Picks</div>
              <div className="explore-tab">More</div>
            </div>
            <div className="explore-tag-container">
              {/* Tag 1 */}
              <div className="explore-new-tag-container">
                <div className="new-tag-title">#Warriors</div>
                <div className="new-tag-examples">
                  <img
                    src="/assets/river_world.jpg"
                    className="new-tag-example-image"
                  />
                  <img
                    src="/assets/circle_sample.jpg"
                    className="new-tag-example-image"
                  />
                </div>
                <div className="new-tag-follow-button">Follow</div>
              </div>
               {/* Tag 2 */}
              <div className="explore-new-tag-container">
                <div className="new-tag-title">#Clerics</div>
                <div className="new-tag-examples">
                  <img
                    src="/assets/dark_forest.jpg"
                    className="new-tag-example-image"
                  />
                  <img
                    src="/assets/tree_house.jpg"
                    className="new-tag-example-image"
                  />
                </div>
                <div className="new-tag-follow-button">Follow</div>
              </div>
              {/* Tag 3 */}
              <div className="explore-new-tag-container">
                <div className="new-tag-title">#Rangers</div>
                <div className="new-tag-examples">
                  <img
                    src="/assets/river_world.jpg"
                    className="new-tag-example-image"
                  />
                  <img
                    src="/assets/circle_sample.jpg"
                    className="new-tag-example-image"
                  />
                </div>
                <div className="new-tag-follow-button">Follow</div>
              </div>
              {/* Tag 4 */}
              <div className="explore-new-tag-container">
                <div className="new-tag-title">#Warlocks</div>
                <div className="new-tag-examples">
                  <img
                    src="/assets/dark_forest.jpg"
                    className="new-tag-example-image"
                  />
                  <img
                    src="/assets/tree_house.jpg"
                    className="new-tag-example-image"
                  />
                </div>
                <div className="new-tag-follow-button">Follow</div>
              </div>
              {/* Tag 5 */}
              <div className="explore-new-tag-container">
                <div className="new-tag-title">#Wizards</div>
                <div className="new-tag-examples">
                  <img
                    src="/assets/river_world.jpg"
                    className="new-tag-example-image"
                  />
                  <img
                    src="/assets/circle_sample.jpg"
                    className="new-tag-example-image"
                  />
                </div>
                <div className="new-tag-follow-button">Follow</div>
              </div>
               {/* Tag 6 */}
               <div className="explore-new-tag-container">
                <div className="new-tag-title">#Rogues</div>
                <div className="new-tag-examples">
                  <img
                    src="/assets/dark_forest.jpg"
                    className="new-tag-example-image"
                  />
                  <img
                    src="/assets/tree_house.jpg"
                    className="new-tag-example-image"
                  />
                </div>
                <div className="new-tag-follow-button">Follow</div>
              </div>
            </div>
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
