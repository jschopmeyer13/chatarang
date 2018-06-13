import React, { Component } from 'react';

class Sign extends Component {
    state = {
       userName: '',
    }
    handleSubmit = (ev) => {
        ev.preventDefault();

        this.props.addUser(this.state.userName);



        
    }
    handleChange= (ev) => {
        this.setState({userName: ev.target.value});
    }
    //addUserName=(usr)=> {
        
    render(){
        <h1> Sign in </h1>
        return (
            
            <form className="SignInForm" style={styles.SignForm}  onSubmit= {this.handleSubmit}>
                    <h1 style={styles.h1}> Sign in </h1>
                    <input 
                        type="text" 
                        name="body" 
                        placeholder="Type username..."
                        value={this.state.userName} 
                        onChange={this.handleChange}
                        
                    />
                    <button type="submit">Sign In</button>
                </form>

        )
    }

}
const styles = {
    SignForm: {
        border: '1px navy solid',
        textAlign: 'center',
        fontStyle: 'sans-serif',
        marginTop: '20px',
        paddingBottom: '10px',
        margin: 'auto',
        width: '50%',
        
    },
    h1: {
        fontStyle: 'sans-serif',
        color: 'navy',
        fontSize: '30px',
    }
}
export default Sign;
