import React from 'react';

const MessageForm = () => {
    return (
        <form className="MessageForm">
            <input type="text" name="body" placehodler="Type a message..." />
            <button type="button">Send</button>
        </form>
    )
}

export default MessageForm;