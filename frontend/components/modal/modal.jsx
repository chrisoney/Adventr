import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import UserPage from './user_page'
import UserMenu from './user_menu'
import NewQuestContainer from './new_quest_container'


class Modal extends React.Component {


  render() {
    const { modal, closeModal } = this.props;
    if (!modal) {
      return null;
    }
    let background;
		let container;
    let component;
    let formType;

    if (modal.slice(0, 4) === 'new-') { formType = modal.slice(4) }

    switch (modal) {
      case 'new-text':
      case 'new-image':
      case 'new-quote':
      case 'new-audio':
      case 'new-video':
        component = <NewQuestContainer type={formType} />;
				background = 'new-quest-background';
				container = 'new-quest-container';
				break;
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
