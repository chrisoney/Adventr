import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class NewQuestCreate extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { openModal } = this.props;
    return (
      <div className="quest-create-container">
        <button className="text-container" onClick={() => this.props.openModal("new-text")}>
            <div className="text-button fas fa-font"></div>
            <span>Text</span>
				</button>

        <button className="image-container" onClick={() => this.props.openModal("new-image")}>
            <div className="image-button fas fa-camera"></div>
            <span>Image</span>
        </button>

        <button className="quote-container" onClick={() => this.props.openModal("new-quote")}>
            <div className="quote-button fas fa-quote-right"></div>
            <span>Quote</span>
        </button>
        <button className="audio-container" onClick={() => this.props.openModal("new-audio")}>
            <div className="audio-button fas fa-music"></div>
            <span>Audio</span>
        </button>
        <button className="video-container" onClick={() => this.props.openModal("new-video")}>
          <div className="video-button fas fa-video"></div>
          <span>Video</span>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

}

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestCreate);