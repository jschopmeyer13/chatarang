import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import Main from './Main';

class Random extends Component {
  rooms = ['general', 'random'];
  currentRoom = 'random';
  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
        />
        <Chat user={this.props.user} />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main