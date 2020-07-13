import { connect } from "react-redux";
import SignupForm from "./signup_form";
import {
  signup,
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
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
