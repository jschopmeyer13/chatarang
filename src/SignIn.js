import React, { Component } from 'react' ;

class MessageForm extends Component {
    state = {
        user:{}
        body: '',

    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.addMessage(this.state.body);
    }
    handleChange = (ev) => {
        //console.log('yo');
        this.setState({body: ev.target.value});
    }
    render(){
        return (
            <form className="MessageForm" style={styles.MessageForm} onSubmit= {this.handleSubmit}>
                <input 
                    type="text" 
                    name="body" 
                    placeholder="Type a message..."
                    value={this.state.body} 
                    onChange={this.handleChange}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Send</button>
            </form>
        )
    }
}

export default SignIn; 