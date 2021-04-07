import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: 'account',
    };
    this.switchOptions = this.switchOptions.bind(this);
  }

  switchOptions(choice) {
    this.setState({ selectedOptions: choice });
  }

  render() {
    const { currentUser } = this.props;
    let settingsLeft;

    return (
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
    );
  }
}

export default Settings;
