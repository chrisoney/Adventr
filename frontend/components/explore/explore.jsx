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
      pageTab: this.props.location.pathname === '/explore' ? 'For You' : 'Recent',
    };
    this.getWindowDimensions = this.getWindowDimensions.bind(this);
    this.handleTabs = this.handleTabs.bind(this);
    this.handleTagFollow = this.handleTagFollow.bind(this);
    this.handleCurrTagCycle = this.handleCurrTagCycle.bind(this);
    this.toggleFollowed = this.toggleFollowed.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllTags().then(() => {
      this.props.fetchAllLikes().then(() => {
        this.props.fetchAllQuests().then(() => {
          this.props.fetchAllReblogs().then(() => {
            this.setState({ loading: false })
          })
        })
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

  handleTabs(newTab) {
    this.setState({ pageTab: newTab })
  }

  handleTagFollow(e, tag) {
    e.stopPropagation();
    e.preventDefault();
    let notFollowed;
    switch (this.props.page) {
      case 'explore':
        notFollowed = e.target.innerHTML === 'Follow';
        break;
      case 'tag':
        notFollowed = !tag.users.includes(this.props.currentUser.id);
        break;
      default:
        break;
    }
    const tag_join = {
      taggable_id: this.props.currentUser.id,
      taggable_type: 'User',
      tag_id: tag.id,
    };
    const element = e.target;
    if (notFollowed) {
      element.innerHTML = 'Unfollow';
      this.props.addTagToUser(tag_join)
        .then((newTagJoin) => {
        element.dataset.tagJoinId = newTagJoin.id;
      });
    } else {
      // Set up unfollow
      element.innerHTML = 'Follow';
      const tagJoinId = element.dataset.tagJoinId;
      this.props.removeTagFromUser(tagJoinId);
    }
    if (this.props.page === 'tag') this.props.fetchSingleTag(tag.id)
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
    const { quests, reblogs, currentUser, tags, tag, page } = this.props;
    const { pageTab } = this.state;
    // Good place for a 404 page
    // if (!tag && page === 'tag') {
    //   return null;
    // }

    function createQuestEle(quest) {
      return <QuestContainer
        key={`quest-${quest.id}`}
        updated_at={quest.updated_at}
        created_at={quest.created_at}
        noteCount={quest.likes}
        quest={quest}
        loc='explore'
        type="quest"
      />
    }
    function createReblogEle(reblog) {
      return <QuestContainer
        key={`reblog-${reblog.id}`}
        updated_at={reblog.updated_at}
        created_at={reblog.created_at}
        noteCount={reblog.likes}
        reblog={reblog}
        loc='explore'
        type="reblog" />
    }

    let questList, reblogList, totalList;
    switch (page) {
      case 'explore':
        questList = quests.map((quest) => createQuestEle(quest));
        reblogList = reblogs.map((reblog) => createReblogEle(reblog));
        break;
      case 'tag':
        questList = quests.filter((quest) => {
          return quest.tag_joins.map((tag_join) => tag_join.tag.tag_name)
            .includes(tag.tag_name);
        }).map((quest, idx) => createQuestEle(quest));
        reblogList = reblogs.filter((reblog) => {
          return reblog.tag_joins.map((tag_join) => tag_join.tag.tag_name)
            .includes(tag.tag_name);
        }).map((reblog, idx) => createReblogEle(reblog));
        break;
      default:
        break;
    }
    
    totalList = questList.concat(reblogList).reverse();
    if (pageTab === 'Top' || pageTab === 'Trending') {
      totalList = totalList.sort((a, b) => {
        if (a.props.noteCount > b.props.noteCount) return -1;
        else return 1;
      })
    } else if (pageTab === 'Recent' || pageTab === 'For You') {
      totalList = totalList.sort((a, b) => {
        console.log(a.props.pageCount)
        if (a.props.created_at > b.props.created_at) return -1;
        else return 1;
      })
    }

    let questDisplay;
    if (this.state.windowSize > 1310) {
      questDisplay = (
        <div className="quest-columns-2-3">
          <div className="quest-column-3">
            {totalList.filter((quest, idx) => idx % 3 === 0)}
          </div>
          <div className="quest-column-3">
            {totalList.filter((quest, idx) => idx % 3 === 1)}
          </div>
          <div className="quest-column-3">
            {totalList.filter((quest, idx) => idx % 3 === 2)}
          </div>
        </div>
      );
    } else if (this.state.windowSize > 990) {
      questDisplay = (
        <div className="quest-columns-2-3">
          <div className="quest-column-2">
            {totalList.filter((quest, idx) => idx % 2 === 0)}
          </div>
          <div className="quest-column-2">
            {totalList.filter((quest, idx) => idx % 2 === 1)}
          </div>
        </div>
      );
    } else {
      questDisplay = (
        <div className="quest-columns-1">
          <div className="quest-column-1">{totalList}</div>
        </div>
      );
    }

    if (totalList.length === 0) {
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
    // Get the list of tags that the current user hasn't favorited
    const newTagElements = [];
    if (page === 'explore') {
      const newTags = tags.filter((tag) => !tag.users.includes(currentUser.id));
      // Creating 8 elements for new tag display
      if (newTags.length > 0) {
        // let end = Math.min(12, newTags.length); // Set a limit on the tags
        let end = newTags.length;
        for (let y = 0; y < end; y++) {
          let newTagContent = newTags[y];
          const pictures = []
          if (newTagContent.quest_data.quest_urls) {
            pictures = newTagContent.quest_data.quest_urls.slice(0, 2);
          }
          while (pictures.length < 2) {
            pictures.push(newTagPictures[newTagPictureIndex % newTagPictures.length])
            newTagPictureIndex += 1;
          }
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
                  src={pictures[0]}
                  className="new-tag-example-image"
                />
                <img
                  src={pictures[1]}
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
          newTagColorIndex += 1;
        }
      }
    }
    // Right side top, the current tags the user is subscribed to
    const allCurrentTagElements = favoritedTags.map((tag) => {
      // let randNum = Math.floor(Math.random() * 25);
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
            src={tag.quest_data.quest_urls && tag.quest_data.quest_urls.length > 0 ?
              tag.quest_data.quest_urls[0] :
              newTagPictures[0]
            }
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

    // Getting the related tags
    const relatedTagsArr = []

    if (page === 'tag') {
      const relatedTagsObj = {};
      const tempTotalList = quests.concat(reblogs).filter((quest) => {
        return quest.tag_joins.map((tag_join) => tag_join.tag.tag_name)
          .includes(tag.tag_name);
      })
      tempTotalList.forEach(quest => {
        let questTags = quest.tag_joins.map((ele) => ele.tag);
        if (questTags.map(ele => ele.tag_name).includes(tag.tag_name)
          ) {
          questTags = questTags.filter(ele => ele.tag_name !== tag.tag_name)
        }
        questTags.forEach((tag) => {
          if (!relatedTagsObj[tag.id]) relatedTagsObj[tag.id] = {count: 0, name: tag.tag_name, id: tag.id};
          relatedTagsObj[tag.id].count++;
        })
      })
      const tagArr = [];
      Object.keys(relatedTagsObj)
        .forEach((ele) => tagArr.push(relatedTagsObj[ele]))
      const sortedArr = tagArr.sort((a, b) => {
        if (a.count < b.count) return 1;
        else return -1;
      }).slice(0, 7);

      relatedTagsArr.push(...sortedArr.map((tag => {
        return (
          <Link
            to={`/tag/${tag.id}`}
            key={`related-tag-${tag.id}`}
            className="related-tag-link">#{tag.name}
          </Link>
        )
      })))
    }


    // Logic for cycling through the tags in the sidebar
    let pageTitle, topNav, leftMiddle, rightTop, rightBottom, leftTop;
    let tagCycle = (
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
    )
    
    const tagDetailGenerator = (pos) => {
      let userPageId = null;
      let imageSource = '/assets/river_world.jpg';
      if (tag.quest_data.user) {
        imageSource = tag.quest_data.quest_urls[0];
        userPageId = tag.quest_data.user.id;
      }

      const userInfoSection = tag.quest_data.user ? (
        <div id={userPageId} className={`tag-details-${pos}-user-info`}>
          <span id={userPageId} className="user-info-posted-by">
            Posted by
            </span>
          <img
            id={userPageId}
            className="user-avatar"
            src={tag.quest_data.user_avatar}
          />
        </div>
      ) : null;

      const tagInfoSection = (
        <>
          <span className="tag-name">#{tag.tag_name}</span>
          <span className="tag-popularity">
            {tag.users.length} follower{tag.users.length === 1 ? '': 's'} / {' '}
            {tag.quests.length} recent post{tag.quests.length === 1 ? '': 's'}
          </span>
          <button
            onClick={(e) => this.handleTagFollow(e, tag)}
            className={`tag-details-${pos}-follow-button
                        ${tag.current_tag_join ? 'unfollowed' : ''}`}
            data-tag-join-id={tag.current_tag_join
              ? tag.current_tag_join.id : null}
          >
            {tag.users.includes(currentUser.id) ? "Unfollow" : "Follow"}
          </button>
        </>
      )

      const relatedTagSection = (
        <div className={`related-tags-${pos}-container`}>
          {relatedTagsArr}
        </div>
      )

      return (
        <>
        <div className={`tag-details-${pos}-container`}>
          <div
            onClick={userPageId
              ? () => this.props.openModal('userpage')
              : null}
            id={userPageId}
              style={{
                backgroundImage: `url(${imageSource})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'center',
                backgroundSize: '100%'
              }}
            className={`tag-details-${pos}-image-container 
                        ${userPageId ? '' : 'no-user'}`}
          >
            {pos === 'right' ? userInfoSection : (
              <>
                <div className="tag-top-info-container">{tagInfoSection}</div>
                {userInfoSection}
              </>
            )}
            {/* {userInfoSection} */}
          </div>
          <div className={`tag-details-${pos}-bottom`}>
            {pos === 'right' ? (
              <>
                {tagInfoSection}
                {relatedTagSection}
              </>
            ) : null}
          </div>
        </div>
        { pos === 'right' ? null : relatedTagSection }
      </>
      );
    }

    switch (page) {
      case 'explore':
        pageTitle = "Explore Adventr";
        leftTop = null;
        topNav = (
          <>
            <div
              onClick={(e) => this.handleTabs('For You')}
              className={`explore-tab ${pageTab === 'For You' ? 'active' : ''}`}>For You</div>
            <div
              onClick={(e) => this.handleTabs('Trending')}
              className={`explore-tab ${pageTab === 'Trending' ? 'active' : ''}`}>Trending</div>
            <div
              onClick={(e) => this.handleTabs('Guildmaster Picks')}
              className={`explore-tab ${pageTab === 'Guildmaster Picks' ? 'active' : ''}`}>Guildmaster Picks</div>
            <div
              onClick={(e) => this.handleTabs('More')}
              className={`explore-tab ${pageTab === 'More' ? 'active' : ''}`}>More</div>
          </>
        );
        leftMiddle = (<div className="explore-tag-container">{newTagElements}</div>)
        rightTop = tagCycle;
        rightBottom = (<GuildRecs />)
        break;
      case 'tag':
        pageTitle = `Tag - #${tag.tag_name}`;
        leftTop = tagDetailGenerator('top');
        topNav = (
          <>
            <div
              onClick={(e) => this.handleTabs('Recent')}
              className={`explore-tab ${pageTab === 'Recent' ? 'active' : ''}`}
            >Recent</div>
            <div
              onClick={(e) => this.handleTabs('Top')}
              className={`explore-tab ${pageTab === 'Top' ? 'active' : ''}`}
            >Top</div>
          </>
        );
        leftMiddle = null;
        rightTop = tagDetailGenerator('right');
        rightBottom = (<GuildRecs />);
        break;
      default:
        pageTitle = "Something broke!"
        break;
    }

    return (
      <>
        <Helmet><title>{pageTitle}</title></Helmet>
        <div className="explore-container">
          {leftTop}
          <div className="explore">
            <div className="explore-left">
              <div className="explore-header">
                {/* Placeholders, no true functionality yet */}
                {topNav}
              </div>
              {leftMiddle}
              {questDisplay}
            </div>
            <div className="explore-right">
              {rightTop}
              {rightBottom}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Explore;
