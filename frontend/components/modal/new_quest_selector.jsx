import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

class NewQuestSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.querySelector('body').style.position = 'fixed';
  }

  componentWillUnmount() {
    document.querySelector('body').style.position = 'relative';
  }

  render() {
    return (
      <>
        <div className="option-container selector-text">
          <span className="fas fa-font"></span>
        </div>
        <div className="option-container selector-image">
          <span className="fas fa-camera"></span>
        </div>
        <div className="option-container selector-quote">
          <span className="fas fa-quote-right"></span>
        </div>
        <div className="option-container selector-audio">
          <span className="fas fa-music"></span>
        </div>
        <div className="option-container selector-video">
          <span className="fas fa-video"></span>
        </div>
      </>
    );
  }
}

export default NewQuestSelector;
