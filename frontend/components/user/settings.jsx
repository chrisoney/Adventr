import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: 'account',
      email: this.props.currentUser.email,
      oldPassword: '',
      password: ''
    };
    this.switchOptions = this.switchOptions.bind(this);
    this.toggleAttributes = this.toggleAttributes.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e, type) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', this.props.currentUser.id);
    formData.append(`user[${type}]`, this.state[type]);
    formData.append('old_password', this.state.oldPassword);
    this.props.updateUser(formData);
    this.toggleAttributes(e, type);
  }

  switchOptions(choice) {
    this.setState({ selectedOptions: choice });
  }

  toggleAttributes(e, type) {
    e.preventDefault();
    document.querySelectorAll(`[data-attribute-type='${type}']`)
      .forEach(ele => ele.classList.toggle('hide'));
    let resetInput;
    if (type === 'password') resetInput = '';
    else {
      resetInput = this.props.currentUser[type];
    }
    //temporary password clear
    document.querySelector('.attribute-input.password').value = ''
    this.setState({ [type]: resetInput });
  }

  render() {
    const { currentUser } = this.props;
    let settingsLeft;

    switch (this.state.selectedOptions) {
      case 'account':
        settingsLeft = (
          <div className="settings-left">
            <div className="left-title">Account</div>
            <div className="settings-left-panel">
              <div className="panel-title">Email</div>
              <div
                data-attribute-type="email"
                className="attribute-container"
              >
                <div
                  className="current-attribute"
                >{currentUser.email}</div>
              </div>
              <div
                data-attribute-type="email"
                className="attribute-edit-container hide"
              >
                <input
                  type='text'
                  className="attribute-input"
                  defaultValue={currentUser.email}
                  onChange={this.handleInput('email')}
                />
                <input
                  type="password"
                  className="attribute-input password"
                  placeholder="Confirm Password"
                  onChange={this.handleInput('oldPassword')}
                />
                <div className="attribute-edit-button-container">
                  <div
                    className="cancel-button"
                    onClick={(e) => this.toggleAttributes(e, 'email')}
                  >Cancel</div>
                  <div
                    onClick={(e) => this.handleSubmit(e, 'email')}
                    className="save-button"
                  >Save</div>
                </div>
              </div>
              <div
                data-attribute-type="email"
                className="edit-button-container"
              >
                <span
                  className="fas fa-feather-alt"
                  onClick={(e) => this.toggleAttributes(e, 'email')}
                ></span>
              </div>
            </div>
            <div className="settings-left-panel">
              <div className="panel-title">Password</div>
              <div
                data-attribute-type="password"
                className="attribute-container"
              >
                <div
                  className="current-attribute"
                >&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</div>
              </div>
              <div
                data-attribute-type="password"
                className="attribute-edit-container hide"
              >
                <input
                  type='password'
                  className="attribute-input"
                  placeholder="Confirm Password"
                  onChange={this.handleInput('oldPassword')}
                />
                <input
                  type="password"
                  className="attribute-input password"
                  placeholder="New Password"
                  onChange={this.handleInput('password')}
                />
                <div className="attribute-edit-button-container">
                  <div
                    className="cancel-button"
                    onClick={(e) => this.toggleAttributes(e, 'password')}
                  >Cancel</div>
                  <div
                    onClick={(e) => this.handleSubmit(e, 'password')}
                    className="save-button"
                  >Save</div>
                </div>
              </div>
              <div
                data-attribute-type="password"
                className="edit-button-container"
              >
                <span
                  className="fas fa-feather-alt"
                  onClick={(e) => this.toggleAttributes(e, 'password')}
                ></span>
              </div>
            </div>
          </div>
        );
        break;
      case 'dashboard':
        settingsLeft = (
          <div>Dashboard</div>
        );
        break;
      case 'guild':
        settingsLeft = (
          <div>Guild Info</div>
        );
        break;
      default:
        settingsLeft = null;
    }

    return (
      <div className="settings-background">
        <div className="settings-container">
          {settingsLeft}
          <div className="settings-right">
            <div className='settings-right-top'>
              <div
                onClick={()=> this.selectedOptions('account')}
                className='settings-right-panel'
              >
                  <div className='title'>Account</div>
                  <div className='description'>Adventurer's Gear</div>
                </div>
              <div
                onClick={()=> this.selectedOptions('dashboard')}
                className='settings-right-panel'
              >
                <div className='title'>Dashboard</div>
                <div className='description'>Just for Testing</div>
              </div>
            </div>
            <div className='settings-right-bottom'>
              <div className='settings-right-bottom-title'>Guilds</div>
              <div
                onClick={()=> this.selectedOptions('guild')}
                className='guild-container'
              >
                <div className='guild-container-left'>
                  <div className='guild-container-username'>{currentUser.username}</div>
                  <div className='guild-container-guildname'>{currentUser.guild_name}</div>
                </div>
                <div className='guild-container-right'>
                  <span className='fas fa-star'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
