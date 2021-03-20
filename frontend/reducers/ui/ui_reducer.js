import { combineReducers } from "redux";

import modal from "./modal_reducer";
import modal2 from './modal2_reducer';

export default combineReducers({
  modal,
  modal2,
});
