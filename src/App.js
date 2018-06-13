import React, { Component } from 'react';

import './App.css';
import Main from './Main';
import Sign from './Sign';

class App extends Component {
  state = {
    user: {
      uid: '023502',
      userName: '', 
      
    }
  }
  addUser=(userName)=> {
    const user = [...this.state.user]; //breaks an array into varius pieces
    console.log(user)
    user.userName = userName;
   
   
    this.setState({user});
    //console.log(this.state.user.userName);
  }
  
  render() {
    
    console.log("userName" + this.state.user.userName);
    if(this.state.user.userName.length > 0){
      console.log('yep');
      return (
        <div className="App">
          <Main user={this.state.user}/>
        </div>
      )
    }
    else{
      return (
        <Sign user={this.state.user} addUser={this.addUser}/>
      )
    }
   
  }
}

export default App;
