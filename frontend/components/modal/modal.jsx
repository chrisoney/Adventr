import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserPage from './user_page'
import UserMenu from './user_menu'


class Modal extends React.Component {



  render() {
    const { modal, openModal, closeModal } = this.props;

    if (!modal) {
      return null;
    }
    let background;
		let container;
    let component;

    switch (modal) {
      case 'usermenu':
				component = <UserMenu />;
				background = 'user-menu-background';
				container = 'user-menu-container';
				break;
      case 'userpage':
				component = <UserPage authorId={event.target.id}/>;
				background = 'user-page-background';
				container = 'user-page-container';
				break;
      default:
        return null;
    }

    return (
      <div className={background} onClick={closeModal}>
        <div className={container} onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
