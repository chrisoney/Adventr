import { OPEN_MODAL_2, CLOSE_MODAL_2 } from '../../actions/modal_actions';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL_2:
      return action.modal2;
    case CLOSE_MODAL_2:
      return null;
    default:
      return state;
  }
}
