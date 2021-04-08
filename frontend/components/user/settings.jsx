import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: 'account',
      editingAppearance: false,
      email: this.props.currentUser.email,
      oldPassword: '',
      password: ''
    };
    this.switchOptions = this.switchOptions.bind(this);
    this.toggleAttributes = this.toggleAttributes.bind(this);
    this.toggleAppearance = this.toggleAppearance.bind(this);
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

  toggleAppearance() {
    this.setState({ editingAppearance: !this.state.editingAppearance })
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
      case 'guild':
        settingsLeft = (
          <div className="settings-left">
            <div className="left-title-section">
              <div className='title-username'>{currentUser.username}</div>
              <div
                onClick={this.toggleAppearance}
                className='edit-appearance-button'
              >Don Your Armor</div>
            </div>
            <div className="appearance-section">
              <img className={`appearance-banner ${this.state.editingAppearance ? '' : 'hide'}`}
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ca7eb999-198d-4058-930a-9c99da62d96f/d5ulvau-a27e97a0-c5b9-491c-9880-d2bac30ac7a5.jpg/v1/fill/w_1065,h_750,q_70,strp/marfling_swamp___le_dernier_bastion_by_skavenzverov_d5ulvau-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTI4IiwicGF0aCI6IlwvZlwvY2E3ZWI5OTktMTk4ZC00MDU4LTkzMGEtOWM5OWRhNjJkOTZmXC9kNXVsdmF1LWEyN2U5N2EwLWM1YjktNDkxYy05ODgwLWQyYmFjMzBhYzdhNS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8BTJXNKdLu89YM1z78RVdRQl2Ita2VDuPLOjz-XA2Bg" />
              <img
                className={`appearance-avatar ${this.state.editingAppearance ? 'edit' : ''}`}
                src={currentUser.avatar}
              />
              <div className="guild-details">
                <div className="guildname">
                  {currentUser.guild_name || 'Untitled'}
                </div>
                <div className="guild-description">
                  {currentUser.guild_description || ''}
                </div>
              </div>
            </div>
            <div className="settings-left-panel">
              <div className="panel-title">Username</div>
              <div
                data-attribute-type="username"
                className="attribute-container"
              >
                <div
                  className="current-attribute"
                >{currentUser.username}</div>
              </div>
              <div
                data-attribute-type="username"
                className="attribute-edit-container hide"
              >
                <input
                  type='text'
                  className="attribute-input"
                  defaultValue={currentUser.username}
                  onChange={this.handleInput('username')}
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
                    onClick={(e) => this.toggleAttributes(e, 'username')}
                  >Cancel</div>
                  <div
                    onClick={(e) => this.handleSubmit(e, 'username')}
                    className="save-button"
                  >Save</div>
                </div>
              </div>
              <div
                data-attribute-type="username"
                className="edit-button-container"
              >
                <span
                  className="fas fa-feather-alt"
                  onClick={(e) => this.toggleAttributes(e, 'username')}
                ></span>
              </div>
            </div>
          </div>
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
                onClick={()=> this.switchOptions('account')}
                className='settings-right-panel'
              >
                  <div className='title'>Account</div>
                  <div className='description'>Adventurer's Gear</div>
                </div>
              <div
                onClick={()=> this.switchOptions('dashboard')}
                className='settings-right-panel'
              >
                <div className='title'>Dashboard</div>
                <div className='description'>Just for Testing</div>
              </div>
            </div>
            <div className='settings-right-bottom'>
              <div className='settings-right-bottom-title'>Guilds</div>
              <div
                onClick={()=> this.switchOptions('guild')}
                className='guild-container'
              >
                <img src={currentUser.avatar} className="guild-container-avatar"/>
                <div className='guild-container-details'>
                  <div className='guild-container-username'>{currentUser.username}</div>
                  <div className='guild-container-guildname'>
                    {currentUser.guild_name || currentUser.username}
                  </div>
                </div>
                <div className='guild-container-primary'>
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
