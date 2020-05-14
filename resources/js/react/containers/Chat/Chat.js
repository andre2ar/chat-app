import React from 'react';
import Messages from "./Messages/Messages";

import './Chat.css';
import MessageField from "./MessageField/MessageField";

const Chat = props => {
    return (
        <div className='Chat'>
            <Messages />
            <MessageField/>
        </div>
    );
}

export default Chat;
