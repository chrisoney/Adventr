import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: 'account',
      email: this.props.currentUser.email,
      oldPassword: '',
      newPassword: ''
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

  handleSubmit() {
    const formData = new FormData();
    formData.append('user[id]', this.props.currentUser.id);
    formData.append('user[email]', this.state.email);
    formData.append('old_password', this.state.oldPassword);
    this.props.updateUser(formData);
    this.toggleAttributes("email");
  }

  switchOptions(choice) {
    this.setState({ selectedOptions: choice });
  }

  toggleAttributes(type) {
    document.querySelectorAll(`[data-attribute-type='${type}']`)
      .forEach(ele => ele.classList.toggle('hide'));
    const resetInput = this.props.currentUser[type] || '';
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
                    onClick={(e) => this.toggleAttributes('email')}
                  >Cancel</div>
                  <div
                    onClick={this.handleSubmit}
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
                  onClick={(e) => this.toggleAttributes('email')}
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
