import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


class Modal extends React.Component {



  render() {
    const { modal, openModal, closeModal } = this.props;

    if (!modal) {
      return null;
    }

    let component;

    switch (modal) {
      default:
        return null;
    }

    return (
      <div className="modal-background">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
