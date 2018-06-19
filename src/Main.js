import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './Base'
class Main extends Component {
  state = {
    room: {},
    rooms: {},
  }
  

  componentDidMount() {
    this.loadRoom({
      name: this.props.match.params.roomName,
      
    })
    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
      }
    )
  }
  addRoom = (room) => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = room
    
    this.setState({ rooms })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
      if(Object.keys(this.state.rooms).length > 0) {
        this.loadRoom({
          name: this.props.match.params.roomName,
          description: this.state.rooms[this.props.match.params.roomName].description
        })
      }
    }
  }

  loadRoom = (room) => {
    this.setState({ room })
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          rooms={this.state.rooms}
          signOut={this.props.signOut}
          addRoom={this.addRoom}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
          
        />
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