import React from 'react';

class Quest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: null || this.props.author,
    }
  }

  componentDidMount() {

  }
  render() {
    const { currentUser, quest, authorId } = this.props;
    let { author } = this.state;
    let image = (<></>);
    if (quest.quest_type === 'image'){
      image = (<img className="quest-image" src={`${quest.content_url}`} />)
    }

    if (!author) author = "";
    return (
      <div className = "feed-post">
        <div className="quest-header">
        <p className="quest-author">{author}</p>
        <p className="quest-title">{quest.title}</p>
        </div>
        <div className="quest-body">
          <p className="quest-text">{quest.text}</p>
          {image}
        </div>
      </div>
    )
  }
}

export default Quest;
