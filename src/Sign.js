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
        return (
            
            <form className="SignInForm" style={styles.SignForm}  onSubmit= {this.handleSubmit}>
                    <h1 style={styles.h1}> Sign in </h1>
                    <input 
                        type="text" 
                        name="body" 
                        placeholder="Type username..."
                        value={this.state.userName} 
                        onChange={this.handleChange}
                        style={styles.input}
                        autofocus
                        
                    />
                    <button type="submit" style={styles.button}>Sign In</button>
                </form>

        )
    }

}
const styles = {
   
    SignForm: {
        // backgroundColor: 'aliceBlue' darkslateblue,
        height: '20%',
        borderLeft: '10px midnightblue ridge',
        borderRight: '10px midnightblue ridge',
        borderTop: '2px midnightblue solid', 
        borderBottom: '2px midnightblue solid',
        textAlign: 'center',
        fontStyle: 'sans-serif',
        marginTop: '20px',
        paddingBottom: '10px',
        margin: 'auto',
        width: '50%',
        
        
    },
    h1: {
        fontStyle: 'sans-serif',
        color: 'midnightblue',
        fontSize: '40px',
    },
    input:{
        fontStyle: 'sans-serif',
        fontSize: '15px',
        border: "1px midnightblue solid",
        
    },

    button:{
        color: 'white',
        backgroundColor: 'midnightblue',
        border: '1px midnightblue solid ',
        fontSize: '15px',
    }
}
export default Sign;
