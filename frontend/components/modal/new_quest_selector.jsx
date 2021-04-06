import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

class NewQuestSelector extends React.Component {
  constructor(props) {
    super(props);
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }
  componentDidMount() {
    document.querySelector('body').style.position = 'fixed';
    setTimeout(() => {
      if (document.querySelector('.quest-selector-container')) {
        document
          .querySelector('.quest-selector-container')
          .classList.add('animation-on');
        document
          .querySelector('.selector-cancel-button')
          .classList.add('animation-on','visible');
      }
    }, 3000);
  }

  componentWillUnmount() {
    document.querySelector('body').style.position = 'relative';
  }
  toggleAnimation() {
    document
      .querySelector('.quest-selector-container')
      .classList.toggle('animation-on');
    document
      .querySelector('.selector-cancel-button')
      .classList.toggle('animation-on');
  }
  render() {
    return (
      <>
        <div
          onClick={() => this.props.openModal('new-text')}
          className="option-container selector-text"
        >
          <span className="fas fa-font"></span>
        </div>
        <div
          onClick={() => this.props.openModal('new-image')}
          className="option-container selector-image"
        >
          <span className="fas fa-camera"></span>
        </div>
        <div
          onClick={() => this.props.openModal('new-quote')}
          className="option-container selector-quote"
        >
          <span className="fas fa-quote-right"></span>
        </div>
        <div
          onClick={() => this.props.openModal('new-audio')}
          className="option-container selector-audio"
        >
          <span className="fas fa-music"></span>
        </div>
        <div
          onClick={() => this.props.openModal('new-video')}
          className="option-container selector-video"
        >
          <span className="fas fa-video"></span>
        </div>
        <div
          onClick={this.toggleAnimation}
          className="selector-cancel-button"
        >
          <span>Toggle</span>
          <span>Animation</span>
        </div>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    // closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewQuestSelector)
);
