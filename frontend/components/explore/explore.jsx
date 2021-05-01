import React from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import QuestContainer from '../quests/quest_container';
import Loading from '../loading/loading';
import GuildRecs from '../sidebar/guild_recs';

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
      this.props.fetchAllQuests().then(() => {
        this.setState({ loading: false })
      })
    });
    // switch (this.props.page) {
    //   case 'explore':
    //     this.props.fetchAllTags().then(() => {
    //       this.props.fetchAllUsers().then(() => {
    //         this.props.fetchAllFollows().then(() => {
    //           this.props.fetchAllLikes().then(() => {
    //             this.props.fetchAllQuests().then(() => {
    //               this.setState({ loading: false });
    //             });
    //           });
    //         });
    //       });
    //     });
    //     break;
    //   case 'tag':
    //     this.props.fetchAllTags().then(() => {
    //       this.props.fetchAllQuests().then(() => {
    //         this.setState({ loading: false });
    //       })
    //     });
    //     break;
    //   default:
    //     break;
    // }
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

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowDimensions);
  }

  handleTagFollow(e, tag) {
    e.stopPropagation();
    e.preventDefault();
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

    if (this.state.loading) {
      return <Loading background={'explore-container'} />;
    }
    const { quests, currentUser, tags, tag, page } = this.props;

    // Good place for a 404 page
    // if (!tag && page === 'tag') {
    //   return null;
    // }
    let questList;
    switch (page) {
      case 'explore':
        questList = quests.map((quest, idx) => (
          <QuestContainer key={idx} quest={quest} loc={'explore'} />
        ));
        break;
      case 'tag':
        questList = quests.filter((quest) => {
          return quest.tag_joins.map((tag_join) => tag_join.tag.tag_name)
            .includes(tag.tag_name);
        }).map((quest, idx) => (
          <QuestContainer key={`quest-${quest.id}`} quest={quest} loc={'explore'} />
        ));
        break;
      default:
        break;
    }
    
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

    if (questList.length === 0) {
      let questMessage;
      switch (page) {
        case 'explore':
          questMessage = 'There are no quests to discover! Something might be wrong with the database.'
          break;
        case 'tag':
          questMessage = 'There are no quests with that tag. You could make the first!'
          break;
        default:
          questMessage = 'Something is very very wrong. Chris should fix this.'
      }
      questDisplay = (
        <div className="empty-quests-container">{questMessage}</div>
      )
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
          <Link
            to={`/tag/${newTagContent.id}`}
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
          </Link>
        );
        newTagPictureIndex += 2;
        newTagColorIndex += 1;
      }
    }
    // Right side top, the current tags the user is subscribed to
    const allCurrentTagElements = favoritedTags.map((tag) => {
      let pictureIndex = newTagPictureIndex % newTagPictures.length;
      let randNum = Math.floor(Math.random() * 25);
      let nowDate = new Date();
      let recentNum = tag.quests.filter((quest) => {
        return parseInt(quest.updated_at.slice(0, 4)) === nowDate.getFullYear();
      }).length;
      return (
        <Link
          to={`/tag/${tag.id}`}
          key={`tag-${tag.id}`}
          className="favorited-tag-container"
        >
          <img
            src={newTagPictures[pictureIndex]}
            className="favorited-tag-image"
          />
          <div className="favorited-tag-text-container">
            <div className="favorited-tag-name">#{tag.tag_name}</div>
            <div className="favorited-tag-recent-posts">
              {recentNum} Recent Quest{recentNum !== 1 ? 's'  : ''}
            </div>
          </div>
        </Link>
      );
    });
    let newFavTagIdx = this.state.currentFavTagIdx;

    const displayCurrentTagElements = allCurrentTagElements.slice(
      newFavTagIdx,
      newFavTagIdx + 4
    );

    let pageTitle;
    let topNav;
    switch (page) {
      case 'explore':
        pageTitle = "Explore Adventr"
        topNav = (
          <>
            <div className="explore-tab">For You</div>
            <div className="explore-tab">Trending</div>
            <div className="explore-tab">Guildmaster Picks</div>
            <div className="explore-tab">More</div>
          </>
        );
        break;
      case 'tag':
        pageTitle = `Tag - #${tag.tag_name}`;
        topNav = (
          <>
            <div className="explore-tab">Recent</div>
            <div className="explore-tab">Top</div>
          </>
        );
        break;
      default:
        pageTitle = "Something broke!"
        break;
    }

    return (
      <>
        <Helmet><title>{pageTitle}</title></Helmet>
        <div className="explore-container">
          <div className="explore">
            <div className="explore-left">
              <div className="explore-header">
                {/* Placeholders, no true functionality yet */}
                {topNav}
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
              <GuildRecs />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Explore;
