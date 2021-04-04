import React from "react";
import QuestContainer from '../quests/quest_container';
import Loading from '../loading/loading';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: 0,
      currentFavTagIdx: 0,
      loading: true,
    };
    this.getWindowDimensions = this.getWindowDimensions.bind(this);
    this.handleTagFollow = this.handleTagFollow.bind(this);
    this.handleCurrTagCycle = this.handleCurrTagCycle.bind(this);
    this.toggleFollowed = this.toggleFollowed.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags().then(() => {
      this.props.fetchAllUsers().then(() => {
        this.props.fetchAllFollows().then(() => {
          this.props.fetchAllLikes().then(() => {
            this.props.fetchAllQuests().then(() => {
              this.setState({ loading: false });
            });
          });
        });
      });
    });
    window.addEventListener('resize', this.getWindowDimensions);
    this.getWindowDimensions();
  }

  getWindowDimensions() {
    const { innerWidth } = window;
    this.setState({ windowSize: innerWidth });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.quests.length !== prevProps.quests.length &&
      !this.state.loading
    ) {
      this.props.fetchAllQuests();
    }
  }

  handleTagFollow(e, tag) {
    const followed = e.target.innerHTML === 'Follow';
    const tag_join = {
      taggable_id: this.props.currentUser.id,
      taggable_type: 'User',
      tag_id: tag.id,
    };
    if (followed) {
      const element = e.target;
      element.innerHTML = 'Unfollow';
      this.props.addTagToUser(tag_join).then((newTagJoin) => {
        element.dataset.tagJoinId = newTagJoin.id;
      });
    } else {
      // Set up unfollow
      const element = e.target;
      element.innerHTML = 'Follow';
      const tagJoinId = element.dataset.tagJoinId;
      this.props.removeTagFromUser(tagJoinId);
    }
  }

  handleCurrTagCycle(length) {
    let nextIndex = this.state.currentFavTagIdx + 4;
    if (nextIndex > length - 1) {
      this.setState({ currentFavTagIdx: 0 });
    } else {
      this.setState({ currentFavTagIdx: nextIndex });
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
    const { users, follows } = this.props;
    const followRecs = [];
    const followIds = follows.map((follow) => follow.user_id);

    if (this.state.loading) {
      return <Loading background={'explore-container'} />;
    }
    const { quests, currentUser, tags } = this.props;
    let questList = quests.map((quest, idx) => (
      <QuestContainer key={idx} quest={quest} loc={'explore'} />
    ));
    questList = questList.reverse();

    let questDisplay;
    if (this.state.windowSize > 1310) {
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
    } else if (this.state.windowSize > 990) {
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
    // style={{color: "red"}}
    const newTagColors = [
      ['#D6BF8F', '#000000'],
      ['#D19594', '#000000'],
      ['#233274', '#FFFFFF'],
      ['#0451CE', '#FFFFFF'],
      ['#9C350D', '#FFFFFF'],
      ['#CE846B', '#000000'],
      ['#118520', '#FFFFFF'],
    ];
    let newTagColorIndex = 0;
    const newTagElements = [];
    // Creating 8 elements for new tag display
    if (newTags.length > 0) {
      let end = Math.min(8, newTags.length);
      for (let y = 0; y < end; y++) {
        let newTagContent = newTags[y];
        let pictureIndexOne = newTagPictureIndex % newTagPictures.length;
        let pictureIndexTwo = (newTagPictureIndex + 1) % newTagPictures.length;
        let colorIndex = newTagColorIndex % newTagColors.length;
        const [bgColor, iconColor] = newTagColors[colorIndex];
        newTagElements.push(
          <div
            key={newTagContent.id}
            className="explore-new-tag-container"
            style={{ backgroundColor: bgColor }}
          >
            <div className="new-tag-title" style={{ color: iconColor }}>
              #{newTagContent.tag_name}
            </div>
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
            <button
              onClick={(e) => this.handleTagFollow(e, newTagContent)}
              className="new-tag-follow-button"
              style={{ backgroundColor: iconColor, color: bgColor }}
            >
              Follow
            </button>
          </div>
        );
        newTagPictureIndex += 2;
        newTagColorIndex += 1;
      }
    }
    // Right side top, the current tags the user is subscribed to
    const allCurrentTagElements = favoritedTags.map((tag) => {
      let pictureIndex = newTagPictureIndex % newTagPictures.length;
      let randNum = Math.floor(Math.random() * 25);
      return (
        <div key={tag.id} className="favorited-tag-container">
          <img
            src={newTagPictures[pictureIndex]}
            className="favorited-tag-image"
          />
          <div className="favorited-tag-text-container">
            <div className="favorited-tag-name">#{tag.tag_name}</div>
            <div className="favorited-tag-recent-posts">
              {randNum} Recent Quests
            </div>
          </div>
        </div>
      );
    });
    let newFavTagIdx = this.state.currentFavTagIdx;

    const displayCurrentTagElements = allCurrentTagElements.slice(
      newFavTagIdx,
      newFavTagIdx + 4
    );

    // User recommendations
    const followRecCreate = (user) => {
      let notFollowed = !followIds.includes(user.id);
      return (
        <li className="suggested-guild-content-container" key={user.id}>
          <div className="user-attributes">
            <img src={user.avatar} className="guild-rec-avatar" />
            <div className="guild-rec-details">
              <span className="guild-rec-username">{user.username}</span>
              <span className="guild-rec-guildname">
                {user.guildname || user.username}
              </span>
            </div>
          </div>
          <div className="follow-rec-button-container">
            <div
              onClick={(e) => this.toggleFollowed(e, !notFollowed, user.id)}
              className={`${
                notFollowed ? 'un' : ''
              }follow-button follow-rec-button`}
            >
              {notFollowed ? 'Follow' : 'Unfollow'}
            </div>
          </div>
        </li>
      );
    };

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.id !== currentUser.id && !followIds.includes(user.id)) {
        const newFollowRec = followRecCreate(user);
        followRecs.push(newFollowRec);
      }
      if (followRecs.length === 4) break;
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
            <div className="current-tag-follows">
              <div className="current-tag-follows-header">
                <div className="current-tag-follows-title">Following</div>
              </div>
              <div className="current-tag-container">
                {displayCurrentTagElements}
              </div>
              <div
                onClick={() =>
                  this.handleCurrTagCycle(allCurrentTagElements.length)
                }
                className="current-tag-follows-button"
              >
                Show More Tags
              </div>
            </div>
            <div className="suggested-guilds">
              <div className="suggested-guilds-title">Suggested Guilds</div>
              <div className="suggested-guilds-container">
                {/* <div className="suggested-guild-content-container">
                  <div className="user-attributes">
                    <img src={newTagPictures[0]} className="guild-rec-avatar" />
                    <div className="guild-rec-details">
                      <span className="guild-rec-username">Test Username</span>
                      <span className="guild-rec-guildname">Test Guild</span>
                    </div>
                  </div>
                  <div className="follow-rec-button-container">
                    <div className={`follow-rec-button`}>Follow</div>
                  </div>
                </div> */}
                {followRecs}
              </div>
              <div className="suggested-guilds-button">Show More Guilds</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Explore;
