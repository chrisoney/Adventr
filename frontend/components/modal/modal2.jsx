import React from 'react';
import { connect } from 'react-redux';
import { openModal2, closeModal2 } from '../../actions/modal_actions';
// import AvatarContainer from './avatar_container';
import UserDropdown from './user_dropdown';

class Modal2 extends React.Component {
  render() {
    const { modal2, closeModal2, openModal2 } = this.props;
    if (!modal2) {
      return null;
    }
    let background;
    let container;
    let component;
    let onClickEffect;
    switch (modal2) {
      case 'user-dropdown':
        component = <UserDropdown />;
        background = 'user-dropdown-background';
        container = 'user-dropdown-container';
        onClickEffect = closeModal2;
        break;
      default:
        return null;
    }
    return (
      <>
        <div className={background} onClick={(e) => onClickEffect(e)}></div>
        <div className={container} onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </>
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
    openModal2: (modal) => dispatch(openModal2(modal)),
    closeModal2: () => dispatch(closeModal2()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal2);
