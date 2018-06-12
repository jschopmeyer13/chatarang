import React, { Component } from 'react';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class Chat extends Component {
    constructor() {
        super()

        this.state = {
            messages: [
                {
                    id: 1,
                    userName: 'dstrus',
                    body: 'Cool',
                },
                {
                    id: 2,
                    userName: 'dpalazzo',
                    body: 'This guy is so annoying, I hate my job.',
                },
            ]
        }
    }
    
    
    addMessage=(body)=> {
        const messages = [...this.state.messages]; //breaks an array into varius pieces
        messages.push({
            id: Date.now(),
            userName: 'jieun',
            body,
        })
        this.setState({messages}); // could just put messages
    }
    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages} />
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}

export default Chat;