import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import AvatarContainer from './avatar_container';

class Modal2 extends React.Component {
  render() {
    const { modal2, closeModal } = this.props;
    if (!modal2) {
      return null;
    }
    let background;
    let container;
    let component;
    let onClickEffect;

    switch (modal2) {
      case 'avatar':
        component = <AvatarContainer />;
        background = 'new-avatar-background';
        container = 'new-avatar-container';
        onClickEffect = closeModal;
        break;
      default:
        return null;
    }
    return (
      <div className={background} onClick={(e) => onClickEffect(e)}>
        <div className={container} onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal2: state.ui.modal2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal2);
