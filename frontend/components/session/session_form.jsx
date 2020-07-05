import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(inputType) {
    return (e) => {
      this.setState({ [inputType]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const headerText = this.props.formType === 'signup' ? 'Sign Up' : "Log In";
    const link = this.props.formType === 'signup' ? '/login' : "/signup";
    const linkText = this.props.formType === 'signup' ? 'Log In' : "Sign Up";
    return (
      <div>
        <form className="session-form">
          <h3>{headerText}</h3>
          <label>Username
            <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
          </label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <input type="submit" onClick={this.handleSubmit}/>
        </form>
        <div className = "session-form-link">
          <Link to={link}>{linkText}</Link>
        </div>
      </div>
    )
  }
}

export default SessionForm;