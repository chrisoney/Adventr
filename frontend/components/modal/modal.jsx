import React from 'react';
import { connect } from 'react-redux';
import { openModal, openModal2, closeModal } from '../../actions/modal_actions';
import UserPage from './user_page';
import UserMenu from './user_menu';
import NewQuestContainer from './new_quest_container';
import AvatarContainer from './avatar_container';
import NewQuestSelector from './new_quest_selector';
import EditQuestContainer from './edit_quest_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modal, closeModal, openModal2, quest, reblogAction } = this.props;
    if (!modal) {
      return null;
    }
    let background;
    let container;
    let component;
    let formType;
    let onClickEffect;
    let transparentBackground;

    const userPageClose = (e) => {
      e.preventDefault();
      document.querySelector('.user-page-container').classList.add('close');
      window.setTimeout(() => {
        closeModal();
      }, 500);
    };

    if (modal.slice(0, 4) === 'new-') {
      formType = modal.slice(4);
    }
    switch (modal) {
      case 'new-text':
      case 'new-image':
      case 'new-quote':
      case 'new-audio':
      case 'new-video':
        component = <NewQuestContainer type={formType}/>;
        background = 'new-quest-background';
        container = 'new-quest-container';
        onClickEffect = closeModal;
        transparentBackground = <div className="test-background"></div>;
        break;
      case 'reblog-new':
        component = <NewQuestContainer type={quest.quest_type} quest={quest} reblogAction={reblogAction}/>;
        background = 'new-quest-background';
        container = 'new-quest-container';
        onClickEffect = closeModal;
        transparentBackground = <div className="test-background"></div>;
        break;
      case 'edit-quest':
        component = <EditQuestContainer
          type={quest.quest_type}
          quest={quest}
          reblogAction={reblogAction}
        />;
        background = 'new-quest-background';
        container = 'new-quest-container';
        onClickEffect = closeModal;
        transparentBackground = <div className="test-background"></div>;
        break;
      case 'avatar':
        component = <AvatarContainer />;
        background = 'new-avatar-background';
        container = 'new-avatar-container';
        onClickEffect = closeModal;
        break;
      case 'usermenu':
        component = (
          <UserMenu openModal2={openModal2} closeModal={closeModal} />
        );
        background = 'user-menu-background';
        container = 'user-menu-container';
        onClickEffect = null;
        break;
      case 'userpage':
        component = <UserPage authorId={event.target.id} />;
        background = 'user-page-background';
        container = 'user-page-container';
        onClickEffect = userPageClose;
        break;
      case 'new-quest-selector':
        component = <NewQuestSelector />;
        background = 'quest-selector-background';
        container = 'quest-selector-container';
        onClickEffect = closeModal;
        break;
      default:
        return null;
    }
    return (
      <>
        {transparentBackground}
        <div className={background} onClick={(e) => onClickEffect(e)}>
          <div className={container} onClick={(e) => e.stopPropagation()}>
            {component}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let modal = state.ui.modal;
  let quest;
  let reblogAction = null;
  if (modal && modal.startsWith('edit-quest')) {
    modal = state.ui.modal.slice(0, 10);
    const id = parseInt(state.ui.modal.slice(11));
    quest = state.entities.quests[id];
  } else if (modal && modal.startsWith('reblog-new')) {
    modal = modal.slice(0, 10);
    const id = parseInt(state.ui.modal.slice(11));
    quest = state.entities.quests[id];
    reblogAction = 'create';
  } else if (modal && modal.startsWith('reblog-edit')) {
    modal = modal.slice(0, 11);
    const id = parseInt(state.ui.modal.slice(12));
    quest = state.entities.quests[id];
    reblogAction = 'edit';
  }
  return {
    quest,
    modal: modal,
    modal2: state.ui.modal2,
    reblogAction
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    openModal2: (modal) => dispatch(openModal2(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
