import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class GuildRecs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GuildRecs)
);
