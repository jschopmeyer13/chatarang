import React, { Component } from 'react'

import base from './Base'
import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  state = {
    room: {},
    rooms: {},
  }

  componentDidMount() {
    const { roomName } = this.props.match.params

    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
        then: () => this.loadRoom(roomName),
      }
    )
  }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
      this.loadRoom(this.props.match.params.roomName)
    }
  }

  loadRoom = (roomName) => {
    if (roomName === 'new') return null
    const room = this.memberArray()
      .find(room => room.name === roomName)
    // const room = this.state.rooms[roomName]

    if (room) {
      this.setState({ room })
    } else {
      this.loadValidRoom()
    }
  }

  loadValidRoom = () => {
    const realRoomName = Object.keys(this.state.rooms).find(
      roomName => this.state.rooms[roomName]
    )

    this.props.history.push(`/rooms/${realRoomName}`)
  }

  removeRoom = (room) => {

    const rooms = {...this.state.rooms}
    rooms[room.name] = null

    this.setState(
      { rooms },
      this.loadValidRoom
    )
  }

  // start of code from class not used
  filteredRooms = () => {
    return this.filteredRoomNames()
               .map(roomName => this.state.rooms[roomName])
  }

  filteredRoomNames = () => {
    return Object.keys(this.state.rooms)
                 .filter(roomName => {
                   const room = this.state.rooms[roomName]
                   if (!room) return false

                   return room.public || this.includesCurrentUser(room)
                 })
  }

  includesCurrentUser = (room) => {
    const members = room.members || []
    return members.find(
      userOption => userOption.value === this.props.user.uid
    )
  }
  // end of code from class not used 

  checkIfMember = (roomName) =>{
    if(this.state.rooms[roomName]=== null){
      return false
    }
    else if(this.state.rooms[roomName].public){
      return true
    }
    else{
      const memberArray = this.state.rooms[roomName].members.map(member => 
        this.props.user.uid === member.value  
        )
     for(let i = 0; i < memberArray.length; i++){
       if(memberArray[i] === true){
         return true
       }
      }
      return false
    }
  }

  memberArray = () => (
    Object.keys(this.state.rooms).filter(
      roomName => this.checkIfMember(roomName)).map(roomName => this.state.rooms[roomName])
  )

  render() {
    // const arrRooms = Object.keys(this.state.rooms).filter(
    //   roomName => this.checkIfMember(roomName)).map(roomName => this.state.rooms[roomName])
    const arrRooms = this.memberArray()
    // console.log(this.filteredRooms())
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          users={this.props.users}
          signOut={this.props.signOut}
          arrRooms = {arrRooms}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
          removeRoom={this.removeRoom}
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