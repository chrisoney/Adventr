import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

class NewQuestSelector extends React.Component {
  constructor(props) {
    superProps;
  }

  render() {
    return (
      <>
        <div class="option-container selector-text">
          <span class="fas fa-font"></span>
        </div>
        <div class="option-container selector-image">
          <span class="fas fa-camera"></span>
        </div>
        <div class="option-container selector-quote">
          <span class="fas fa-quote-right"></span>
        </div>
        <div class="option-container selector-audio">
          <span class="fas fa-music"></span>
        </div>
        <div class="option-container selector-video">
          <span class="fas fa-video"></span>
        </div>
      </>
    );
  }
}

export default NewQuestSelector;
