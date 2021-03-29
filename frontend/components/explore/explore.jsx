import React from "react";
import QuestContainer from '../quests/quest_container';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: 0,
    };
    this.getWindowDimensions = this.getWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllQuests();
    this.props.fetchAllFollows();
    this.props.fetchAllLikes();
    this.props.fetchAllTags();
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
    const { quests, currentUser, tags } = this.props;
    let questList = quests.map((quest, idx) => (
      <QuestContainer key={idx} quest={quest} loc={'explore'} />
    ));
    questList = questList.reverse();

    let questDisplay;
    if (this.state.windowSize > 1300) {
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
      questDisplay = (
        <div className="quest-columns-1">
          <div className="quest-column-1">{questList}</div>
        </div>
      );
    }

    // Tags
    // Get the list of tags that the current user hasn't favorited
    const newTags = tags.filter((tag) => !tag.users.includes(currentUser.id));

    // Get the list of tags that the current user has favorited
    const favoritedTags = tags.filter((tag) =>
      tag.users.includes(currentUser.id)
    );

    const newTagPictures = [
      '/assets/river_world.jpg',
      '/assets/circle_sample.jpg',
      '/assets/dark_forest.jpg',
      '/assets/tree_house.jpg',
    ];
    let newTagPictureIndex = 0;
    const newTagElements = [];
    // Creating 8 elements for new tag display
    if (newTags.length > 0) {
      for (let y = 0; y < 8; y++) {
        let newTagContent = newTags[y];
        let pictureIndexOne = newTagPictureIndex % newTagPictures.length;
        let pictureIndexTwo = (newTagPictureIndex + 1) % newTagPictures.length;
        // console.log(pictureIndexOne, pictureIndexTwo);
        newTagElements.push(
          <div className="explore-new-tag-container">
            <div className="new-tag-title">#{newTagContent.tag_name}</div>
            <div className="new-tag-examples">
              <img
                src={newTagPictures[pictureIndexOne]}
                className="new-tag-example-image"
              />
              <img
                src={newTagPictures[pictureIndexTwo]}
                className="new-tag-example-image"
              />
            </div>
            <div className="new-tag-follow-button">Follow</div>
          </div>
        );
        newTagPictureIndex += 2;
      }
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
            <div className="explore-tag-container">{newTagElements}</div>
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
