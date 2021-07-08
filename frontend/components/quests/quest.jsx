import React from 'react';
import { Link } from 'react-router-dom';
import HeartAnimation from './heart_animation';
// import { deleteQuest } from '../../util/quest_api_utils';

class Quest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null || this.props.author,
      authorAvatar: this.props.authorAvatar,
      liked: this.props.liked,
      visible: false,
      followed: false || this.props.followed,
    };
    this.toggleFollowed = this.toggleFollowed.bind(this);
    this.toggleLiked = this.toggleLiked.bind(this);
  }

  componentDidMount() {
    // if (!this.props.author) {
    //   this.props.fetchUser(this.props.authorId);
    // }
    // this.props.fetchAllLikes();
    // this.props.fetchSingleQuest(this.props.quest.id);
  }

  componentDidUpdate(prevProps) {
    if (
      (this.props.author && !prevProps.author) ||
      this.props.author !== prevProps.author
    ) {
      this.setState({ author: this.props.author });
    }

    if (this.props.followed !== prevProps.followed) {
      this.setState({ followed: this.props.followed });
    }
    if (this.props.liked !== prevProps.liked) {
      this.setState({ liked: this.props.liked });
      if (this.props.type === 'quest') {
        this.props.fetchSingleQuest(this.props.posting.id);
      } else if (this.props.type === 'reblog') {
        console.log('huh?')
      }
      this.props.fetchAllLikes();
    }
    if (this.props.posting.id !== prevProps.posting.id) {
      this.setState({
        liked: this.props.liked,
        followed: this.props.followed,
        visible: false
      });
    }
  }


  toggleLiked(e) {
    e.preventDefault();
    const posting = this.props.posting;
    const likeable_type = this.props.type[0].toUpperCase()
      + this.props.type.slice(1);
    const formData = new FormData();
    formData.append('like[user_id]', this.props.currentUser.id);
    formData.append('like[likeable_id]', this.props.posting.id);
    formData.append('like[likeable_type]', likeable_type);
    if (this.state.liked) {
      this.props.unlikePosting(formData);
    } else {
      this.props.likePosting(formData);
    }
    this.setState({ liked: !this.state.liked });
    this.setState({ visible: true });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 500);
  }

  toggleFollowed() {
    const posting = this.props.posting;
    if (this.state.followed) {
      this.props.unfollowUser(posting.authorId);
    } else {
      this.props.followUser(posting.authorId);
    }
  }

  render() {
    const { currentUser, posting, authorId, deleteQuest, loc, tags, noteCount, type, reblogQuest } = this.props;
    let { author, authorAvatar } = this.state;
    let visibility = this.state.visible;
    let followUser;
    let likedClass;
    let heartAnimation;


    const quest = type === 'quest' ? posting : reblogQuest;

    let questHeader;
    let questFooter;

    if (!author) author = '';
    if (this.state.followed) {
      followUser = (
        <div
          onClick={this.toggleFollowed}
          className="unfollow-button follow-toggle-button"
        >
          Unfollow
        </div>
      );
    } else {
      followUser = (
        <div
          onClick={this.toggleFollowed}
          className="follow-button follow-toggle-button"
        >
          Follow
        </div>
      );
    }

    if (this.state.liked) {
      likedClass = 'liked-heart fas fa-heart';
      heartAnimation = (
        <HeartAnimation
          visible={visibility}
          class={'regular-heart fas fa-heart'}
        />
      );
      visibility = false;
    } else {
      likedClass = 'unliked-heart far fa-heart';
      heartAnimation = (
        <HeartAnimation
          visible={visibility}
          class={'broken-heart fas fa-heart-broken'}
        />
      );
      visibility = false;
    }

    if (authorId === currentUser.id) {
      questHeader = (
        <span
          className={`quest-author`}
          onClick={() => this.props.openModal('userpage')}
          id={this.props.authorId}
        >
          {author.username}
        </span>
      );
      questFooter = (
        <div className={`quest-footer`}>
          <div className={`quest-footer-left`}>
            <div className="note-section">
              {noteCount} {noteCount === 1 ? "Note" : "Notes"}
            </div>
          </div>
          <div className={`quest-footer-right`}>
            <div className={`quest-buttons`}>
              <button 
                className="edit fas fa-edit"
                onClick={() => this.props.openModal(`edit-quest-${posting.id}`)}
              ></button>
              <button
                className="trash fas fa-trash"
                onClick={() => deleteQuest(posting.id)}
                id={posting.id}
              ></button>
            </div>
          </div>
        </div>
      );
    } else {
      questHeader = (
        <>
          <span
            onClick={() => this.props.openModal('userpage')}
            id={this.props.authorId}
          >
            {author.username}
          </span>
          {type === 'reblog' && (
            <>
              <span className="reblog header-icon fas fa-retweet"></span>
              <span className="reblog-header-username">
                {posting.quest_author.username}
              </span>
            </>
          )}
          {followUser}
        </>
      );
      questFooter = (
        <div className={`quest-footer`}>
          <div className={`quest-footer-left`}>
            <div className="note-section">
              {noteCount} {noteCount === 1 ? "Note" : "Notes"}
            </div>
          </div>
          <div className={`quest-footer-right`}>
            <div className={`quest-buttons`}>
              {/* Not functional yet */}
              {/* <button className="reply fas fa-reply"></button> */}
              {type !== 'reblog' && <button
                className="reblog fas fa-retweet"
                onClick={e => this.props.openModal(`reblog-new-${posting.id}`)}
              ></button>}
              <button
                className={`like ${likedClass}`}
                onClick={(e) => this.toggleLiked(e)}
              ></button>
              {heartAnimation}
            </div>
          </div>
        </div>
      );
    }
    let isQuote = quest.quest_type === 'quote' ? '"' : (source = null);
    let source = quest.quest_type === 'quote' ? '\u2014' : (isQuote = null);

    let titleSection = null;
    if (quest.title !== '') {
      titleSection = (
        <div className="title">
          {isQuote} {quest.title} {isQuote}
        </div>
      );
    }

    let imageSection = null;
    if (quest.imageUrls && quest.quest_type === 'image') {
      imageSection = quest.imageUrls.map((imageUrl, idx) => {
        return <img key={`img-${idx}`} className="image-video" src={imageUrl} />;
      });
    }

    let videoSection = null;
    if (quest.imageUrls && quest.quest_type === 'video') {
      videoSection = quest.imageUrls.map((imageUrl, idx) => {
        return (
          <video key={`vid-${idx}`} src={imageUrl} className="image-video" controls />
        );
      });
    }

    let audioSection = null;
    if (quest.imageUrls && quest.quest_type === 'audio') {
      audioSection = quest.imageUrls.map((imageUrl, idx) => {
        return (
          <div key={`audio-${idx}`} className="audio">
            <audio className="audio-controls" src={imageUrl} controls />
          </div>
        );
      });
    }

    let textSection = null;
    if (posting.text !== '') {
      textSection = (
        <div className="text">
          {source}
          {posting.text}
        </div>
      );
    }

    let tagSection = null;
    if (posting.tag_joins.length > 0) {
      const questTags = posting.tag_joins.map((tag_join,idx) => {
        return (
          <Link
            to={`/tag/${tag_join.tag.id}`}
            key={`quest-${posting.id}-tag-${idx}`}
            className={`quest-tag`}
            data-tag-join-id={tag_join.id}
          >
            #{tag_join.tag.tag_name}
          </Link>
        );
      });
      tagSection = <div className={`quest-tag-container`}>{questTags}</div>;
    }

    let avatar = window.avatar;
    if (author && author.avatar !== 'default') {
      avatar = authorAvatar || author.avatar;
    }

    return (
      <div key={`${type}-${posting.id}`} className={`quest-container-${loc}`}>
        <img
          className={`avatar-${loc}`}
          src={avatar}
          onClick={() => this.props.openModal('userpage')}
          id={this.props.authorId}
        />
        <div className={`quest`}>
          <div className={`quest-header`}>
            <img
              className={`avatar-${loc}-small`}
              src={avatar}
              onClick={() => this.props.openModal('userpage')}
              id={this.props.authorId}
            />
            {questHeader}
          </div>
          {titleSection}
          {imageSection}
          {audioSection}
          {videoSection}
          {textSection}
          {tagSection}
          <div className={`quest-footer-container`}>{questFooter}</div>
        </div>
      </div>
    );
  }
}

export default Quest;
