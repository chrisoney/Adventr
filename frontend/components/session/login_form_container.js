import { connect } from "react-redux";
import LoginForm from "./login_form";
import {
  login,
  clearSessionErrors,
} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  let errors = state.errors.session;
  return {
    errors: errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
