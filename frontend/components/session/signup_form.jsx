import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const that = this;
    if (this.state.email === "") {
      this.setState({ errors: "Don't forget your email address!" });
    } else if (this.state.password === "") {
      this.setState({ errors: "You forgot to enter your password!" });
    } else {
      this.props
        .signup(this.state)
        .then(() => this.props.history.push("/dashboard"));
    }
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
    if (this.state.errors) {
      errors = <span className="errors">{this.state.errors}</span>;
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
            type="email"
            required
            id="email"
            value={this.state.email}
            onChange={this.handleInput("email")}
            placeholder="Email"
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
            Sign Up
          </button>
          <button className="demo-user" onClick={this.demoLogin}>
            Demo User
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
