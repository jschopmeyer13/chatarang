import React from 'react';

import Message from './Message';
const MessageList = (props) => {
    return (
        <div className="MessageList">
            {
                props.messages.map(msg => (
                    <Message key={msg.id} message= {msg} />
                ))
            }
        </div>
    )
}

const styles = {
    MessageList: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
      },
      
      roomAnnouncement: { //.MessageList
        padding: '2rem 1rem',
      },
      
      h3: { //.MessageList .roomAnnouncement
        fontSize: '1.5rem',
      }
      
}

export default MessageList