import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = () =>
      this.setState({
        errors: "Incorrect username or password.",
      });
    this.props
      .login(this.state)
      .then(() => this.props.history.push("/dashboard"));
  }

  demoLogin() {
    const demo = {
      username: "fake-user",
      email: "fakeuser@fake.com",
      password: "hunter12",
    };

    this.props
      .login(demo)
      .then(() => this.props.history.push("/explore"));
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  render() {
    let errors = null;
    if (this.props.errors.length > 0) {
      errors = (
        <ul className="errors">
          {this.props.errors.map((error, idx) => (
            <li key={`error ${idx}`}>{error}</li>
          ))}
        </ul>
      );
    }

    return (
      <div className="splash">
        <form className="splash-content">
          <p className="app-name">adventr</p>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleInput("username")}
            placeholder="Username"
          />
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleInput("password")}
            placeholder="Password"
          />
          {errors}
          <button className="signup" onClick={this.handleSubmit}>
            Login
          </button>
          <button className="demo-user" onClick={this.demoLogin}>
            Demo User
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
